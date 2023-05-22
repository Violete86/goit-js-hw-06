const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let allIng = [];

ingredients.forEach(ingredient => {
  const liEl = document.createElement('li')
  
liEl.textContent = ingredient;
liEl.classList.add('item')
allIng.push(liEl)
} ) 

const ulEl = document.querySelector('#ingredients');
console.log(ulEl);
ulEl.append(...allIng);



