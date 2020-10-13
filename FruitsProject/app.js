//jshint esversion:6
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ( {
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit ({
  name: "Apple",
  rating: 8,
  review: "Love me some Honeycrisp"
});

apple.save();

const banana = new Fruit ({
  name: "Banana",
  rating: 8,
  review: "Yellow heaven"
});

const tomato = new Fruit ({
  name: "Tomato",
  rating: 4,
  review: "Is it really fruit?"
});

Fruit.insertMany( [ banana, tomato ], function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("added more fruit");
  }

});
