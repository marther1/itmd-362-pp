document.getElementById('submit').addEventListener('click', function(){
  var c = document.getElementById('phone').value;
  if (isNaN(c)){
    console.log('Please enter numbers!');
  }
  else if (c.length!==10) {
    console.log('Please enter a 10 digit phone number');
  }
  else {
    console.log('Your form has been successfully submitted');
  }
}, false);
