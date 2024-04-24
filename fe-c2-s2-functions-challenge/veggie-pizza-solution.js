// Global variables for menu, customer, and order details
let menu = {
  'Pizza (Regular)': 9.99,
  'Pizza (Medium)': 11.99,
  'Pizza (Large)': 13.99,
  'Garlic Bread': 5.99,
  'Beverages': 1.99
};

let customer = {
  'Customer Name': 'Gary',
  'Customer Phone Number': '+412312345'
};

let orderDetails = {
  'Garlic Bread': 5,
  'Pizza (Regular)': 10,
  'Beverages': 10
};

// Function to display customer details
function displayCustomerDetails(customerDetails) {
  alert(`Customer Details\n--------------------------------\nCustomer Name : ${customerDetails['Customer Name']}\nCustomer Phone Number : ${customerDetails['Customer Phone Number']}`);
}

// Function to display menu details
function displayMenuDetails(menuDetails) {
  let menuDisplay = 'S.No   Item Category   Price\n--------------------------------------\n';
  let count = 1;
  for (let item in menuDetails) {
    if (menuDetails.hasOwnProperty(item)) {
      const price = menuDetails[item].toFixed(2);
      menuDisplay += count + '        ' + item + '     $' + price + '\n';
      count++;
    }
  }
  alert(menuDisplay);
}

// Function to get pizza price by size
function getPizzaPrice(size) {
  if (size === 'Regular') return menu['Pizza (Regular)'];
  else if (size === 'Medium') return menu['Pizza (Medium)'];
  else if (size === 'Large') return menu['Pizza (Large)'];
  else return 0;
}

// Functions to get price of garlic bread and beverages
function getGarlicBreadPrice() {
  return menu['Garlic Bread'];
}

function getBeveragesPrice() {
  return menu['Beverages'];
}

// Function to calculate subtotal of an item
function calculateSubtotal(quantity, price) {
  return quantity * price;
}

// Function to calculate total bill amount
function calculateTotalBill(pizzaSubtotal, garlicBreadSubtotal, beveragesSubtotal) {
  return pizzaSubtotal + garlicBreadSubtotal + beveragesSubtotal;
}

// Function to calculate final bill amount after discount
function calculateFinalBill(totalBillAmount) {
  const discount = totalBillAmount >= 50 ? totalBillAmount * 0.1 : 0;
  const finalBillAmount = totalBillAmount - discount;
  return { totalBillAmount, discount, finalBillAmount };
}

// Function to display final bill details
function displayFinalBillDetails(pizzaSubtotal, garlicBreadSubtotal, beveragesSubtotal, finalBill) {
  const billDetails = `Bill Details\n------------------------\nPizza (Regular)     :  ${orderDetails['Pizza (Regular)']}\nGarlic Bread           :  ${orderDetails['Garlic Bread']}\nBeverages               :  ${orderDetails['Beverages']}\n------------------------------------------------\nThe total bill Amount is        :  $ ${finalBill.totalBillAmount.toFixed(2)}\nDiscount Amount                    :  $ ${finalBill.discount.toFixed(2)}\nThe final bill amount is          :  $ ${finalBill.finalBillAmount.toFixed(2)}`;
  alert(billDetails);
}

// Display customer and menu details
displayCustomerDetails(customer);
displayMenuDetails(menu);

// Calculate and display final bill details
const pizzaSubtotal = calculateSubtotal(orderDetails['Pizza (Regular)'], getPizzaPrice('Regular'));
const garlicBreadSubtotal = calculateSubtotal(orderDetails['Garlic Bread'], getGarlicBreadPrice());
const beveragesSubtotal = calculateSubtotal(orderDetails['Beverages'], getBeveragesPrice());
const totalBillAmount = calculateTotalBill(pizzaSubtotal, garlicBreadSubtotal, beveragesSubtotal);
const finalBill = calculateFinalBill(totalBillAmount);
displayFinalBillDetails(pizzaSubtotal, garlicBreadSubtotal, beveragesSubtotal, finalBill);