// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

const helloWorld = ((request, response) => {
  return response.send({
    status: 200,
    message: "Hello World!",
  });
});

const users = ((request, response) => {
  const usersList = [
    {
      id: 0,
      name: "Hello",
      surname: "World",
    },
    {
      id: 1,
      name: "Foo",
      surname: "Bar",
    },
  ];
  return response.send({
    status: 200,
    message: usersList,
  });
});

// CRUD interfaces:
app.get('/', helloWorld);
app.get('/users', users);

// Expose Express API as a single Cloud Function:
module.exports = functions.https.onRequest(app);
