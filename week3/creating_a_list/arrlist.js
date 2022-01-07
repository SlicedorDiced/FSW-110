
for ( var i = 0; i < 10; i++){
    const header = document.createElement('h1');
    header.innerText = "Hello World";
    document.body.appendChild(header);
}


var div = document.createElement('div');
    var nameList = document.createElement('ul');
    var nameArr = ['steve', 'larry','joe','shirley','steph','nate','rick','emily'];
for ( var i = 0; i < nameArr.length; i++){
    var Items = document.createElement('li');
    Items.innerText = nameArr[i];
    nameList.appendChild(Items);
}
div.appendChild(nameList);
    document.body.appendChild(div);