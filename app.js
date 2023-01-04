function redirectF () {
    window.location = "home.html";
}

function signin(clicked) {
  var Input = document.getElementById("pin").value;

  if (Input === '') {
      alert('Your remote password cannot be empty');
  } else if (Input === '1234') {
      setTimeout('redirectF()', 1500);
  } else {
      alert("Your Password is incorrect, try using 1234");
  }
}

function forgot(clicked) {
  alert("Please visit nearest branch and reset password");
}

function prepaid() {
    let password = prompt("Please enter your remote pin to buy prepaid mobile:", " ");
    if (password === '1234') {
        setTimeout('redirectF()', 1500);
    } else {
        alert("Your Password is incorrect, try using 1234");
    }
}
function power() {
    let password = prompt("Please enter your remote pin to buy electricity:", " ");
    if (password === '1234') {
        setTimeout('redirectF()', 1500);
    } else {
        alert("Your Password is incorrect, try using 1234");
    }
}
function transfer() {
    let password = prompt("Please enter your remote pin to transfer money:", " ");
    if (password === '1234') {
        setTimeout('redirectF()', 1500);
    } else {
        alert("Your Password is incorrect, try using 1234");
    }
}
function stop() {
    let password = prompt("Please enter your remote pin to stop card:", " ");
    if (password === '1234') {
        setTimeout('redirectF()', 1500);
    } else {
        alert("Your Password is incorrect, try using 1234");
    }
}
function debit() {
    let password = prompt("Please enter your remote pin to access debit orders:", " ");
    if (password === '1234') {
        setTimeout('redirectF()', 1500);
    } else {
        alert("Your Password is incorrect, try using 1234");
    }
}
function settings() {
    let password = prompt("Please enter your remote pin to access app settings:", " ");
    if (password === '1234') {
        setTimeout('redirectF()', 1500);
    } else {
        alert("Your Password is incorrect, try using 1234");
    }
}