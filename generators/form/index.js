'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const fs = require('fs');

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
      }
    ];

    let formConfig = JSON.parse(fs.readFileSync('config.json', 'utf8'));
    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = formConfig;
      this.props.componentNameCamelCase = _.camelCase(props.component_name);
      this.props.componentNamePascalCase = _.capitalize(props.component_name);
      this.props.componentNamePluralCamelCase = _.camelCase(props.component_name_plural);
      this.props.componentNamePluralPascalCase = _.capitalize(props.component_name_plural);
      this.props.componentNamePluralUpperCase = _.toUpper(props.component_name_plural);
      this.props._ = _;
    });
  }

  writing() {

    this.fs.copyTpl(
      this.templatePath('_template-split-form.html'),
      this.destinationPath(`form.html`),
      this.props
    );
  }

};
