let username_value = document.querySelector('#username').value;
let password_value = document.querySelector('#password').value;
let obj_form = document.querySelector('#form');

let isExisted = false;
let userTemp = {};
for (user of users) {
    if (username_value == user.username) {
        isExisted = true;
        userTemp = user;
        break;
    }
}

if (!isExisted) {
    alert("User does not exist!");
    obj_form.action = "#";
} else {
    if (userTemp.password != password_value) {
        alert("Wrong password!");
        obj_form.action = "#";
    } else {
        obj_form.action;
    }
}

