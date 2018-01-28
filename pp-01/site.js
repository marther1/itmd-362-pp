document.getElementById('submit').addEventListener('click', function(){
  var c = document.getElementById('phone').value;
  if (isNaN(c)){
    $('#form-list').append('<li>Please enter numbers!</li>');
  }
  else if (c.length!==10) {
    $('#form-list').append('<li>Please enter a 10 digit number</li>');
  }
  else {
    $('#form-list').append('<li>Form has been successfully submited</li>');
  }
}, false);
