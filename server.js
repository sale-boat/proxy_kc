const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const favicon = require('serve-favicon');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(cors());

app.use(compression());

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// app.use('/files', express.static(`${__dirname}/public`));

app.get('/:id', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.use('/api/related', proxy({ target: 'http://ec2-54-219-186-15.us-west-1.compute.amazonaws.com/' }));

app.use('/api/reviews', proxy({ target: 'http://ec2-18-209-30-138.compute-1.amazonaws.com/' }));

app.use('/api/products', proxy({ target: 'http://ec2-3-90-25-170.compute-1.amazonaws.com/' }));

app.get('*', (req, res) => {
  res.redirect('/1');
})

// app.listen(80);
app.listen(3000);
