// This is my JavaScript code
// alert(`This is working!`);

// Naming convention - lowerCamelCase
const myParagraph = document.getElementById('paragraph');

// Access
console.log(`This is a demo!`);
console.log( myParagraph );

// Manipulate / Change
myParagraph.textContent = "This is the new value of the paragraph";

// Date
const myDate = document.getElementById('date-today');
myDate.textContent = new Date(Date.now()).toLocaleString();

// querySelector
const myHeader = document.querySelector('h1');
const mySecondParagraph = document.querySelector('#paragraph');
const mySpan = document.querySelector('.span-element');

// JavaScript - we can style our components
const alejandroGrade = document.querySelector('#alejandro-grade');
const lisaGrade = document.querySelector('#lisa-grade');

// Dynamic Styling 
if( parseInt(alejandroGrade.textContent) >= 80 ){
    // Passing grade
    alejandroGrade.style.color = 'green';
}else{
    // Failing grade
    alejandroGrade.style.color = 'red';
}

if( parseInt(lisaGrade.textContent) >= 80 ){
    // Passing grade
    lisaGrade.style.color = 'green';
}else{
    // Failing grade
    lisaGrade.style.color = 'red';
}

// Can we make elements, using JS, from Scratch?

for(let i = 0; i < 5; i++ ){
    const mainContainer = document.querySelector('main');
    const myImage = document.createElement('img'); // <img>
    myImage.src = 'https://images.pexels.com/photos/1710023/pexels-photo-1710023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    myImage.style.width = '50%';
    
    mainContainer.appendChild( myImage );
}