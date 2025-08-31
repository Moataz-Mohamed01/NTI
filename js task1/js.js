var users = [
  { id: 1, name: "moataz", age: 30, balance: 500 },
  { id: 2, name: "ahmed", age: 10, balance: 200 },
  { id: 3, name: "sara", age: 25, balance: 300 },
  { id: 4, name: "mohamed", age: 35, balance: 400 },
];

function numberOfUsers(users) {
  return users.length;
}
console.log("Number of users:", numberOfUsers(users));

function addUser(users, user) {
  return [...users, user]; 
}
var usersAfterAdd = addUser(users, { id: 5, name: "yasmine", age: 22, balance: 150 });
console.log("After addUser:", usersAfterAdd);

function editUserBalanceById(users, id, newBalance) {
  return users.map(user =>
    user.id === id ? { ...user, balance: newBalance } : user
  ); 
}
var usersAfterEdit = editUserBalanceById(usersAfterAdd, 2, 5000);
console.log("After edit balance:", usersAfterEdit);

function deleteUserById(users, id) {
  return users.filter(user => user.id !== id); 
}
var usersAfterDelete = deleteUserById(usersAfterEdit, 3);
console.log("After delete user:", usersAfterDelete);