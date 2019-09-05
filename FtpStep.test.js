let FTPClient = require('ssh2-sftp-client');
var fs = require('fs');

jest.mock('ssh2-sftp-client');
jest.mock('fs');

test('should send ftp', () => {

  fs.createReadStream.mockResolvedValue('moo?');

  // fs.createReadStream.mockImplementation(() => Promise.resolve(resp))


    expect(data).toEqual(users)

});