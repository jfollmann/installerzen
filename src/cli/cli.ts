import * as pkg from './../../package.json';

import { execAsync } from './../helpers/exec';
import { InteractivePrompt } from './interactive-prompt';
import { CommanderStatic } from 'commander';
import { CommandPrompt } from './command-prompt';
import { titleColor, successColor, warningColor } from '../helpers/colors';

export class Cli {

  commandOptions: CommanderStatic;

  constructor(commandOptions: CommanderStatic) {
    this.commandOptions = commandOptions;
  }

  static checkVersion = async () => {
    try {
      const currentLocalVersion = pkg.version;
      const currentRemoteVersion = (await execAsync(`npm view ${pkg.name} version`)).stdout.replace(/\r?\n|\r/g, '');

      if (currentLocalVersion !== currentRemoteVersion) {
        console.log();
        console.log(titleColor('WARNING'));
        console.log(`Update available ${warningColor(currentLocalVersion)} => ${successColor(currentRemoteVersion)}\n`);
        console.log(`Run ${successColor(`npm i -g ${pkg.name}`)} to update`);
        console.log();
      }
    } catch (e) { }
  }

  run = async () => {
    if (this.commandOptions.interactive) {
      new InteractivePrompt().run();
    }
    else {
      new CommandPrompt(this.commandOptions).run();
    }
  }
}
