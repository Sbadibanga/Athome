import express from 'express';
import cors from 'cors';
import data from './data';

const app = express();

app.use(cors());
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/:id', (req, res) =>{
  const product = data.products.find((x) => x.id === req.params.id);
  if(product){
    res.send(product);
  }else{
    res.send(404).send({message: 'Product Not Found!'});
  }
  
});
app.listen(5000, () => {
  console.log('serve at http://localhost:5000');
});
