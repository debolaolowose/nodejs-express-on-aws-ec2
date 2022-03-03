const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Express Demo App v4 This is a new version of the node app</h1> <h4>Message: Success</h4> <p>Version v4</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    },
     {
      productId: '103',
      price: 150
    },
     {
      productId: '104',
      price: 300
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
