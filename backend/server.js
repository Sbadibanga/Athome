import express from 'express';
import cors from 'cors';
import dbConnection from './config';
import data from './data';
import customerRouter from './Routes/customerRoutes';

dbConnection.connect((err) => {
  if(err){
    throw err
  }else{
    console.log('connected to mySql')
  }
});

const app = express();
app.use(cors());
app.use('/api/customers', customerRouter)
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/:id', (req, res) =>{
  const product = data.products.find((x) => x.id === req.params.id);
  if(product){
    res.send(product);
  }else{
    res.status(404).send({message: 'Product Not Found!'});
  }
  
});
app.listen(5000, () => {
  console.log('serve at http://localhost:5000');
});
