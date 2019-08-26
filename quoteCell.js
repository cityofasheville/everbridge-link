///////////////////////////////////////////////////////////////////////////////////////////////////////
function quoteCell(inStr) {
    if (inStr === null || inStr.trim() === '') {
        return ',';
    }
    inStr = inStr.replace(/\n/g, '');
    if (inStr.indexOf(',') !== -1 || inStr.indexOf('"') !== -1) {
        return '"' + inStr.toString().trim().replace(/\"/g, '""') + '",';
    }
    else {
        return inStr.toString().trim().replace(/\"/g, '""') + ',';
    }
}
module.exports = quoteCell;
