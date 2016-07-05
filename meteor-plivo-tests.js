import { chai } from 'meteor/practicalmeteor:chai';

// Import and rename a variable exported by meteor-plivo.js.
import { name as packageName } from "meteor/meteor-plivo";

describe('Meteor Plivo Tests', () => {
  it('Package', () =>{
    chai.assert.equal(packageName, "meteor-plivo");
  });
});
