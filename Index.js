const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const Product = require('./Models/Product_model');
const mongoDB = 'mongodb+srv://dawoodibrahim010:HIGHSC0RE@crud.awmmf4h.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Crud';
const product_route = require('./Routes/product_route')
app.use(express.json());

app.use(express.urlencoded())


app.use('/api/products',product_route)








app.listen(port, () => {
  console.log('Server is online');
});

// -------------------------
// GET request for retrieving all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// -------------------------
// POST request for creating a product


app.get('/api/products/:id',async (req,res) =>
{
    try
    {
        const { id } = req.params;
         const product = await Product.findById(id);
        res.status(200).json(product)

    }
    catch(error)
    {
        res.status(500).json({ message: error.message });
    }
})

app.get('/', (req, res) => {
  res.send('Hello from Node API');
});

mongoose
  .connect(mongoDB, { })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Connection to MongoDB failed:', err.message);
  });

  // Update a product

  
  app.put('/api/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.delete('/api/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      return res.status(200).json({ message: "Product deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
