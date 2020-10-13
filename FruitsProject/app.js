//jshint esversion:6
const MongoClient = require('mongodb').MongoClient
const Server = require('mongodb').Server;

const assert = require('assert');

const mongoClient = new MongoClient(new Server('localhost', 27017));

mongoClient.connect(function(err, mongoClient) {
  const db = mongoClient.db("fruitDB");

  assert.equal(null, err);

  console.log("Connected successfully to server");

//  insertDocuments(db,function() {
//    mongoClient.close();
//  });

  findDocuments(db,function() {
    mongoClient.close();
  });

});

const insertDocuments = function(db, callback) {
    const collection = db.collection('fruits');

    collection.insertMany( [ {a : 1}, {a : 2}, {a : 3} ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
};

const findDocuments = function(db, callback) {
    const collection = db.collection('fruits');

    collection.find({}).toArray(function(err, result) {
      assert.equal(err, null);
      console.log("FOund the following records");
      console.log(result);
      callback(result);
    });
};
