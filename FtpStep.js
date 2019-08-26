let FTPClient = require('ssh2-sftp-client');
var fs = require('fs');
///////////////////////////////////////////////////////////////////////////////////////////////////////
function FtpStep(FileToSend) {
    return new Promise(function (resolve, reject) {
        console.log("Sending to FTP.");
        // const { sftpSite, sftpUser, sftpKeyFile, fileName } = FileToSend;
        // let readStream = fs.createReadStream('/tmp/' + fileName);
        // let sftp = new FTPClient();
        // sftp.on('close', (sftpError) => {
        //     if (sftpError) {
        //         console.error(new Error("sftpError"));
        //     }
        // });
        // sftp.on('error', (err) => {
        //     console.log("err2", err.level, err.description ? err.description : '');
        //     console.error(new Error(err));
        // });
        // sftp.connect({
        //     host: sftpSite,
        //     username: sftpUser,
        //     privateKey: fs.readFileSync("./" + sftpKeyFile)
        // }).then(() => {
        //     return sftp.put(readStream, "./replace/" + fileName);
        // }).then(res => {
        //     console.dir("Sent to SFTP", res);
        //     sftp.end();
        //     resolve(0);
        // }).catch(err => {
        //     console.log("err3");
        //     console.error(err);
        //     sftp.end();
        // });
    });
}
exports.FtpStep = FtpStep;
