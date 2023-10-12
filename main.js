//Log In credentials
let username;
let password;
    document.getElementById("box").onclick = function(){
        username = document.getElementById("username").value;
        console.log(username);
        password = document.getElementById("password").value;
        if(username && password){
            console.log("logged in");
        }else{
            console.log("Log In or Sign Up to continue");
        }
    };
 
  //Sign Up credentials
  let firstname;
  let lastname;;
  let phone;
  let email;
  let confirmp;
  let create;

    document.getElementById("box1").onclick = function(){
        firstname = document.getElementById("fname").value;
        lastname = document.getElementById("lname").value;
        console.log(fname+lname);
        phone = document.getElementById("phone").value;
        email = document.getElementById("email").value;
        create = document.getElementById("cpassword").value;
        confirmp= document.getElementById("conpassword").value;
        if(confirmp==create){
            console.log("password set");
        }

        if(firstname && lastname && phone && email && confirmp && create){
            console.log("Welcome to DreamCar");
        }else{
            console.log("fill up all fields");
        }
    };  
    