const header = document.createElement('h2');
    header.classList.add('h2');
    header.innerText = 'Project 2 JS&Html Calculator';
    header.style.color = 'black';
        document.body.appendChild(header);


var addButton = document.getElementById('addButton')
    addButton.addEventListener('click', function(){
var h1 = document.getElementById('addResult')
var num1 = document.getElementById('addnum1').value
var num2 = document.getElementById('addnum2').value
    h1.textContent = 'Your answer is ' + (Number(num1) + Number(num2))
})
var subButton = document.getElementById('subButton')
    subButton.addEventListener('click', function(){
var h1 = document.getElementById('subResult')
var num1 = document.getElementById('subnum1').value
var num2 = document.getElementById('subnum2').value
    h1.textContent = 'Your answer is ' + (Number(num1) - Number(num2))
})
var mulButton = document.getElementById('mulButton')
    mulButton.addEventListener('click', function(){
var h1 = document.getElementById('mulResult')
var num1 = document.getElementById('mulnum1').value
var num2 = document.getElementById('mulnum2').value
    h1.textContent = 'Your answer is ' + (Number(num1) * Number(num2))
})
var divButton = document.getElementById('divButton')
    divButton.addEventListener('click', function(){
var h1 = document.getElementById('divResult')
var num1 = document.getElementById('divnum1').value
var num2 = document.getElementById('divnum2').value
    h1.textContent = 'Your answer is ' + (Number(num1) / Number(num2))
})