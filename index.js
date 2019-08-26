const { loadAFile } = require("./loadAFile");

const { Connection, Request }= require('tedious');

const FilesToSend = [
    {
        tableName: process.env.tableName1,
        schemaName: process.env.schemaName1,
        fileName: process.env.fileName1,
        sftpSite: process.env.sftpSite1,
        sftpUser: process.env.sftpUser1,
        sftpKeyFile: process.env.sftpKeyFile1
    },
    {
        tableName: process.env.tableName2,
        schemaName: process.env.schemaName2,
        fileName: process.env.fileName2,
        sftpSite: process.env.sftpSite2,
        sftpUser: process.env.sftpUser2,
        sftpKeyFile: process.env.sftpKeyFile2
    }, 
]

const dbConfig = {
    authentication: {
        type: "default",
        options: {
            userName: process.env.user, 
            password: process.env.password, 
        }
    },
    server: process.env.host,
    options: {
        database: process.env.database,  
        encrypt: false
    }
};

async function Run(){
    try {
        for (FileToSend of FilesToSend) {
            await loadAFile(FileToSend, dbConfig, Connection, Request);
        };
    } catch(err) {
        console.error(err);
    }
}
// exports.handler = (event, context, callback) => {
//     Run();
// }
Run();

///////////////////////////////////////////////////////////////////////////////////////////////////////
process.on('uncaughtException', (err)=>{
    console.log(err);
});

