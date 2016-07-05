Package.describe({
  name: 'cortezcristian:meteor-plivo',
  version: '0.0.4',
  summary: 'Plivo NodeJS client API port for Meteor to create powerful Voice and SMS applications.',
  git: 'https://github.com/cortezcristian/meteor-plivo',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.3');
  api.use('ecmascript');
  api.mainModule('meteor-plivo.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('practicalmeteor:mocha');
  api.use('practicalmeteor:chai');
  api.use('cortezcristian:meteor-plivo');
  api.mainModule('meteor-plivo-tests.js', 'server');
});

Npm.depends({
  plivo: '0.3.3'
});
