const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

// Bodyparser middleware
app.use(express.json());

// DB Config 
const db = require('./config/key').mongoURI;

// Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log());


// Use routes
app.use('/api/items', items);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
