const express = require ('express');
const cors = require('cors')

const app = express ();
app.set ('view engine', 'hbs');
app.use (express.static (__dirname + '/public'));
app.use(cors())

app.get ('/manifest.json', (req, res) => {
  // You can dynamically generate your manifest here
  // You can pull the data from database and send it back

  const brandName = req.query.brand

  // Need to set content type, default is text/html
  res.set ('Content-Type', 'application/json');
  res.render ('manifest.hbs', { brandName });
});

app.get ('/:brandName', (req, res) => {
  res.render ('index.hbs', { brandName: req.params.brandName});
});

app.listen (5000, () => console.log ('Whitelist  app listening on port 5000!'));
