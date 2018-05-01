var express = require('express');
var app = express();
var PORT = 3000;
var milddleware = {
  requireAuthentification: function(req, res, next) {
    console.log('Private route hit');
    next();
  },
  logger: function(req, res, next) {
    console.log('Request ' + req.method + ' ' + req.originalUrl + ' made on ' + new Date().toString());
    next();
  }
};

app.use(milddleware.logger);

// app.get('/', function(req, res) {
//   res.send('Hello Express !');
// });

app.get('/about', milddleware.requireAuthentification, function(req, res) {
  res.send('Our About Us page');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

app.listen(PORT, function() {
  console.log('The server started on port ' + PORT);

});