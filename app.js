function redirect () {
    window.location = "login.html";
}
setTimeout('redirect()', 5000);


function signin(clicked) {
  alert("signing in");
}

function forgot(clicked) {
  alert("Please visit nearest branch and reset password");
}

function prepaid() {
    let password = prompt("Please enter your remote pin to buy prepaid mobile:", " ");
}
function power() {
    let password = prompt("Please enter your remote pin to buy electricity:", " ");
}
function transfer() {
    let password = prompt("Please enter your remote pin to transfer money:", " ");
}
function stop() {
    let password = prompt("Please enter your remote pin to stop card:", " ");
}
function debit() {
    let password = prompt("Please enter your remote pin to access debit orders:", " ");
}
function settings() {
    let password = prompt("Please enter your remote pin to access app settings:", " ");
}