function black(){
    squareContainer.style.backgroundColor = 'black';
};

function green(){
    squareContainer.style.backgroundColor = 'green';
};

function yellow(){
    squareContainer.style.backgroundColor = 'yellow';
};

function blue(){
    squareContainer.style.backgroundColor = 'blue';
};

function red(){
    squareContainer.style.backgroundColor = 'red';
};

function purple(){
    squareContainer.style.backgroundColor = 'purple';
};

const header = document.createElement('h2');
    header.innerText = 'P&P Week4';
    header.style.color = 'black';
        document.body.appendChild(header);

var squareContainer = document.createElement('div');
    squareContainer.classList.add('pageSquare');
        document.body.appendChild(squareContainer);
        
window.addEventListener('load', black);
    squareContainer.addEventListener('mouseover', green);
    squareContainer.addEventListener('mousedown', yellow);
    squareContainer.addEventListener('mouseup', blue);
    squareContainer.addEventListener('dblclick', red);
window.addEventListener('wheel', purple);