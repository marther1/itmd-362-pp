document.getElementById('submit').addEventListener('click', function(e){
  var c = document.getElementById('phone').value;
  if (isNaN(c)){
    $('#form-list').append('<li id="error">Please enter numbers!</li>');
  }
  else if (c.length!==10) {
    $('#error').replaceWith('<li id="mistake">Please enter a 10 digit number</li>');
  }
  else {
    $('#error').replaceWith('<li>Form has been successfully submited!</li>');
    $('#mistake').replaceWith('<li>Form has been successfully submited!</li>');
  }
  e.preventDefault();
}, false);
