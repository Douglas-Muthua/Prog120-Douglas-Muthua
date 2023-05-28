//variables

var FirstName = document.getElementById('FirstName').innerHTML;
var LastName = document.getElementById('LastName').innerHTML;
var EMail = document.getElementById('EMail').innerHTML;
var address = ["@gmail", "yahoo"]
var Phone = document.getElementById('Phone').innerHTML;
var Username = document.getElementById('Username').innerHTML;
var Password = document.getElementById('Password').innerHTML;
var Address = document.getElementById('Address').innerHTML;
var City = document.getElementById('City').innerHTML;
var State = document.getElementById('State').innerHTML;
var Country = document.getElementById('Country').innerHTML;
var ZipCode = document.getElementById('ZipCode').innerHTML;




function validation() {
  var check = true;
//first name 
  if (FirstName.length === 0) {
    check = false;
    alert("something is wrong with first name");
  }

  if (FirstName.length > 20) {
    check = false;
    alert("something is wrong with first name");

  }
//last name  
  if (LastName.length === 0) {
    check = false;
    alert("something is wrong with last name");
  }
  
  if (LastName.length > 50) {
    check = false;
    alert("something is wrong with last name");
  }
 //email
  if(EMail.indexOf() != address){
    check = false;
    alert("use a real email");
  }
 //phone
if(isNAN(Phone) = true){
      check = false;
    alert("numbers only please");
}

//username
    if (Username.length > 12) {
    check = false;
    alert("something is wrong with Username");
  }
//password
      if (Password.length > 7) {
    check = false;
    alert("something is wrong with Password");
  }
//address
//city
//state
//country
//zip code
  
  return check
}

//username
//password
//address
//city
//state
//country
//zip code
      if (ZipCode.length > 5) {
    check = false;
    alert("Zipcode too long");
  }
