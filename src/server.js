var express = require('express');
var app = express();
var env = process.env;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.render('index', { title: 'ejs' });
});

app.get('/image2', (req, res) => {
  res.render('image2', { title: 'ejs' });
});

app.get('/image3', (req, res) => {
  res.render('image3', { title: 'ejs' });
});

app.get('/viewer', (req, res) => {
  res.render('viewer', { title: 'ejs' });
});

app.get('/health', (req, res) => {
  res.writeHead(200);
  res.end();
});

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', () => {
  console.log('running on ', env.NODE_PORT || 3000, env.NODE_IP || 'localhost');
});
