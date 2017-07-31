'use strict';
let path = require('path');
let assert = require('yeoman-assert');
let helpers = require('yeoman-test');

describe('generator-hub-dashboard:app', () => {

  describe('simple component name', () => {
    beforeAll(() => {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({ properties: 'id, name', component_name: 'a', component_name_plural: 'as' });
    });

    it('creates files', () => {
      assert.file([
        'src/app/as/as.module.ts',
        'src/app/as/as.routing.ts',
        'src/app/as/dashboard/as-dashboard.component.ts',
        'src/app/as/dashboard/as-dashboard.component.spec.ts',
        'src/app/as/dashboard/as-dashboard.html',
        'src/app/as/common/a.service.ts',
        'src/app/as/common/a.service.spec.ts',
        'src/app/as/common/a.interface.ts',
        'src/assets/locales/as/en.json'

      ]);
    });
  });

  describe('multi word component name', () => {
    beforeAll(() => {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({ properties: 'id, name', component_name: 'first second', component_name_plural: 'first seconds' });
    });

    it('creates files', () => {
      assert.file([
        'src/app/first-seconds/first-seconds.module.ts',
        'src/app/first-seconds/first-seconds.routing.ts',
        'src/app/first-seconds/dashboard/first-seconds-dashboard.component.ts',
        'src/app/first-seconds/dashboard/first-seconds-dashboard.component.spec.ts',
        'src/app/first-seconds/dashboard/first-seconds-dashboard.html',
        'src/app/first-seconds/common/first-second.service.ts',
        'src/app/first-seconds/common/first-second.service.spec.ts',
        'src/app/first-seconds/common/first-second.interface.ts',
        'src/assets/locales/first_seconds/en.json'
      ]);
    });
  });
});
