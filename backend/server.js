import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import data from './data';


const app = express();
const mySql = mysql;

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'AtHomeDatabase',
    port: '3306'
});
connection.connect((err) => {
  if(err){
    throw err
  }else{
    console.log('connected')
  }
});

app.use(cors());
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
