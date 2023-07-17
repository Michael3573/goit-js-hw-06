



const itemsEl = document.querySelectorAll('ul#categories li.item');
console.log('Number of categories:', itemsEl.length);

itemsEl.forEach(itemEl => {
   const titleEl = itemEl.querySelector('h2');
   const subItemsEl = itemEl.querySelectorAll('li');

console.log('Category:', titleEl.textContent);
console.log('Elements:', subItemsEl.length);
}); 












