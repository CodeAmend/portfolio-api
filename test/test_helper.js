const mongoose = require('mongoose');

before((done) => {

  mongoose.connect('mongodb://localhost/portfolio_test');
  mongoose.connection
  .once('open', () => done())
  .on('error', (err) => {
    console.warn("Mongoose error: ", err);
  });

});

after(() => {
  mongoose.disconnect((err) => {
    console.warn("Mongoose disconnect error: ", err);
  });
});
