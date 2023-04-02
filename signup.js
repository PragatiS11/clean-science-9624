let result = JSON.parse(localStorage.getItem("user_data")) || [];

// let submit= document.querySelector("form").addEventListener("submit",submit_function);
let submit = document.querySelector("form").addEventListener("submit", submit_function);

function submit_function() {

  event.preventDefault();
  let name = document.querySelector("#name").value
  let email = document.querySelector("#email").value
  let pass = document.querySelector("#password").value

  let obj = {
    user_name: name,
    user_email: email,
    user_password: pass,
  }
  result.push(obj);
  //console.log(result);
  localStorage.setItem("user_data", JSON.stringify(result))

  window.location.href = "http://127.0.0.1:5500/login.html";
}