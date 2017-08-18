// for npm pacakges you still have to use "var and require" because "import and from" will not work

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Article = require("./models/Article.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

mongoose.connect("mongodb://localhost/nyt-react");

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Mongoose Error: ', err);
});

db.once('open', () => {
  console.log('Mongoose connection successful.');
});

app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
}); 

app.get('/api/saved', (req, res) => {

  Article.find({})
    .exec((err, doc) => {

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

app.post('/api/saved', (req, res) => {

  let newArticle = new Article({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  });

  newArticle.save((err, doc) => {
  

});
  });

app.delete('/api/saved/:id', (req, res) => {

  Article.find({'_id': req.params.id}).remove()
    .exec((err, doc) => {
      res.send(doc);
  });

});



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
