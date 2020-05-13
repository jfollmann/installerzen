# Welcome to installerzen 👑
<!-- AUTO-GENERATED-CONTENT:START (versionBadge:color=blue) -->
[![npm](https://img.shields.io/badge/npm-v1.0.11-blue.svg)](https://www.npmjs.com/package/installerzen)
<!-- AUTO-GENERATED-CONTENT:END -->

With `installerzen` you can perfom the installation of many of main applications in just one simple and easy-to-use program!

Install applications on linux with one command in less than 30 seconds..

## Table of Contents
<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Install CLI](#install-cli)
- [Usage](#usage)
- [CLI in action](#cli-in-action)
- [Supported apps (by now)](#supported-apps-by-now)
- [Contribute](#contribute)
- [List of dependencies](#list-of-dependencies)
- [Show your support](#show-your-support)
<!-- AUTO-GENERATED-CONTENT:END -->

## Install CLI
```sh
npm i -g installerzen
```

## Usage
Commands supported:
```
Usage: installerzen [options]

Options:
  -t, --interactive               Interactive mode (default: false)
  -l, --list                      List applications
  -g, --generate <appsToInstall>  Install applications - separate by comma and without spaces. (eg: -f wget,curl)
  -f, --filename <filename>       File name to generate script (default: "install.sh")
  -v, --version                   Application version
  -h, --help                      display help for command
```
## CLI in action
![Use](http://jfollmann.com/installerzen/handson.gif)

## Supported apps (by now)
<!-- AUTO-GENERATED-CONTENT:START (dirTree:dir=./src/apps/sh&depth=1) -->
```
sh/
├── atom.sh
├── authy.sh
├── beekeeperstudio.sh
├── brackets.sh
├── brave.sh
├── chrome.sh
├── chromium.sh
├── ctop.sh
├── curl.sh
├── dbeaver.sh
├── docker-compose.sh
├── docker.sh
├── dropbox.sh
├── fonts-firacode.sh
├── fonts-hack.sh
├── git.sh
├── googledriver.sh
├── helm.sh
├── insomnia.sh
├── nvm.sh
├── ohmyzsh.sh
├── peek.sh
├── postgresql.sh
├── postman.sh
├── redis-desktop-manager.sh
├── robo3t.sh
├── spotify.sh
├── sublime.sh
├── terminator.sh
├── tmux.sh
├── tree.sh
├── vim.sh
├── vlc.sh
├── vscode.sh
├── wget.sh
└── yarn.sh
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Contribute
If your programs are not supported, it would be great if you sent me a pull request with implementation.

## List of dependencies
<!-- AUTO-GENERATED-CONTENT:START (dependencyTable) -->
| **Dependency** | **Description** | **Version** | **License** | **Type** |
| -------------- | --------------- | ----------- | ----------- | -------- |
 | [chalk@^4.0.0](https://github.com/chalk/chalk#readme) | Terminal string styling done right | 4.0.0 | MIT | production | 
 | [commander@^5.1.0](https://github.com/tj/commander.js#readme) | the complete solution for node.js command-line programs | 5.1.0 | MIT | production | 
 | [figlet@^1.3.0](https://github.com/patorjk/figlet.js#readme) | Creates ASCII Art from text. A full implementation of the FIGfont spec. | 1.4.0 | MIT | production | 
 | [inquirer@~7.1.0](https://github.com/SBoudrias/Inquirer.js#readme) | A collection of common interactive command line user interfaces. | 7.1.0 | MIT | production | 
 | [@types/chalk@^2.2.0](https://github.com/chalk/chalk#readme) | Stub TypeScript definitions entry for chalk, which provides its own types definitions | 2.2.0 | MIT | dev | 
 | [@types/commander@^2.12.2](https://github.com/tj/commander.js#readme) | Stub TypeScript definitions entry for commander, which provides its own types definitions | 2.12.2 | MIT | dev | 
 | [@types/figlet@^1.2.0](https://github.com/DefinitelyTyped/DefinitelyTyped#readme) | TypeScript definitions for figlet | 1.2.0 | MIT | dev | 
 | [@types/inquirer@^6.5.0](https://github.com/DefinitelyTyped/DefinitelyTyped#readme) | TypeScript definitions for inquirer | 6.5.0 | MIT | dev | 
 | [@types/node@^10.0.3](https://github.com/DefinitelyTyped/DefinitelyTyped#readme) | TypeScript definitions for Node.js | 10.17.21 | MIT | dev | 
 | [del@^5.1.0](https://github.com/sindresorhus/del#readme) | Delete files and directories | 5.1.0 | MIT | dev | 
 | [gts@^2.0.0](https://github.com/google/gts#readme) | Google TypeScript Style | 2.0.1 | Apache-2.0 | dev | 
 | [gulp@^4.0.2](https://gulpjs.com) | The streaming build system. | 4.0.2 | MIT | dev | 
 | [gulp-run@^1.7.1](https://github.com/MrBoolean/gulp-run) | Pipe to shell commands in gulp | 1.7.1 | ISC | dev | 
 | [markdown-magic@^1.0.0](https://github.com/DavidWells/markdown-magic#readme) | Automatically update markdown files with content from external sources | 1.0.0 | MIT | dev | 
 | [markdown-magic-dependency-table@^1.3.2](https://github.com/camacho/markdown-magic-dependency-table#readme) | Generate table of information about dependencies automatically in markdown | 1.3.2 | MIT | dev | 
 | [markdown-magic-directory-tree@^1.2.3](https://github.com/camacho/markdown-magic-directory-tree#readme) | Print an archy tree for markdown file | 1.2.3 | MIT | dev | 
 | [markdown-magic-version-badge@^1.1.1](https://npmjs.org/package/markdown-magic-version-badge) | Version badge via Markdown Magic | 1.1.1 | MIT | dev | 
 | [nodemon@^2.0.3](http://nodemon.io) | Simple monitor script for use during development of a node.js app. | 2.0.3 | MIT | dev | 
 | [ts-node@^8.9.0](https://github.com/TypeStrong/ts-node) | TypeScript execution environment and REPL for node.js, with source map support | 8.10.1 | MIT | dev | 
 | [typescript@~3.8.0](https://www.typescriptlang.org/) | TypeScript is a language for application scale JavaScript development | 3.8.3 | Apache-2.0 | dev | 
<!-- AUTO-GENERATED-CONTENT:END -->

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
