// jshint esversion:6
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apiKey = "ce330da1b424cc1147051f123ac088d0";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey;

  https.get(url, function(response) {
    console.log("Response:", response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const kelvinTemp = weatherData.main.temp;
      const fahrenheitTemp = (9 / 5) * (kelvinTemp - 273) + 32;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      console.log("icon: " + icon);
      console.log("Image URL: " + imageURL);

      console.log("Temperature in Kelvin: " + kelvinTemp);
      console.log("Temperature in Fahrenheit: " + fahrenheitTemp);

      const description = weatherData.weather[0].description;
      console.log(description);

      res.write("<h1>");
      res.write("In " + query + ", the weather is currently " + description);
      res.write("</h1>");
      res.write("<img src=" + imageURL + ">");
      res.write("<br/>");
      res.write("<h1>");
      res.write("The temperature is: " + fahrenheitTemp + " degrees fahrenheit");
      res.write("</h1>");
    })
  })
});



app.listen(3000, function() {
  console.log("Server is running on port 3000");
})
