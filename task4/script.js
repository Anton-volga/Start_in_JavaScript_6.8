let linkText = document.querySelector('a');

document.querySelector('a').addEventListener('click',
(event) => {
    event.preventDefault();
    linkText.textContent = prompt('Введите текст который ходите подставить в текст ссылки.')
})