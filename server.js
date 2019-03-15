require('newrelic');
const express = require('express');
const cors = require('cors');
// const compression = require('compression');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(cors());

// app.use(compression());

app.get('/:id', (req, res) => {
  if (req.params.id === 'loaderio-bcf2b5763202644d69f14ad79f670945') {
    res.sendFile(`${__dirname}/public/loaderio-bcf2b5763202644d69f14ad79f670945.txt`);
  }
  res.sendFile(`${__dirname}/public/index.html`);
});

app.use('/api/related', proxy({ target: 'http://ec2-54-153-105-133.us-west-1.compute.amazonaws.com/' }));

app.use('/api/reviews', proxy({ target: 'http://ec2-3-90-53-108.compute-1.amazonaws.com' }));

app.use('/api/products', proxy({ target: 'http://ec2-3-94-89-165.compute-1.amazonaws.com/' }));

app.use('/api', proxy({ target: 'http://ec2-54-211-88-14.compute-1.amazonaws.com/' }))

app.get('*', (req, res) => {
  res.redirect('/1');
})

app.listen(3000);
