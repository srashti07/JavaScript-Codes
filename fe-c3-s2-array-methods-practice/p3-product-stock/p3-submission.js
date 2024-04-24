

//Find the inventory of each product type using arrow functions
//Pass the products as parameter to the function
function findProductInventory(products) {
    const inventory = products.reduce((acc, product) => {
        // Checking if the productName already exists in the accumulator
        const existingProduct = acc.find(item => item.productName === product.productName);

        if (existingProduct) {
            // Incrementing stock count if the product exists in the accumulator
            existingProduct.stock++;
        } else {
            // Adding a new entry to the accumulator if the product doesn't exist
            acc.push({ productName: product.productName, stock: 1 });
        }

        return acc;
    }, []);

    return inventory;
}

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    findProductInventory
}