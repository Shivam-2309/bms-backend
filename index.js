const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');
const MovieRoutes = require('./routes/movie.routes');

env.config();
const app = express(); // express app object

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

MovieRoutes(app); // Invoking movie routes

app.get('/home', (req, res) => {
    console.log("Hitting home");
    return res.json({
        success : true,
        message: "Checkup for my server waking up"
    });
});

app.listen(process.env.PORT, async () => {
    // this is executed once we successfully start the server on the port
    console.log(`Server started on Port ${process.env.PORT}`);
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Successfully connected to MongoDB");
    }
    catch(err){
        console.log("Problem occured ", err);
    }
});