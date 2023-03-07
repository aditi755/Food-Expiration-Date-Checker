// Initialize an empty object to store food items and their expiration dates
const foodItems = {};

// Function to add a new food item with its expiration date
function addFoodItem() {
  const itemName = document.getElementById('item-name').value;
  const expirationDate = document.getElementById('expiration-date').value;
  if (itemName && expirationDate) {
    foodItems[itemName] = expirationDate;
    updateFoodList();
    clearForm();
  }
}

// Function to update the food list on the page
function updateFoodList() {
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = '';
    for (let item in foodItems) {
      const expirationDate = new Date(foodItems[item]);
      const formattedDate = `${expirationDate.getMonth() + 1}/${expirationDate.getDate()}/${expirationDate.getFullYear()}`;
      const listItem = document.createElement('li');
      listItem.textContent = `${item} - Expires on ${formattedDate}`;
      foodList.appendChild(listItem);
    }
}

// Function to clear the form after adding a new item
function clearForm() {
  document.getElementById('item-name').value = '';
  document.getElementById('expiration-date').value = '';
}

// Function to check if a food item is about to expire
function checkExpiration() {
  const currentDate = new Date();
  for (let item in foodItems) {
    const expirationDate = new Date(foodItems[item]);
    const timeDiff = expirationDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (daysLeft <= 3) {
      alert(`${item} is about to expire in ${daysLeft} days. Please use it soon.`);
    }
  }
}

