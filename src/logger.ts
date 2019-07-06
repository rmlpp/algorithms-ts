import chalk from 'chalk';

export class Logger {
  static error(message: string) {
    console.log(chalk.red(message));
  }

  static info(message: string) {
    console.log(chalk.blue(message));
  }

  static success(message: string) {
    console.log(chalk.green(message));
  }

  static warning(message: string) {
    console.log(chalk.yellow(message));
  }
}
