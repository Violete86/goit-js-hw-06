// // Напиши скрипт, який під час набору тексту в 
// інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output.
//  Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');


inputEl.addEventListener('input', handleTargetInput);

function handleTargetInput (event) {
    if(event.target.value === "") {
        outputEl.textContent = "Anonymous";
    } else {
        outputEl.textContent = event.target.value; 

   }
    console.log(event.target.value);
};


