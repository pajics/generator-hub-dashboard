'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fine ' + chalk.red('hub-dashboard') + ' generator!'
    ));

    const prompts = [
      {
        type    : 'input',
        name    : 'component_name',
        message : 'Name for this Component in singular'
      },
      {
        type    : 'input',
        name    : 'component_name_plural',
        message : 'Name for this Component in plural'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = {
        componentNameCamelCase: _.camelCase(props.component_name),
        componentNamePascalCase: _.capitalize(props.component_name),
        componentNamePluralCamelCase: _.camelCase(props.component_name_plural),
        componentNamePluralPascalCase: _.capitalize(props.component_name_plural)
      };
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('template.module.ts'),
      this.destinationPath(`${this.props.componentNamePluralPascalCase}/${this.props.componentNameCamelCase}.module.ts`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('template.routing.ts'),
      this.destinationPath(`${this.props.componentNamePluralPascalCase}/${this.props.componentNameCamelCase}.routing.ts`),
      this.props
    );
  }

  install() {
    this.installDependencies();
  }
};
