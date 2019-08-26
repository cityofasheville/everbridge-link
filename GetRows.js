const { FtpStep } = require("./FtpStep");
const { quoteCell } = require("./quoteCell");
var fs = require('fs');
function GetRows(FileToSend, colNames, connection, Request) {
    return new Promise(function (resolve, reject) {
        const { tableName, schemaName, fileName } = FileToSend;
        const sqlStr = `select * from ${schemaName}.${tableName};`;
        console.log(sqlStr);
        const request = new Request(sqlStr, function (err, rowCount, rows) {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                console.log(rowCount + ' rows returned ' + fileName);
            }
            connection.close();
        });
        //create out file
        // let outFile = fs.createWriteStream('/tmp/' + fileName);
        let outFile = fs.createWriteStream(fileName);
        outFile.write(colNames);
        request.on('row', function (columns) {
            let aRow = '';
            columns.forEach(function (column) {
                aRow += quoteCell(column.value);
            });
            outFile.write(aRow.slice(0, -1) + '\n');
        });
        request.on('requestCompleted', function (rowCount, more, rows) {
            outFile.end();
            resolve(FtpStep(FileToSend));
        });
        connection.execSql(request);
    });
}
exports.GetRows = GetRows;
