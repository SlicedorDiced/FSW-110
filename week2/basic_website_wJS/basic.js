var navBar1 = document.createElement('NAV');
var a1 = document.createElement('a');
navBar1.appendChild(a1);
a1.innerText = "Home";
var a2 = document.createElement('a');
navBar1.appendChild(a2);
a2.innerText = "Menu";
document.body.appendChild(navBar1);

navBar1.style.display = 'flex'; navBar1.style.justifyContent= 'center' ; navBar1.style.justifyContent = "Space-evenly"

var h1 = document.createElement('h1');
    h1.innerText = "Header1 tag in JS file";
        document.body.appendChild(h1)
var Para1 = document.createElement('p');
    Para1.innerText = "Paragraph in JS file"
        document.body.appendChild(Para1);
``
var div1 = document.createElement('div');
    var uList1 = document.createElement('ul');
    var itemArr = ["Grapes", "Cherrys", "Mangos", "Apples", "Bananas"];
    for (var x = 0; x < itemArr.length; x++ ){
        var listItems = document.createElement('li');
        listItems.innerText = itemArr[x];
        uList1.appendChild(listItems);
    }
    div1.appendChild(uList1);
        document.body.appendChild(div1);

var footerx = document.createElement('footer');
    footerx.innerText = "Javascript footer text";
        document.body.appendChild(footerx);