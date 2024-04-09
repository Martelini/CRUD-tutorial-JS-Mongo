const mongoose = require("mongoose");
const express = require("express");
const Product = require("./models/product.model")
const productRoute = require("./routes/product.route");
const app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    res.send("Hello from Node API");
});

mongoose.connect("mongodb+srv://souzamateus1998:5boTg7hVMktZlAle@backenddb.tzey92a.mongodb.net/Node-API")
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed");
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});