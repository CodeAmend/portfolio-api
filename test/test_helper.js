const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done) => {

  mongoose.connect('mongodb://localhost/portfolio_test');
  mongoose.connection
  .once('open', () => done())
  .on('error', (err) => {
    console.warn("Mongoose error: ", err);
  });

});

after(() => {
  mongoose.disconnect((err) => {});
  mongoose.models = {}
});

beforeEach((done) => {
  const {skills} = mongoose.connection.collections;
  skills.drop()
  .then(() => done())
  .catch(() => done())
})
