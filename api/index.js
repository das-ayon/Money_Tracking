const express= require ('express');

const app=express();
const cors= require('cors');
const Transaction=require('./models/Transaction.js');
const mongoose  = require('mongoose');
require('dotenv').config();



app.use(cors());
app.use(express.json());

app.get('/api/test',(req,res)=>{
   res.json('test ok');
});

// app.post('/api/transaction',(req,res)=>{
//     const {name,description,datetime}=res.body;
//     res.json(req.body);
// });



app.post('/api/transaction', async (req, res) => {
      mongoose.connect(process.env.MONGO_URL);
      const connection = mongoose.connection;

      connection.once('open', () => {
      console.log('MongoDB connection established successfully');
      });
      
      const { price,name, description, datetime } = req.body;

      const transaction= await Transaction.create({price,name, description, datetime});
      res.json(transaction);
   } );

app.get('/api/transactions',async(req,res)=>{
   await mongoose.connect(process.env.MONGO_URL);
   const transactions= await Transaction.find();
   res.json(transactions);
   
});

app.listen(4040);



//fcXvO5Ni6qe1IdLf --password
// mongodb://localhost:27017/your-database-name