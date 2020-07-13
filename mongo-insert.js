// Connecting and Inserting documents

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database");
    }
    const db = client.db(databaseName);
    // insertOne method without using Promise
    db.collection("users").insertOne(
      {
        name: "Santanu Dutta",
        age: 21,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert the document");
        }
        console.log(result);
      }
    );
    // insertOne method  using Promise
    db.collection("tasks")
      .insertOne({
        description: "Clean the floor",
        completed: false,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // insertMany method
    db.collection("users")
      .insertMany([
        {
          name: "Susanto Dey",
          age: 31,
        },
        {
          name: "Pallabi Dey",
          age: 25,
        },
        {
          name: "Riya Singh",
          age: 21,
        },
      ])
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
