function addpatient() {
var nhsid = document.getElementById("nhsid").value;
var forename = document.getElementById("forename").value;
var lastname = document.getElementById("lastname").value;
var ad1 = document.getElementById("ad1").value;
var ad2 = document.getElementById("ad2").value;
var dob = document.getElementById("dob").value;
var gender = document.getElementById("gender").value;

document.getElementById("results").innerHTML = "Form submitted. Patient added to database.";

var table = document.getElementById("fulldata");

var row2 = table.insertRow();
row2.insertCell().innerHTML = nhsid;
row2.insertCell().innerHTML = forename;
row2.insertCell().innerHTML = lastname;
row2.insertCell().innerHTML = ad1;
row2.insertCell().innerHTML = ad2;
row2.insertCell().innerHTML = gender;
row2.insertCell().innerHTML = dob;
row2.insertCell().innerHTML = "GGCCACGCTC";



}
