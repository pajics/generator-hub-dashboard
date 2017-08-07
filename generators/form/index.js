'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const fs = require('fs');

module.exports = class extends Generator {
  setup() {

    let formConfig = JSON.parse(fs.readFileSync('config.json', 'utf8'));
    formConfig.componentNamePlural = formConfig.componentNamePlural || formConfig.componentName + 's';
    formConfig.properties = _.flatten(formConfig.forms.map(f => f.properties));
    console.log(formConfig.properties);
    this.props = formConfig;
    this.props._ = _;
    return this.props;
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_template-split-form.html'),
      this.destinationPath(`src/form.html`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_template.form.ts'),
      this.destinationPath(`src/form.ts`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_en.json'),
      this.destinationPath(`src/en.json`),
      this.props
    );
  }

};
