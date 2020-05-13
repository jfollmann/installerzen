const path = require('path');
const markdownMagic = require('markdown-magic');

const dirTree = require('markdown-magic-directory-tree');
const dependencyTable = require('markdown-magic-dependency-table');
const versionBadge = require('markdown-magic-version-badge');

const config = {
  transforms: {
    dirTree,
    dependencyTable,
    versionBadge
  }
}

const markdownPath = path.join(__dirname, '..', 'README.md');
markdownMagic(markdownPath, config);
