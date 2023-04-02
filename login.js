let data = JSON.parse(localStorage.getItem("user_data"))||[];

// console.log(data);

 document.querySelector("form").addEventListener("submit", myfunction)

 function myfunction(e) {

     e.preventDefault();

     let email = document.querySelector("#email").value
     let pass = document.querySelector("#password").value

     for (let i = 0; i < data.length; i++) {
         

         if (email == data[i].user_email && pass == data[i].user_password) {
         
            alert("Sign in Successful")

            window.location.href = "http://127.0.0.1:5500/index.html";
            break;

         } else {
             
             alert("wrong Credentials");
             break;

         }
     }
    
 }