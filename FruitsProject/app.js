//jshint esversion:6
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please check your data entry, no name specified']
  },
  rating: {
    type: Number,
    min: [0, 'Range 0-10'],
    max: [10, 'Range 0-10']
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 10,
  review: "Love me some Honeycrisp"
});

//apple.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const greg = new Person({
  name: "Greg",
  age: 55,
  favouriteFruit: apple
});

//greg.save();

// const banana = new Fruit({
//   name: "Banana",
//   rating: 2,
//   review: "Yellow heaven"
// });
//
// const tomato = new Fruit({
//   name: "Tomato",
//   rating: 4,
//   review: "Is it really fruit?"
// });
//
// Fruit.insertMany([banana, tomato, apple], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("added more fruit");
//   }
// });

Fruit.find(function(err, fruits) {
  console.log("Show all the fruit");

  if (err) {
    console.log(err);
  } else {
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

Person.find(function(err, persons) {
  console.log("Show all the persons.");

  if (err) {
    console.log(err);
  } else {
    persons.forEach(function(person) {
      console.log(person.name);
    });
  }

  mongoose.connection.close();
});

// Fruit.updateOne({_id: "5f8b1538a5e3680be45e4792"}, {name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully updated the document.");
//   }
// });
//
// Fruit.deleteOne({name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully delete the document.");
//   }
// });

// Fruit.deleteMany({name: "Banana"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the documents.");
//   }
// });
