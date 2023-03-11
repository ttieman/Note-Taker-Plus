const express = require('express');
const path = require('path');
const { mlog } = require('./middleware/mlog');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(mlog);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/',api);

app.use(express.static("public"));

//GET Route home page
app.get('/', (req,res) => 
res.sendFile(path.join(__dirname, "./public/index.html"))
);

//GET Route for notes page
app.get('/notes', (req, res) => 
 res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('*', (req,res) => 
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

//is port listener
app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`)
);