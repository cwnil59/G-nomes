function search() {
var patient = document.getElementById("patient").value;
var drug = document.getElementById("drug").value;


if (drug!='Alcohol' && drug!='alcohol') {
  document.getElementById('results').innerHTML = 'Invalid drug name.';

} else {


  document.getElementById('resultheading').innerHTML = 'Results';
  var table = document.getElementById('resulttable');
  table.style.visibility = "visible";

  if (table.rows.length != 1) {
    table.deleteRow(1);
  }

  switch (patient) {
    case '0000001':
      document.getElementById('results').innerHTML = 'Patient is normal.';

      var row2 = table.insertRow();
      row2.insertCell().innerHTML = "0000001";
      row2.insertCell().innerHTML = "Bill Gates";
      row2.insertCell().innerHTML = "ALDH2";
      row2.insertCell().innerHTML = "rs671(GG)";
      row2.insertCell().innerHTML = "Normal";


      break;
    case '0000002':
      document.getElementById('results').innerHTML = 'Patient is sensitive to Alcohol.';
      var row2 = table.insertRow();
      row2.insertCell().innerHTML = "0000002";
      row2.insertCell().innerHTML = "Helena Yates";
      row2.insertCell().innerHTML = "ALDH2";
      row2.insertCell().innerHTML = "rs671(AA)";
      row2.insertCell().innerHTML = "Mutant";

      break;
    case '0000003':
      document.getElementById('results').innerHTML = 'Patient is sensitive to Alcohol.';
      var row2 = table.insertRow();
      row2.insertCell().innerHTML = "0000003";
      row2.insertCell().innerHTML = "Roger Abdeen";
      row2.insertCell().innerHTML = "ALDH2";
      row2.insertCell().innerHTML = "rs671(AA)";
      row2.insertCell().innerHTML = "Mutant";

      break;
    default:
      document.getElementById('results').innerHTML = 'Invalid Patient iD.';
      table.style.visibility = "hidden";
  }
}
}
