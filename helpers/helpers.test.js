const {normalizePort} = require('./helpers');

/* normalizePort function */
test('Should return the exact port given', () => {
  expect(normalizePort(3001)).toBe(3001);
});

test('Should return false with a negative port', () => {
  expect(normalizePort(-3001)).toBe(false);
});

test('Should return port (int) with a port (string) given', () => {
  expect(normalizePort('3001')).toBe(3001);
});

test('Should return false with a negative port (string) given', () => {
  expect(normalizePort('-3001')).toBe(false);
});
