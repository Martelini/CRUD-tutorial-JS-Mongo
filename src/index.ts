import mongoose from "mongoose";
import express from 'express';
import * as Product from '../models/product.model.js';
const app = express();

app.use(express.json());

app.get('/', (req: any, res: any) => {
    res.send("Hello from Node API");
});

app.post('/app/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

mongoose.connect("mongodb+srv://souzamateus1998:5boTg7hVMktZlAle@backenddb.tzey92a.mongodb.net/Node-API")
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

