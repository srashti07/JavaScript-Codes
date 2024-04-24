/*
Practice 4 - Parse JSON to Perform Aggregations
*/


// Declare and initialize variable to store the `flights` data.
// Copy flights data from `p3-submission.json` file created in Practice 3.
const flightsData= `{
    "flights": [
        {
            "from": "Chicago",
            "to": "NewYork"
        },
        {
            "departure-days":["M","Tu","W","Th","F"],
            "flightno":"DL551",
            "airlines":"Delta Airlines",
            "departure-time":"06:00:00",
            "arrival-time":"09:13:00",
            "stop overs": null,
            "isDirect": true,
            "departure-from":"ORD",
            "arrival-at":"LGA"
        },
        {
        "departure-days":["M","T","W","Th"],
        "flightno":"UA2202",
        "airlines":"United Airlines",
        "departure-time":"19:46:00",
        "arrival-time":"22:56:00",
        "stop overs": null,
        "isDirect": true,
        "departure-from":"ORD",
        "arrival-at":"EWR"
        },
        {
            "departure-days":["T","W","T"],
            "flightno":"UA265",
            "airlines":"United Airlines",
            "departure-time":"18:00:00",
            "arrival-time":"21:15:00",
            "stop overs": null,
            "isDirect": true,
            "departure-from":"ORD",
            "arrival-at":"LGA"
        },
        {
            "departure-days":"Th",
            "flightno":"AA1378",
            "airlines":"American Airlines",
            "departure-time":"11:21:00",
            "arrival-time":"14:30:00",
            "stop overs": null,
            "isDirect": true,
            "departure-from":"ORD",
            "arrival-at":"JFK"
        },
        {
            "departure-days":["M","Tu","W","Th","F"],
            "flightno":"DL556",
            "airlines":"Delta Airlines",
            "departure-time":"08:45:00",
            "arrival-time":"11:59:00",
            "stop overs": null,
            "isDirect": true,
            "departure-from":"ORD",
            "arrival-at":"LGA"
        },
        {
            "departure-days":"Tu",
            "flightno":"AA552",
            "airlines":"American Airlines",
            "departure-time":"18:23:00",
            "arrival-time":"21:32:00",
            "stop overs": null,
            "isDirect": true,
            "departure-from":"ORD",
            "arrival-at":"EWR"
        }
        
    ]
}`

// Convert JSON to JavaScript object

const flightsObject = JSON.parse(flightsData);


// Define function `searchFlights()` to filter and fetch flight details of flights flying from Chicago to New York by United Airlines.
// parameters will have to be added by the learner
function searchFlights(flights, fromCity, toCity, airlineName) {
    return flights.flights.filter(flight => flight.from === fromCity && flight.to === toCity)
                          .map(flight => {
                              return {
                                  from: flight.from,
                                  to: flight.to,
                                  flightOptions: flight.flightOptions.filter(option => option.airlines === airlineName)
                              };
                          });
}

// do not delete below code, it is written to make searchFlights() function exportable for testing purpose
module.exports = {
    searchFlights
};

    