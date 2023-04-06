const express = require('express');
const app = express();
const port = 3000;

//routes
app.get('/', (req, res) => {
    res.send("Welcome")
})
app.get('/greeting', (req, res) => {
    res.send("Hello Stranger!")
})
app.get('/greeting/:name', (req, res) => {
    res.send(`What's up ${req.params.name}!`)
})
//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params)
    const {total, tipPercentage} = req.params;
    let amount = total*tipPercentage/100;
    res.send(`Tip Amount: ${amount}`)
})






app.listen(port, (req, res) => {
    console.log(`Server running on PORT ${port}`);
})