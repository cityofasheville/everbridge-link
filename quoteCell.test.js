const { quoteCell } = require("./quoteCell");

test('empty string returns comma', () => {
  expect(quoteCell(' ')).toBe(',');
});
test('string with comma in it returns string surrounded by quotes', () => {
  expect(quoteCell('Bob, yer uncle')).toBe('"Bob, yer uncle",');
});
test('string without comma in it returns string with appended comma', () => {
  expect(quoteCell('merrily we row')).toBe('merrily we row,');
});