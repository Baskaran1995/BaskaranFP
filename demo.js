var items = document.getElementByClassName('list-group-item');

console.log(items);

console.log(items [1])

items[1].textContent = "Hello 2";

items[2].style.fontweight = 'bold';

items[3].style.backgroundColor= 'Green';

for(var i=0; i<items.length; i++){

items[i].style.backgroundColor= '#f4f4f4';

}

