"use strict";

//callback example ()
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, rejcet) => {
      setTimeout(() => {
        if (
          (id === "hyosung" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          rejcet(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "hyosung") {
          resolve({ name: "hyosung", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`hellow ${user.name}, your have a ${user.role} role`))
  .catch(console.log);
