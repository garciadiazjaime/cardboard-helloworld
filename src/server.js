var express = require('express');
var app = express();
var env = process.env;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('static'));

app.get('/viewer', (req, res) => {
  res.render('viewer', { title: 'ejs' });
});

app.get('/display/:image', (req, res) => {
  res.render('display', { image: req.params.image });
});

app.get('/display', (req, res) => {
  res.render('display', { image: 'image1' });
});

app.get('/health', (req, res) => {
  res.writeHead(200);
  res.end();
});

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', () => {
  console.log('running on ', env.NODE_PORT || 3000, env.NODE_IP || 'localhost');
});
