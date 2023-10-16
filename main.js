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
 
  