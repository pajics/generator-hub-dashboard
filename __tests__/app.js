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
        'src/app/as/as.module.ts'
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
        'src/app/first-seconds/first-seconds.module.ts'
      ]);
    });
  });
});
