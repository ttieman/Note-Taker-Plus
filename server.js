const express = require('express');  // imports
const path = require('path');
const { mlog } = require('./middleware/mlog');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;  // port

const app = express(); // assigns express to a variable
 
app.use(mlog);  // uses middleware

app.use(express.json());  // uses json 
app.use(express.urlencoded({extended: true}));

app.use('/',api); //router ware

app.use(express.static("public")); // static server

//GET Route home page
app.get('/', (req,res) => 
res.sendFile(path.join(__dirname, "./public/index.html"))
);

//GET Route for notes page
app.get('/notes', (req, res) => 
 res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('*', (req,res) =>  // break response 
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

//is port listener
app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`)
);