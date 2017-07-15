'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fine ' + chalk.red('generator-hub-dashboard') + ' generator!'
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
      },
      {
        type    : 'input',
        name    : 'properties',
        message : 'Properties CSV format'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = {
        componentNameCamelCase: _.camelCase(props.component_name),
        componentNamePascalCase: _.capitalize(props.component_name),
        componentNamePluralCamelCase: _.camelCase(props.component_name_plural),
        componentNamePluralPascalCase: _.capitalize(props.component_name_plural),
        properties: props.properties.split(',')
      };
    });
  }

  writing() {
    // dashboard
    this.fs.copyTpl(
      this.templatePath('_dashboard/template-dashboard.component.ts'),
      this.destinationPath(`dashboard/${this.props.componentNamePluralCamelCase}-dashboard.component.ts`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_dashboard/template-dashboard.html'),
      this.destinationPath(`dashboard/${this.props.componentNamePluralCamelCase}-dashboard.html`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_dashboard/template-dashboard.component.spec.ts'),
      this.destinationPath(`dashboard/${this.props.componentNamePluralCamelCase}-dashboard.component.spec.ts`),
      this.props
    );
    // common
    this.fs.copyTpl(
      this.templatePath('_common/template.service.ts'),
      this.destinationPath(`common/${this.props.componentNameCamelCase}.service.ts`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_common/template.service.spec.ts'),
      this.destinationPath(`common/${this.props.componentNameCamelCase}.service.spec.ts`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_common/template.interface.ts'),
      this.destinationPath(`common/${this.props.componentNameCamelCase}.interface.ts`),
      this.props
    );
  }

  install() {
    this.installDependencies();
  }
};
