var shoppingList = ['apple', 'pear', 'mandarin', 'orange', 'banana']

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

shoppingList.forEach((fruit, index) => {
    console.log((index+1) + '. ' + capitalizeFirstLetter(fruit));
});