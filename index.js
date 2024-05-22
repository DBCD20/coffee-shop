const express   = require('express');
const app       = express();
const port      = 3000;

app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center; font-size: 3em;">Landing Page</h1>')
})

app.get('/payments', (req, res) => {
    res.send('<h1 style="text-align: center; font-size: 3em;">Payments</h1>')
})


app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})