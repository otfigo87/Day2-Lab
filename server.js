const express = require('express');
const app = express();
const port = 3000;

//data
const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];
const randomAnswer = answers[Math.floor(Math.random() * answers.length + 1)];
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
//Magic 8 Ball
app.get('/magic/:question', (req, res) => {
    console.log(req.params)
    res.send(`${req.params.question} ? \n <h1>${randomAnswer}<h1>`);
})






app.listen(port, (req, res) => {
    console.log(`Server running on PORT ${port}`);
})