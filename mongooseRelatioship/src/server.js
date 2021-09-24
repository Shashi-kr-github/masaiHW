const express = require('express');

const mongoose = require('mongoose')



const connect = () => {
    return mongoose.connect( "mongodb://127.0.0.1:27017/web11")

}
// step 1  :- create the schema
const app = express();

app.use(express.json());

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price:{type: String, required: true},
    size:{type: Number, required: false},
})
// step 2: connect the schema to collection
const Product = mongoose.model('product' , productSchema);



// create a product(document)
app.post('/products' , async (req,res) => {
    const product = await Product.create(req.body) // db.user.insert();

    return res.status(201).send({product});

})

// see all the product 

app.get('/products' , async(req,res) => {
    const prod = await Product.find().lean().exec(); // db.products.find();
    return res.status(200).send({prod});
})

// see single product
app.get("/products/:id", async (req, res) => {
  const prod = await Product.findById(req.params.id).lean().exec(); // db.products.find({id:})
  return res.status(200).send({ prod });
});

// update the product

app.patch("/products/:id", async (req,res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true}) // db.products.update({_id:})

    return res.status(200).send({product});
})

app.delete('/products/:id' , async(req,res) => {
    const prod = await Product.findByIdAndDelete(req.params.id);

    return res.status(200).send({prod}) ;
})
app.listen(2244 ,async function ()  {
    await connect();
    console.log("listen the port 2244")
});