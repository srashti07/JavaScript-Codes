// Write solution code here to dynamically add the form fields
// Define function submitOrder() to save the order details on clicking the submit button
function submitOrder() {
    // Capture and save order details in an array
    const orderDetails = {
        orderId: document.getElementById("order-id").value,
        orderDate: document.getElementById("order-date").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contactNumber: document.getElementById("contact-number").value,
        address: document.getElementById("address").value,
        totalAmount: document.getElementById("total-amount").value,
        orderedItems: []
    };

    // Loop through order items and add them to the orderDetails array
    document.querySelectorAll('[id^="category-"]').forEach(function (categoryField, index) {
        const itemNameField = document.getElementById(`item-name-${index + 1}`);
        const priceField = document.getElementById(`price-${index + 1}`);
        const quantityField = document.getElementById(`quantity-${index + 1}`);
        const amountField = document.getElementById(`amount-${index + 1}`);

        const orderedItem = {
            category: categoryField.value,
            itemName: itemNameField.value,
            price: priceField.value,
            quantity: quantityField.value,
            amount: amountField.value
        };

        orderDetails.orderedItems.push(orderedItem);
    });

    // Display a confirmation message
    alert(`Order placed successfully!\nTotal amount to be paid: ${orderDetails.totalAmount}`);

    // Log the orderDetails to the console
    console.log(orderDetails);
}

document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const orderForm = document.getElementById("order-form");
    const addOrderItemButton = document.getElementById("add-order-item");
    const orderItemsContainer = document.getElementById("order-items");
    const totalAmountField = document.getElementById("total-amount");

    // Counter for generating unique IDs
    let orderIdCounter = 1;

    // Event listener for the "+" button
    addOrderItemButton.addEventListener("click", function () {
        console.log("+ button clicked");
        addOrderItem();
    });

    function addOrderItem() {
        // Dynamically create HTML for a new order item
        const orderItemTemplate = `
            <div class="order-item">
                <label for="category-${orderIdCounter}">Category:</label>
                <input type="text" id="category-${orderIdCounter}" required>
                <label for="item-name-${orderIdCounter}">Item Name:</label>
                <input type="text" id="item-name-${orderIdCounter}" required>
                <label for="price-${orderIdCounter}">Price:</label>
                <input type="number" id="price-${orderIdCounter}" min="0" required>
                <label for="quantity-${orderIdCounter}">Quantity:</label>
                <input type="number" id="quantity-${orderIdCounter}" min="0" required>
                <label for="amount-${orderIdCounter}">Amount:</label>
                <input type="number" id="amount-${orderIdCounter}" readonly value="0">
            </div>
        `;

        // Insert the new order item into the order items container
        orderItemsContainer.insertAdjacentHTML("beforeend", orderItemTemplate);

        // Get references to the newly created fields
        const quantityField = document.getElementById(`quantity-${orderIdCounter}`);
        const priceField = document.getElementById(`price-${orderIdCounter}`);
        const amountField = document.getElementById(`amount-${orderIdCounter}`);

        // Event listeners for dynamically created fields
        quantityField.addEventListener("input", function () {
            console.log("Quantity changed");
            updateAmount(quantityField, priceField, amountField);
            updateTotalAmount();
        });

        priceField.addEventListener("input", function () {
            console.log("Price changed");
            updateAmount(quantityField, priceField, amountField);
            updateTotalAmount();
        });

        // Increment the counter for the next order
        orderIdCounter++;
    }

    // Event listener for the form submission
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Order submitted");
        submitOrder();
    });

    // Function to update the amount based on quantity and price
    function updateAmount(quantityField, priceField, amountField) {
        console.log("Updating amount");
        const quantity = parseInt(quantityField.value) || 0;
        const price = parseInt(priceField.value) || 0;
        const amount = quantity * price;
        amountField.value = amount;
    }

    // Function to update the total amount based on all order items
    function updateTotalAmount() {
        console.log("Updating total amount");
        let totalAmount = 0;
        document.querySelectorAll('[id^="amount-"]').forEach(function (item) {
            totalAmount += parseInt(item.value) || 0;
        });
        totalAmountField.value = totalAmount;
    }

    // Function to handle the submission of the order
    function submitOrder() {
        // Capture and save order details in an array
        const orderDetails = {
            orderId: document.getElementById("order-id").value,
            orderDate: document.getElementById("order-date").value,
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            contactNumber: document.getElementById("contact-number").value,
            address: document.getElementById("address").value,
            totalAmount: totalAmountField.value,
            orderedItems: []
        };

        // Loop through order items and add them to the orderDetails array
        document.querySelectorAll('[id^="category-"]').forEach(function (categoryField, index) {
            const itemNameField = document.getElementById(`item-name-${index + 1}`);
            const priceField = document.getElementById(`price-${index + 1}`);
            const quantityField = document.getElementById(`quantity-${index + 1}`);
            const amountField = document.getElementById(`amount-${index + 1}`);

            const orderedItem = {
                category: categoryField.value,
                itemName: itemNameField.value,
                price: priceField.value,
                quantity: quantityField.value,
                amount: amountField.value
            };

            orderDetails.orderedItems.push(orderedItem);
        });

        // Display a confirmation message
        alert(`Order placed successfully!\nTotal amount to be paid: ${orderDetails.totalAmount}`);

        // You can further process the orderDetails array as needed

        // For now, log the orderDetails to the console
        console.log(orderDetails);
    }
});

// do not delete the code given below, it is written to export the functions to be tested
module.exports = submitOrder;