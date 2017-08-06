const tar = require('tar');
const path = require('path');
const fs = require('fs');
const Client = require('ssh2').Client;
const devnull = require('dev-null');

const archivePath = path.resolve(__dirname, 'build.tar.gz');
const serverHome = '/home/wassburgare';
const commands = [
  `tar -xvf ${serverHome}/build.tar.gz`,
  'rm -rf /var/www/guleboda.se/html/*',
  `mv ${serverHome}/build/guleboda.se/* /var/www/guleboda.se/html`,
  'rm -rf /var/www/admin.guleboda.se/html/*',
  `mv ${serverHome}/build/admin.guleboda.se/* /var/www/admin.guleboda.se/html`,
  `rm -rf ${serverHome}/build`,
  `rm ${serverHome}/build.tar.gz`,
];
const connection = new Client();

tar.c(
  {
    gzip: true,
    file: archivePath,
  },
  ['build'],
).then(() => {
  return new Promise((resolve, reject) => {
    connection.on('ready', () => {
      connection.sftp((err, sftp) => {
        if (err) {
          return reject(err);
        }

        sftp.fastPut(archivePath, '/home/wassburgare/build.tar.gz', (err) => {
          if (err) {
            return reject(err);
          }

          connection.exec(commands.join(' && '), (err, stream) => {
            if (err) {
              return reject(err);
            }

            stream.pipe(devnull()).on('finish', () => {
              connection.end();
              return resolve();
            });
          });
        });
      });
    }).connect({
      host: 'guleboda.se',
      username: 'wassburgare',
      agent: process.env.SSH_AUTH_SOCK,
    });
  });
}).then(() => {
  fs.unlink(archivePath);
});
