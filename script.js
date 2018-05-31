  
function getFormValue(){
   var fname= document.getElementById('fname').value;

   console.log(fname);

   var lname= document.getElementById('lname').value;
   console.log(lname);

   document.getElementById("display").innerHTML  = "Hello my name is " + fname + " " + lname
};

