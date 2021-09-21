const express = require('express');

const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/moviesdb");
}
const app = express();
app.use(express.json());

// create a model

const movieModel = new mongoose.Schema({
    id: {type: Number, required: true},
    movie_name: {type: String, required: true},
    movie_genre: {type: String, required: true},
    budget: {type: Number,required: true},
    production_year:{type:Number,required:true}


});

const Movie = mongoose.model('movie' , movieModel);

// 1 --> see All movie;
app.get('/movie' , async (req, res) => {
    const movi = await Movie.find().lean().exec();
    return res.status(200).send({ movi });
})

// 2 --> add a movie 

app.post('/movieP' , async (req,res) => {
    const movie = await Movie.create(req.body);

    return res.status(200).send({movie});
})

// 3 --> 

app.get('/movie/:id' , async (req,res) => {
    const movi = await Movie.find().lean().exec();
    return res.status(200).send({movi});
})

app.patch('/movie/:id' , async (req,res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});

    return res.status(200).send({movie});
})

app.delete('/movie/:id' , async (req,res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    return res.status(200).send({movie});
})

app.listen(8884 ,async function ()  {

    await connect();
    console.log("listen port 8884")

})