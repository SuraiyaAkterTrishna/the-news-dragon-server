const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello From the news dragon!!')
});

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`the news dragon server is running on ${port}`)
});