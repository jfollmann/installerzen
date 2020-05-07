import { appManager } from '../apps/app-manager';
import { CommanderStatic } from "commander";
import { titleColor } from '../helpers/colors';

export class CommandPrompt {

  commandOptions: CommanderStatic;

  constructor(options: CommanderStatic) {
    this.commandOptions = options;
  }

  run = () => {
    if (this.commandOptions.list) {
      console.log(titleColor('--- List of applications available ---\n'));
      console.table(appManager.appList, ['name']);
    }

    if (this.commandOptions.generate) {
      const apps = this.commandOptions.generate.split(',');
      appManager.generateScript(apps, this.commandOptions.filename);
    }
  }
}
