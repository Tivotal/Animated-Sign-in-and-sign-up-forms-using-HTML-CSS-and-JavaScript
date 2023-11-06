/* Created by Tivotal */

let loginBtn = document.querySelector(".login");
let signupBtn = document.querySelector(".signup");
let signinForm = document.querySelector(".signinForm");

signupBtn.onclick = () => {
  signinForm.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
  signinForm.style.marginLeft = "0%";
};
