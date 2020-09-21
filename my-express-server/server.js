const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/contact', function(req, res) {
  res.send('<h1>Contact me at nelsongre35@gmail.com</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>Hi, I am Greg, I am a developer</h1>');
});

app.get('/hobbies', function(req, res) {
  res.send('<h2>My hobbies are: Hunting, Fishing, Coding</h2>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
