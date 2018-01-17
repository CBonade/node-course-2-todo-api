const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// var id = "5a5fb35e9a87eaec1d12e8c711";

// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("Id not found");
//     }
//     console.log("Todo by ID", todo);
//   })
//   .catch(e => console.log(e));

var userID = "5a5f5ab650d118202310cb65";

User.findById(userID)
  .then(user => {
    if (!user) {
      return console.log("ID not found");
    }
    console.log("User By ID:", JSON.stringify(user, undefined, 2));
  })
  .catch(e => console.log("Improper ID format"));

//User.findById
