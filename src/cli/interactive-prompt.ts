import { prompt } from 'inquirer';
import { appManager } from '../apps/app-manager';
import { errorColor } from '../helpers/colors';

export class InteractivePrompt {
  run = () => {
    prompt([
      {
        type: 'checkbox',
        message: 'Select applications to install',
        name: 'apps',
        validate: (items: []) => {
          return items.length > 0 ? true : 'You must choose at least one application';
        },
        choices: appManager.appList
      },
      {
        type: 'input',
        message: 'File name to generate script',
        name: 'fileName',
        validate: (value: string) => {
          return value.trim().length > 0 ? true : "You must specified script file name";
        },
        default: 'install.sh'
      }
      // {
      //   type: 'editor',
      //   name: 'personalSettings',
      //   message: 'Write your personal settings here (.sh)'
      // }
    ])
      .then(({ apps, fileName }) => {
        appManager.generateScript(apps, fileName);
      })
      .catch(e => console.log(errorColor(e.message)));
  }
}
