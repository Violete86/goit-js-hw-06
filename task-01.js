

const itemEl= document.querySelectorAll('.item');
console.log(itemEl);
 console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(element => {
   console.log(`Category: ${element.firstElementChild.textContent}`);
   console.log(`Elements: ${element.lastElementChild.childElementCount}`);
});


