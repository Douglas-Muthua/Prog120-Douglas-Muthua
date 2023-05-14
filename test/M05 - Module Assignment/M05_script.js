var table = 3;             // Unit of table

operator = GetValueFromUser("operator");
table = GetValueFromUser("table")
const ask = window.prompt("give a number 1-10");
// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(operator, table);

function GetValueFromUser(valueType) {
  var greetingMessage = 'Hello. How are you?';
  if (valueType == "operator") {
    greetingMessage += "Enter addition or multiplication";
  }
  else
  {
    greetingMessage += "Enter table";
  }
  return prompt(greetingMessage);
}

function GetTableContent(operator, table) {
  var i = 1;                 // Set counter to 1
  var msg = '<h2>' + (operator === 'addition' ? 'Addition Table' : 'Multiplication Table') + ' for ' + table + '</h2>';
              // Message  
  if (operator === 'addition') {
    // Do addition
    while (i < 11) {
      msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
      i++;
    }
  } else {
    // Do multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  }
  return msg;
}