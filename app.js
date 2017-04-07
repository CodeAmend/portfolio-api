const Express = require('express');
const bodyParser = require('body-parser');

const app = Express();

app.get('/', (req, res) => {
  res.send({ title: "Portfolio Site" });
});

app.use(bodyParser.json());


module.exports = app;
