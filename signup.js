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
      console.log(`${firstname} ${lastname}`);
      phone = document.getElementById("phone").value;
      email = document.getElementById("email").value;
      create = document.getElementById("cpassword").value;
      confirmp= document.getElementById("conpassword").value;
      if(confirmp.value == create.value){
          console.log("password set");
      }

      if(firstname && lastname && phone && email && confirmp && create){
          console.log("Welcome to DreamCar");
      }else{
          console.log("fill up all fields");
      }
  };  
  