/**
 * This is a file of data and helper functions that we can expose and use
 */

/**
 * Normalize a port into a number, string, or false.
 */
exports.normalizePort = (value) => {
  const port = parseInt(value, 10);

  if(isNaN(port)) {
    return value;
  }

  if(port >= 0) {
    return port;
  }

  return false;
}
