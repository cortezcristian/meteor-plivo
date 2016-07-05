// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-plivo.js.
import { name as packageName } from "meteor/meteor-plivo";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-plivo - example', function (test) {
  test.equal(packageName, "meteor-plivo");
});
