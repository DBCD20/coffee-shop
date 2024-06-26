const express   = require('express');
const app       = express();
const port      = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/payments', (req, res) => {
    res.send('<h1 style="text-align: center; font-size: 3em;">Payments</h1>')
})

app.get('/health', (req, res) => {
    res.status(200).send('{status: 200, message: All good}')
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})