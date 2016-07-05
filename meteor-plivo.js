// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See meteor-plivo-tests.js for an example of importing.
export const name = 'meteor-plivo';
export const Plivo = Npm.require('plivo');
export const PlivoResponse = () => Plivo.Response()
export const PlivoAPI = (config) => {
  if (!config) {
    throw new Meteor.Error(404, 'Plivo settings authId and authToken are not provided');
  }
  if (!config.authToken || !config.authId) {
    throw new Meteor.Error(404, 'Plivo authId Meteor authToken are not provided, please add them as parameter');
  }
  Plivo.RestAPI({
      authId: config.authId,
      authToken: config.authToken
  });
};


