var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.render('index', { title: 'ejs' });
});

app.get('/viewer', (req, res) => {
  res.render('viewer', { title: 'ejs' });
});

app.listen(3000, () => {
  console.log('running on 127.0.0.1:3000');
});
