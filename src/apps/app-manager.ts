import * as fs from 'fs';
import { join } from 'path';
import { errorColor, successColor } from '../helpers/colors';

interface App {
  name: string
}

export class AppManager {
  appList: App[];
  scriptsPath: string;

  constructor() {
    this.scriptsPath = join(__dirname, 'sh');

    this.appList = fs.readdirSync(this.scriptsPath).map(item => {
      item = item.replace('.sh', '');
      return { name: item.charAt(0).toUpperCase() + item.slice(1) };
    })
  }

  generateScript = (apps: string[], file: string) => {
    let content = '';
    for (let i = 0; i < apps.length; i++) {
      const item = apps[i];

      if (!item) continue;

      const sh = join(this.scriptsPath, `${item.toLowerCase()}.sh`);

      if (!fs.existsSync(sh)) {
        console.log(errorColor(`Error: File ${item.toLowerCase()}.sh not found!`));
        break;
      }

      content += `echo '########## <installing ${item}> ##########'\n`;
      content += `${fs.readFileSync(sh).toString()}\n`;
    }

    const fileName = file.indexOf('.sh') > 0 ? file : file.concat('.sh');

    fs.writeFileSync(fileName, content);
    console.log(successColor(`File ${fileName} generated`));
  }
}

export const appManager = new AppManager();
