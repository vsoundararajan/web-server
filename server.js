/**
 * Created by soundararajanvenkatasubramanian on 10/18/16.
 */
var express = require('express');
const PORT = 3000;

var middleware = {
  requireAuthentication: (req, res, next) => {
      console.log('private route hit!');
      next();
  },
  logger: (req, res, next) => {
    console.log('Request: ' +  (new Date().toString()) + " " + req.method + "  " + req.originalUrl);
    next();
  }
};
var app = express();


app.use(middleware.logger);


app.get('/about', middleware.requireAuthentication, (req, res) => {
    res.send('About Us!' );
});


app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
    console.log(`express server started at ${PORT}`);
});
