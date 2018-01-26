document.getElementById('submit').addEventListener('click', check, false)
function check(){
  var c = document.getElementById('phone').value;
  if (isNaN(c)){
    alert('Please enter numbers!')
  }
}
