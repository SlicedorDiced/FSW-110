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