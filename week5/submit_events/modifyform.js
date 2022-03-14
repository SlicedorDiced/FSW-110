/*

function popAlert() {
    alert(document.getElementById('username'))
}
var password = document.getElementById('password'),
    verifiedPass = document.getElementById('verifyPass');

function verifyPassword(){
    if(password.value != verifiedPass.value){
        verifiedPass.setCustomValidity('Passwords DO NOT match!')
    } else {
        verifiedPass.setCustomValidity('Your account has been created.')
    }
}
password.addEventListener('change', verifyPassword);
verifiedPass.addEventListener('keyup', verifyPassword);
*/


var container = document.getElementById('container');

var button = document.getElementById('btnSubmit');
function submitForm(){
    document.getElementsByName('form')[0];

    form.submit();
    form.reset();
    return false;
}

const form = document.form;
if (password.value === verifiedPassword.value){

form.addEventListener("btnSubmit", (event) => {
    event.preventDefault()
    alert
    (`
    New user name is.. ${form.username.value}
    password is... ${form.password.value}`);
    })
}

