// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See meteor-plivo-tests.js for an example of importing.
export const name = 'meteor-plivo';
export const Plivo = Npm.require('plivo');
export const PlivoResponse = () => Plivo.Response()

if (!Meteor.settings.plivo) {
    throw new Meteor.Error(404, 'Plivo settings authId and authToken are not provided, please add them to Meteor.settings.plivo');
}

if(!PlivoAPI) {
  PlivoAPI = Plivo.RestAPI({
      authId: Meteor.settings.plivo.authId,
      authToken: Meteor.settings.plivo.authToken
  });
}


