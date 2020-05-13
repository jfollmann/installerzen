const path = require('path');
const markdownMagic = require('markdown-magic');

const config = {
  transforms: {
    DIRTREE: require('./dtree.js'),
  }
}

const markdownPath = path.join(__dirname, '..', 'README.md');
markdownMagic(markdownPath, config);
