var navBar1 = document.createElement('NAV');
navBar1.innerText = "Home";
document.body.appendChild(navBar1);

var h1 = document.createElement('h1');
    h1.innerText = "Header1 tag in JS file";
        document.body.appendChild(h1)

var Para1 = document.createElement('p');
    Para1.innerText = "Paragraph in JS file"
        document.body.appendChild(Para1);

var div1 = document.createElement('div');
    var uList1 = document.createElement('ul');
        var listItems0 = document.createElement('li');
        var listItems1 = document.createElement('li');
        var listItems2 = document.createElement('li');
        var listItems3 = document.createElement('li');
        var listItems4 = document.createElement('li');
            listItems0.innerText = "Grapes";
            listItems1.innerText = "Cherrys";
            listItems2.innerText = "Mangos";
            listItems3.innerText = "Apples";
            listItems4.innerText = "Bananas";

uList1.appendChild(listItems0);
uList1.appendChild(listItems1);
uList1.appendChild(listItems2);
uList1.appendChild(listItems3);
uList1.appendChild(listItems4);
    div1.appendChild(uList1);
        document.body.appendChild(div1);

var footerx = document.createElement('footer');
    footerx.innerText = "Javascript footer text";
        document.body.appendChild(footerx);