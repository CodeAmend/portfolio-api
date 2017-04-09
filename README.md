# Backend Express API
## for my Portfolio Site

##### Questions
* Testing the API? Should I...
  * learn about mocks, spys and stubs?
  * update database through api and test database again?
  *


-Saturday 8:00PM
I had to learn about sub-documents. I have gotten the skill and project model tested with properties.



### One of the most annoying errors!!!
##### When running Mocha tests

`const Skill = require('../../src/models/skill_schema');`
This will run fine but upon --watch reload it will fail with this.

'MongooseError: Cannot overwrite `skill` model once compiled.
    at Mongoose.model '


`const Skill = mongoose.model('skill');`
MongooseError: Schema hasn't been registered for model "skill".
Use mongoose.model(name, schema)

This makes sense, let load app.js (which loads the schema first)

`const app = require('../../app');`
`const Skill = mongoose.model('skill');`

This works once adn on reload it fails with cannot overwrite error.



I know that running mocha with Nodemon will temporarily solve this matter but I also have some choices.
* I can check if the model is registered and if it is load it properly
* I can delete the require just before I load it.
* I can clear all model schemas on the after helper in test_helper


In the test helper, this can clear this issue for now.
after( () => {
  mongoose.models = {}
})
