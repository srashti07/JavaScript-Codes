// Task 1 - Create JSON data

const deliveries = [
    {
        "deliveredBy": "Emma Smith",
        "orderNumber": 434324,
        "customerName": "Camila Garcia",
        "phoneNumbers": "+12052345876",
        "customerAddress": {
            "streetNo": "252a",
            "streetName": "Hale Hall",
            "city": "Huntsville",
            "state": "Alabama"
        },
        "tipAmount": 10,
        "customerRating": 4.5,
        "outletRating": 3
    },
    {
        "deliveredBy": "Emma Smith",
        "orderNumber": 665324,
        "customerName": "Ella Rodriguez",
        "phoneNumbers": "+12052345310",
        "customerAddress": {
            "streetNo": "253a",
            "streetName": "Cooper Hill",
            "city": "Huntsville",
            "state": "Alabama"
        },
        "tipAmount": 15,
        "customerRating": 5,
        "outletRating": 4
    },
    {
        "deliveredBy": "Richard Jones",
        "orderNumber": 458899,
        "customerName": "Gary Thomas",
        "phoneNumbers": "+12652349712",
        "customerAddress": {
            "streetNo": "112c",
            "streetName": "Baxter Parkway",
            "city": "San Jose",
            "state": "California"
        },
        "tipAmount": 5,
        "customerRating": 3,
        "outletRating": 3
    },
    {
        "deliveredBy": "Richard Jones",
        "orderNumber": 620899,
        "customerName": "Violet Clark",
        "phoneNumbers": "+13152119733",
        "customerAddress": {
            "streetNo": "112d",
            "streetName": "Ridgeway Paddock",
            "city": "San Jose",
            "state": "California"
        },
        "tipAmount": 5,
        "customerRating": 3.5,
        "outletRating": 4
    },
    {
        "deliveredBy": "Richard Jones",
        "orderNumber": 886210,
        "customerName": "Gianna Miller",
        "phoneNumbers": "+12752322396",
        "customerAddress": {
            "streetNo": "607a",
            "streetName": "Eastern Passage",
            "city": "Boston",
            "state": "Massachusetts"
        },
        "tipAmount": 15,
        "customerRating": 5,
        "outletRating": 4.5
    }
];


// Task 2 - Convert JSON to JavaScript Object

const deliveryObject = JSON.parse(JSON.stringify(deliveries));

// Task 3 - No. of orders delivered by a delivery person in a particular city

function countDeliveries(deliveryData, deliveryPerson, city) {
    return deliveryData.filter(delivery => delivery.deliveredBy === deliveryPerson && delivery.customerAddress.city === city).length;
}

// Task 4 - Total tip amount earned by a delivery person

function calculateTotalTipAmount(deliveryData, deliveryPerson) {
    return deliveryData.reduce((totalTip, delivery) => {
        if (delivery.deliveredBy === deliveryPerson) {
            return totalTip + delivery.tipAmount;
        }
        return totalTip;
    }, 0);
}

// Task 5 - Delivery wise customer and outlet ratings for a delivery person

function getDeliveryWiseRatings(deliveryData, deliveryPerson) {
    return deliveryData
        .filter(delivery => delivery.deliveredBy === deliveryPerson)
        .map(({ orderNumber, customerName, customerRating, outletRating }) => ({
            orderNumber,
            customerName,
            customerRating,
            outletRating
        }));
}

// Task 6 - Based on Customer and outlet Rating, calculate average rating for each delivery person. 
//          Modify the JSON and include the average rating 

function calculateAverageRating(deliveryData) {
    return JSON.stringify(deliveryData.map(delivery => ({
        ...delivery,
        averageRating: parseFloat(((delivery.customerRating + delivery.outletRating) / 2).toFixed(2))
    })));
}

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    countDeliveries,
    calculateTotalTipAmount,
    getDeliveryWiseRatings,
    calculateAverageRating
}