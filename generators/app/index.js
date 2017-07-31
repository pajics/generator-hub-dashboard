'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {

  /**
   * Input prompt definition method
   * @returns {Promise.<TResult>|Promise}
   */
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fine ' + chalk.red('generator-hub-dashboard') + ' generator!'
    ));

    const prompts = [
      {
        type    : 'input',
        name    : 'component_name',
        message : 'Name for this Component in singular ("user", "employee profile")'
      },
      {
        type    : 'input',
        name    : 'component_name_plural',
        message : 'Name for this Component in plural ("users", "employee profiles")'
      },
      {
        type    : 'input',
        name    : 'properties',
        message : 'Properties CSV format ("id,name", "id:number,name")'
      }
    ];

    return this.prompt(prompts).then(props => {

      // To access props later use this.props.someAnswer;
      this.props = {
        componentNameCamelCase: _.camelCase(props.component_name),
        componentNamePascalCase: _.upperFirst(_.camelCase(props.component_name)),
        componentNamePluralCamelCase: _.camelCase(props.component_name_plural),
        componentNamePluralPascalCase: _.upperFirst(_.camelCase(props.component_name_plural)),
        componentNamePluralUpperCase: _.toUpper(_.snakeCase(props.component_name_plural)),
        componentNameKebabCase: _.kebabCase(props.component_name),
        componentNamePluralKebabCase: _.kebabCase(props.component_name_plural),
        localizationNamespace: _.snakeCase(props.component_name_plural),
        properties: props.properties.split(',').map((prop) => {
          let parts = prop.split(':');
          let name = parts[0];
          let type = parts.length > 1 ? parts[1] : 'string';
          return {
            name: name,
            type: type
          };
        }),
        _: _
      };
    });
  }

  writing() {
    // Module Setup
    this.fs.copyTpl(
      this.templatePath('template.module.ts'),
      this.destinationPath(`src/app/${this.props.componentNamePluralKebabCase}/${this.props.componentNamePluralKebabCase}.module.ts`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('template.routing.ts'),
      this.destinationPath(`src/app/${this.props.componentNamePluralKebabCase}/${this.props.componentNamePluralKebabCase}.routing.ts`),
      this.props
    );

    // Dashboard
    this.fs.copyTpl(
      this.templatePath('_dashboard/template-dashboard.component.ts'),
      this.destinationPath(`src/app/${this.props.componentNamePluralKebabCase}/dashboard/${this.props.componentNamePluralKebabCase}-dashboard.component.ts`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_dashboard/template-dashboard.html'),
      this.destinationPath(`src/app/${this.props.componentNamePluralKebabCase}/dashboard/${this.props.componentNamePluralKebabCase}-dashboard.html`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_dashboard/template-dashboard.component.spec.ts'),
      this.destinationPath(`src/app/${this.props.componentNamePluralKebabCase}/dashboard/${this.props.componentNamePluralKebabCase}-dashboard.component.spec.ts`),
      this.props
    );

    // Common
    this.fs.copyTpl(
      this.templatePath('_common/template.service.ts'),
      this.destinationPath(`src/app/${this.props.componentNamePluralKebabCase}/common/${this.props.componentNameKebabCase}.service.ts`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_common/template.service.spec.ts'),
      this.destinationPath(`src/app/${this.props.componentNamePluralKebabCase}/common/${this.props.componentNameKebabCase}.service.spec.ts`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_common/template.interface.ts'),
      this.destinationPath(`src/app/${this.props.componentNamePluralKebabCase}/common/${this.props.componentNameKebabCase}.interface.ts`),
      this.props
    );

    // Translation
    this.fs.copyTpl(
      this.templatePath('_en.json'),
      this.destinationPath(`src/assets/locales/${this.props.localizationNamespace}/en.json`),
      this.props
    );
  }

  install() {
    this.installDependencies();
  }
};
