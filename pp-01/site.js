document.getElementById('submit').addEventListener('click', check, false)
function check(){
  var c = document.getElementById('phone').value;
  if (isNaN(c)){
    alert('Please enter numbers!');
  }
  else if (c.length<10) {
    alert('Please enter a 10 digit phone number');
  }
  else {
    alert('Your form has been successfully submitted');
  }
}
