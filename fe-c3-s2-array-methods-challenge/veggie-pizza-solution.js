const menu = [
    {
        'category': 'Beverages',
        'name': 'Soft Drink',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Beverages',
        'name': 'Milk Shake',
        'price': 2.0
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    },
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Soft Drink',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};
const discount = 0.05;
//function to list menu items by category
function listByCategory(menu, categoryName) {
    return menu
      .filter(item => item.category === categoryName)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

//funtion to calculate the total of each item ordered
function calculateOrderAmountForEachItem(menu, order) {
    return order.items.map(item => {
      const menuItem = menu.find(menuItem => menuItem.name === item.name);
      return {
        name: item.name,
        quantity: item.quantity,
        price: menuItem.price,
        category: menuItem.category,
        amount: item.quantity * menuItem.price
      };
    });
  }

//function to calculate the main meal count to avail freebie
function calculateMainMealCount(menu, order) {
    const mainMealsCount = order.items.reduce((count, item) => {
      const menuItem = menu.find(menuItem => menuItem.name === item.name);
      return menuItem.category === 'Main Meal' ? count + item.quantity : count;
    }, 0);
    return mainMealsCount;
  }

//function to calculate the total bill amount 
function calculateTotalAmount(menu, order) {
    const totalAmount = calculateOrderAmountForEachItem(menu, order)
      .reduce((total, item) => total + item.amount, 0);
    return totalAmount;
  }

//funtion to calculate the final bill amount after applying discount
function calculateFinalAmount(menu, order, discount) {
    const totalAmount = calculateTotalAmount(menu, order);
    const discountAmount = totalAmount >= 50 ? totalAmount * discount : 0;
    const finalAmount = totalAmount - discountAmount;
    return Math.round(finalAmount * 100) / 100;
  }

//function to return a message if the order is eligible for free drink or null otherwise
function isEligibleForFreeDrink(menu, order) {
    const mainMealsCount = calculateMainMealCount(menu, order);
    return mainMealsCount >= 2
      ? 'Hurray!!The order is eligible for a free soft drink. Please do collect it!'
      : null;
  }


module.exports = {
    listByCategory,
    calculateOrderAmountForEachItem,
    calculateMainMealCount,
    calculateTotalAmount,
    calculateFinalAmount,
    isEligibleForFreeDrink
}