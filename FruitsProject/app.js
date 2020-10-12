//jshint esversion:6
const MongoClient = require('mongodb').MongoClient
const Server = require('mongodb').Server;

const assert = require('assert');

const mongoClient = new MongoClient(new Server('localhost', 27017));

mongoClient.connect(function(err, mongoClient) {
  const db = mongoClient.db("fruitDB");

  assert.equal(null, err);

  console.log("Connected successfully to server");

  mongoClient.close();
});
