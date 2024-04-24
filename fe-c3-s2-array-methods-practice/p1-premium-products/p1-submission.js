

//filter premium products from the products passed as parameter using arrow functions
function filterProducts(products) {
    const premiumProducts = [];
    
    // Loop through the products array and filter premium products (price > $300)
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > 300) {
            premiumProducts.push(products[i]);
        }
    }
    
    return premiumProducts;
}

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    filterProducts
}