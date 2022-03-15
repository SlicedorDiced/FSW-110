const form = document.tableform

form.addEventListener('submit', function(event) {
    event.preventDefault()

    var tea = Number(form.tea.value) * 7
    var bagel = Number(form.bagel.value) * 3
    var coffee = Number(form.coffee.value) * 11

    document.getElementById('total').textContent = tea + bagel + coffee
});

