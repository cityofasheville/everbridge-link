const { GetRows } = require("./GetRows");
const { quoteCell } = require("./quoteCell");

///////////////////////////////////////////////////////////////////////////////////////////////////////
function loadAFile(FileToSend, connection, Request) {
    return new Promise(function (resolve, reject) {
        const { tableName, schemaName, sftpSite, sftpUser, sftpKeyFile } = FileToSend;
        let colNames = '';
        console.log('Getting Column Names ' + tableName);
        connection.on('connect', function (err) {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                console.log('Connected');
                const request = new Request(`SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '${tableName}' AND TABLE_SCHEMA = '${schemaName}';`, function (err, rowCount, rows) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(rowCount + ' Column Names returned');
                    }
                    colNames = colNames.slice(0, -1) + '\n';
                });
                request.on('row', function (columns) {
                    columns.forEach(function (column) {
                        colNames += quoteCell(column.value);
                    });
                });
                request.on('requestCompleted', function (rowCount, more, rows) {
                    resolve(GetRows(FileToSend, colNames, connection, Request));
                });
                connection.execSql(request);
            }
        });
    });
}
exports.loadAFile = loadAFile;
