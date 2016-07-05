# meteor-plivo [![Build Status](https://travis-ci.org/cortezcristian/meteor-plivo.svg?branch=master)](https://travis-ci.org/cortezcristian/meteor-plivo)

Plivo NodeJS client API port for Meteor to create powerful Voice and SMS applications.

Supported versions:

- [plivo v0.3.3](https://github.com/plivo/plivo-node)
- [Meteor v1.3.x](https://guide.meteor.com/1.3-migration.html)

Add Settings to Access PlivoAPI object globally into `Meteor.settings.plivo`. In example:

````json
{
  "plivo": {
    "authToken": "some token",
    "authId": "some id"
  }
}
```

Then you can use PlivoAPI object globally:

```javascript
var params = {
  from: 'your number here',
  to: 'recipients number',
  answer_url: 'http://your-server.com/answer_url'
};

PlivoAPI.make_call(params, function(status, response) {
  if (status >= 200 && status < 300) {
    console.log('Successfully made call request.');
    console.log('Response:', response);
  } else {
    console.log('Oops! Something went wrong.');
    console.log('Status:', status);
    console.log('Response:', response);
  }
});
```

Or create a new instance yourserlf.

```javascript
import { Plivo, PlivoResponse } from 'meteor/cortezcristian:meteor-plivo';

var api = Plivo.RestAPI({ /* config here */ });

var response = PlivoResponse(); // new response
```
