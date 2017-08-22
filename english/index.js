const fs = require('fs');
const path = require('path');

function loadFile(file) {
  const content = fs.readFileSync(path.join(__dirname, file));
  try {
    return JSON.parse(content);
  } catch (err) {
    console.error(err);
    return null;
  }
}

module.exports = {
  config: loadFile('./config.json'),
  norms: loadFile('./norms.json'),
};
