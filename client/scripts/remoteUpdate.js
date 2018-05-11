const tar = require('tar');
const path = require('path');
const fs = require('fs');
const Client = require('ssh2').Client;
const devnull = require('dev-null');

const archivePath = path.resolve(__dirname, 'build.tar.gz');
const serverHome = '/home/wassburgare';
const sitePublic = '/var/www/guleboda.se/html';
const siteAdmin = '/var/www/admin.guleboda.se/html';
const connection = new Client();

const uploadFile = (sftp, srcFile, destFile) =>
  new Promise((resolve, reject) =>
    sftp.fastPut(srcFile, destFile, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    }),
  );

const runCommand = command =>
  new Promise((resolve, reject) => {
    connection.exec(command, (err, stream) => {
      if (err) {
        return reject(err);
      }
      return stream.pipe(devnull()).on('finish', () => resolve());
    });
  });

tar.c(
  {
    gzip: true,
    file: archivePath,
    C: path.resolve(__dirname, '..'),
  }, ['build'])
  .then(() =>
    new Promise((resolve, reject) => {
      connection.on('ready', () => {
        connection.sftp((err, sftp) => {
          if (err) {
            return reject(err);
          }

          console.log('Uploading build archive to server...');
          return uploadFile(sftp, archivePath, '/home/wassburgare/build.tar.gz')
            .then(() => {
              console.log('Build archive was successfully uploaded.');
              console.log('Updating website with new files...');
              return Promise.resolve();
            })
            .then(() => runCommand(`tar -xvf ${serverHome}/build.tar.gz`))
            .then(() => runCommand(`rm -rf ${sitePublic}/*`))
            .then(() => runCommand(`mv ${serverHome}/build/guleboda.se/* ${sitePublic}`))
            .then(() => runCommand(`rm -rf ${siteAdmin}/*`))
            .then(() => runCommand(`mv ${serverHome}/build/admin.guleboda.se/* ${siteAdmin}`))
            .then(() => runCommand(`rm -rf ${serverHome}/build`))
            .then(() => runCommand(`rm ${serverHome}/build.tar.gz`))
            .then(() => {
              console.log('Website was successfully updated.');
              connection.end();
              return resolve();
            });
        });
      }).connect({
        host: 'guleboda.se',
        port: 2810,
        username: 'wassburgare',
        agent: process.env.SSH_AUTH_SOCK,
      });
    }),
  )
  .then(() => {
    fs.unlinkSync(archivePath);
  })
  .catch((err) => {
    console.log(err);
  });
