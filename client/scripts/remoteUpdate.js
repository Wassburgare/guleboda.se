const tar = require('tar');
const path = require('path');
const fs = require('fs');
const Client = require('ssh2').Client;
const devnull = require('dev-null');

const archivePath = path.resolve(__dirname, 'build.tar.gz');
const serverHome = '/home/wassburgare';
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

tar.c({ gzip: true, file: archivePath }, ['build'])
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
            .then(() => runCommand('rm -rf /var/www/guleboda.se/html/*'))
            .then(() => runCommand(`mv ${serverHome}/build/guleboda.se/* /var/www/guleboda.se/html`))
            .then(() => runCommand('rm -rf /var/www/admin.guleboda.se/html/*'))
            .then(() => runCommand(`mv ${serverHome}/build/admin.guleboda.se/* /var/www/admin.guleboda.se/html`))
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
        username: 'wassburgare',
        agent: process.env.SSH_AUTH_SOCK,
      });
    }),
  )
  .then(() => {
    fs.unlinkSync(archivePath);
  });
