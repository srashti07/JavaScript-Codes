//Find the discounted price for non-premium products using arrow functions
//Pass the products as parameter to the function
function calculateDiscountedPrice(products) {
    // Filter non-premium products (price < $300) using the filter method
    const nonPremiumProducts = products.filter(product => product.price <= 300);

    // Apply a 10% discount on non-premium products using the map method
    const discountedProducts = nonPremiumProducts.map(product => {
        const discountedPrice = product.price * 0.9; // Applying a 10% discount
        return { productName: product.productName, price: discountedPrice };
    });

    return discountedProducts;
}

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    calculateDiscountedPrice
}
