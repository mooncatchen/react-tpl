const path = require('path');

exports.resolvePath = function resolvePath(relativePath) {
  return path.resolve(__dirname, relativePath);
}
