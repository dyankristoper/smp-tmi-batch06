const mainContainer = document.querySelector('main');

// Greeting
const greetingHeader = document.querySelector('#greeting');
const button = document.querySelector('#btn');

// addEventListener to actively listen to events/occurences
// in the browser
button.addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    greetingHeader.textContent = `Hola! Welcome ` + name + '!';
});

const btnSubmit = document.querySelector('#btn-submit');
btnSubmit.addEventListener('click', () => {
    const color = document.querySelector('#color').value;
    const colorStatement = document.createElement('p');
    colorStatement.textContent = `My favorite color is ${ color }`;
    colorStatement.style.color = color;

    mainContainer.appendChild(colorStatement);
});