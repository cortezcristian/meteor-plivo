Package.describe({
  name: 'meteor-plivo',
  version: '0.0.1',
  summary: 'Plivo NodeJS client API port for Meteor to create powerful Voice and SMS applications.',
  git: 'https://github.com/cortezcristian/meteor-plivo',
  documentation: 'README.md'
});

Npm.depends({
  plivo: '0.3.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');
  api.use('ecmascript');
  api.mainModule('meteor-plivo.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteor-plivo');
  api.mainModule('meteor-plivo-tests.js');
});
