// Connecting and Finding/Querying documents

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

    // "findOne" method without using Promises

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          return console.log("Unable to fetch data");
        }
        console.log(tasks);
      });

    // "findOne" method using Promises

    db.collection("tasks")
      .find({ completed: true })
      .toArray()
      .then((tasks) => {
        console.log(tasks);
      })
      .catch((error) => {
        console.log(error);
      });

    // "findOne" method works in the same way as "find" except that it returns the first match ;-)
  }
);
