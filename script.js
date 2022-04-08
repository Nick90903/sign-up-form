let one = document.getElementById('password').value
let two = document.getElementById('confirm-password').value
let three = document.getElementById('message').value;

if(one == null | two == null | three == null) {
    console.log(`one ${one} two ${two} three ${three}`);
}


let check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm-password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = '';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').style.fontSize = '10px';
      document.getElementById('message').innerHTML = '*Passwords do not match';
    }
  }