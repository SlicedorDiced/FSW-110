for (var i = 0; i < 5; i++){
    const header5 = document.createElement('h2');
    header5.innerText = "Changing Styles; What ever text I want";
    document.body.appendChild(header5);
    header5.classList.add('border');
    header5.style.fontSize = '20px';
    header5.style.fontWeight = 'lighter';
    header5.style.color = 'cornflowerblue';
    header5.style.fontFamily = 'sans-serif';
}

