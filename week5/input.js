const form = document.form;
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        alert
        (`
        Name: ${form.firstName.value} ${form.lastName.value}
        Age: ${form.age.value}
        Seen Before: ${form.haveyou.value}
        How we do? ${form.how.value}
        Symtoms: ${patientSymtoms()}`);
    });

const checkedSymtoms = [];

    function patientSymtoms(){
        for(let i = 0; i < form.symtoms.length; i++){
            if(form.symtoms[i].checked){
                checkedSymtoms.push(form.symtoms[i].value);
        }
    }
        return(checkedSymtoms)
};