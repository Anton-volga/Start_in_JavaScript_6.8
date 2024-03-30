let inputText = document.querySelector('input')
let duplicateField = document.querySelector('#duplicateField')

addEventListener('keyup', (event) => {
    duplicateField.textContent = inputText.value;
})

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(inputText.value);
    inputText.value = '';
    duplicateField.textContent = '';
})