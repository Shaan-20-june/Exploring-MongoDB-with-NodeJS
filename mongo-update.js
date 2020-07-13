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
    // updateMany method
    db.collection("tasks")
      .updateMany(
        { completed: false },
        {
          $set: {
            completed: true,
          },
        }
      )
      .then((result) => {
        console.log(result.modifiedCount);
      })
      .catch((error) => {
        console.log(error);
      });

    // updateOne method

    db.collection("users")
      .updateOne(
        { _id: new ObjectID("5f0c4724448f778d3823a981") },
        {
          $set: {
            name: "Bratati Singh",
          },
        }
      )
      .then((result) => {
        console.log(result.modifiedCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
