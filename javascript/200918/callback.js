"use strict";

//Javascropt 동기적인 언어
//호이스팅 된 이후부터 하나씩 밑으로 읽음
//호이스팅은 var,function이 맨위로 올라감

console.log("1");
setTimeout(() => {
  console.log("1초 후");
}, 1000);
console.log("3");

//즉각적으로 실행하는 콜백
function printing(print) {
  print();
}

printing(() => console.log("힘듬"));

//언제 실행 될 지 모르는 콜백
function printing_2(print, callback) {
  setTimeout(print, callback);
}
printing_2(() => console.log("2초 후, 힘듬"), 2000);

//callback example ()
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "hyosung" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "hyosung") {
        onSuccess({ name: "hyosung", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const UserStrage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
UserStrage.loginUser(
  id,
  password,
  (user) => {
    UserStrage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `hellow ${userWithRole.name}, your have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
