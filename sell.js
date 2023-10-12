//sell details
let ownername;
let phnum;
let address;
let carname;
let carbrand;
let carmodel;
let carcolor;
let carbkm;
let carmilage;

  document.getElementById("box2").onclick = function(){
      carname = document.getElementById("cname").value;
      carbrand= document.getElementById("cbrand").value;
      carmodel = document.getElementById("cmodel").value;
      carcolor= document.getElementById("ccolor").value;
      carbkm = document.getElementById("kmsd").value;
      carmilage= document.getElementById("milage").value;
      ownername = document.getElementById("oname").value;
      phnum= document.getElementById("ophone").value;
      console.log("CARNAME  :" +carname);
      console.log("CARBRAND :"+carbrand);
      console.log("CARMODEL :"+carmodel);
      console.log("CARCOLOR :"+carcolor);
      console.log("MILEGE   :"+carmilage);
      console.log("KM's DRIVEN :"+carbkm);

      console.log(`${ownername}`+" "+ "we have received your details, our representative will contact you shortly");
      
 };  
  