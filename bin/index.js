#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const name = challk.blue('Name') + ':' + chalk.green('Prathamesh Prbahu');

const github = challk.blue('Github') + ':' + chalk.green('https://github.com/therealPrathamesh');

const box = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
};

const message = boxen(`${name}\${github}`, box);


console.log(`Name: Prathamesh Prabhu
    Github:https://github.com/therealPrathamesh`
);