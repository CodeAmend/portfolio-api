const app = require('./app');
const port = 8080;

app.listen(port, () => {
  console.log("Port " + port + " is running...");
});
