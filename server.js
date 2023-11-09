//Includes
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//http routes
app.get('/', (req, res) => {
    console.log('GET homepage');
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/traits', (req, res) => {
    console.log('GET traits');
    res.sendFile(path.join(__dirname, '/public/traits.html'));
})
//api routes

//listening in...
app.listen(PORT, () => console.log(`Listening in on ${PORT}!`))