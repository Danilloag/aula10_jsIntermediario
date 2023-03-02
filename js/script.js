let name1 = document.querySelector('#name1')
let name2 = document.querySelector('#name2')
let name3 = document.querySelector('#name3')
let nameList1 = document.querySelector('#nameList1')
let nameList2 = document.querySelector('#nameList2')
let nameList3 = document.querySelector('#nameList3')
let saveButton = document.querySelector('#saveButton')
let alertSuccess = document.querySelector('#alertSuccess')
let alertError = document.querySelector('#alertError')

function validaPreenchimento() {
    if (name1.value.trim() !== '' && name2.value.trim() !== '' && name3.value.trim() !== '') {
        exibeLista();
        alertSuccess.removeAttribute('hidden');
        alertError.setAttribute('hidden','');
    } else {
        alertError.removeAttribute('hidden');
        alertSuccess.setAttribute('hidden','');
    }
}

function exibeLista() {
    nameList1.innerHTML = `Nome 1: ${name1.value}`;
    nameList2.innerHTML = `Nome 2: ${name2.value}`;
    nameList3.innerHTML = `Nome 3: ${name3.value}`;
}

saveButton.onclick = function() {
    validaPreenchimento();
}