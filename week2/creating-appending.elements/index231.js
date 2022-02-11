var newHeader = document.createElement('h1');
newHeader.innerText = "Welcome to my JS site";
document.body.append(newHeader);

var newPara = document.createElement('p');
newPara.innerText = "All of this was created with Javascript";
document.body.appendChild(newPara);

var div0 = document.createElement('div');


var myOrderList = document.createElement('ol');
var listItems0 = document.createElement('li');
var listItems1 = document.createElement('li');
var listItems2= document.createElement('li');
var listItems3 = document.createElement('li');
var listItems4 = document.createElement('li');

listItems0.innerText = "javascript List Items 0";
listItems1.innerText = "javascript List Items 1";
listItems2.innerText = "javascript List Items 2";
listItems3.innerText = "javascript List Items 3";
listItems4.innerText = "javascript List Items 4";

myOrderList.appendChild(listItems0);
myOrderList.appendChild(listItems1);
myOrderList.appendChild(listItems2);
myOrderList.appendChild(listItems3);
myOrderList.appendChild(listItems4);
div0.appendChild(myOrderList);
document.body.appendChild(div0);