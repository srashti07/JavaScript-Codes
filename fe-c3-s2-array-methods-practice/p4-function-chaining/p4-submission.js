
//Find the inventory of each non-premium product using function chaining
//Pass the products as a parameter to the function
function findInventoryUsingFunctionChaining(products) {
    const inventory = products
        .filter(product => product.price <= 300) // Filtering non-premium products
        .reduce((acc, { productName }) => {
            // Calculating stock count for each non-premium product
            acc[productName] = (acc[productName] || 0) + 1;
            return acc;
        }, {});

    const inventoryDetails = Object.keys(inventory).map(productName => ({
        productName,
        stock: inventory[productName]
    }));

    return inventoryDetails;
}

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    findInventoryUsingFunctionChaining
}