#!/usr/bin/env node

import * as commander from 'commander';
import * as pkg from './../package.json';
import { textSync } from 'figlet';
import { Cli } from './cli/cli';
import { titleColor } from './helpers/colors';

console.log(titleColor(textSync(pkg.name)));
Cli.checkVersion()
  .then(() => {
    commander
      .option('-t, --interactive', 'Interactive mode', false)
      .option('-l, --list', 'List applications')
      .option('-g, --generate <appsToInstall>', 'Install applications - separate by comma and without spaces. (eg: -f wget,curl) ')
      .option('-f, --filename <filename>', 'File name to generate script', 'install.sh')
      .version(pkg.version, '-v, --version', 'Application version')
      .parse(process.argv);

    if (process.argv.length < 3) {
      commander.help();
    }

    new Cli(commander).run();
  })

