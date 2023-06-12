let inventoryItems = []

function additem(name, price, quantity) {
  let item = {
    name: name,
    price: price,
    quantity: quantity,
  };
  inventoryItems.push(item);
}

additem("Orange", .75, 50);
additem("Lemon", .75, 50);
additem("Cereal", 5, 8);
additem("Orange", .75, 50);
additem("Orange", .75, 50);
additem("Juice", 4.50, 30);

console.log(inventoryItems);

function removeItem(name) {
  inventoryItems = inventoryItems.filter((item) => item.name !== name);
}

removeItem("Orange")
console.log(inventoryItems)

function updateItem(name, newPrice, newQuantity) {
  for (let i = 0; i < inventoryItems.length; i++) {
    if (inventoryItems[i].name === name) {
      inventoryItems[i].price = newPrice;
      inventoryItems[i].quantity = newQuantity;
    }
  }
}

updateItem("Lemon", .85, 200);
console.log(inventoryItems)

function calculateTotalValue() {
  let totalValue = 0;
  for (let i = 0; i < inventoryItems.length; i++) {
    const item = inventoryItems[i];
    const itemValue = item.price * item.quantity;
    totalValue += itemValue;
  }
  return totalValue;
}

const totalValue = calculateTotalValue();
console.log("Total Value:", totalValue)