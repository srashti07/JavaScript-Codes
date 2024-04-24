// Reuse the solution created to dynamically create order form fields developed 
// in the previous sprint challenge

// const { default: axios } = require("axios");


// Define function submitOrder to save the order details captured from the form 
// in json-server using Axios API

// Note:: As per test requirement, Order API should be running on port 3002

// The function should display the text `Total amount to be paid: $<value of total amount>` 
// after the details are successfully stored at the server
const ORDERS_LIST={
    orders:[]
}
let itemsList = [];
window.addEventListener("load",()=>{
    const orderUrl = 'http://localhost:3002/order';
    document.getElementById("order-now").disabled=true
    document.getElementById("total-amount").value=0
})
// Write solution code here to dynamically add the form fields 
function addOrder(e) {
    e.preventDefault();
    const orderDetails = document.getElementById("order-details-input-area");
    const newRow = document.createElement("tr");
    const categoryName =document.createElement("input");
    categoryName.setAttribute('type','text')
    categoryName.setAttribute('class','form-control border-0')
    categoryName.setAttribute('id','category-name')
    categoryName.required=true
    const td1 = document.createElement("td")
    td1.appendChild(categoryName)
    const itemName =document.createElement("input");
    itemName.setAttribute('type','text')
    itemName.setAttribute('class','form-control border-0')
    itemName.setAttribute('id','item-name')
    itemName.required=true
    const td2 = document.createElement("td")
    td2.appendChild(itemName)
    const price =document.createElement("input");
    price.setAttribute('type','text')
    price.setAttribute('class','form-control border-0')
    price.setAttribute('id','price')
    price.required=true
    price.value=0
    const td3 = document.createElement("td")
    td3.appendChild(price)
    const quantity =document.createElement("input");
    quantity.setAttribute('type','text')
    quantity.setAttribute('class','form-control border-0')
    quantity.setAttribute('id','quantity')
    quantity.required=true
    quantity.value=0
    const td4 = document.createElement("td")
    td4.appendChild(quantity)
    const amountInput =document.createElement("input");
    amountInput.setAttribute('type','text')
    amountInput.setAttribute('class','form-control border-0')
    amountInput.setAttribute('id','amount')
    amountInput.disabled=true
    amountInput.value = 0
    const td5 = document.createElement("td")
    td5.appendChild(amountInput)
    const addButton = document.createElement(  "button"  );
    addButton.setAttribute('type','button')
    addButton.setAttribute('id','item-add-btn')
    addButton.setAttribute('onclick','add(event)')
    addButton.setAttribute('class','btn btn-outline-success rounded-5')
    addButton.innerText = "Add"    
    const td6 = document.createElement("td")
    td6.appendChild(addButton)
    newRow.appendChild( td1 );
    newRow.appendChild( td2 );
    newRow.appendChild( td3 );
    newRow.appendChild( td4 );
    newRow.appendChild( td5 );
    newRow.appendChild( td6 );
    orderDetails.appendChild(newRow);
    e.target.disabled=true;
    document.getElementById("order-now").disabled=true

  }
// define funtion submitOrder() to save the order details on clicking the submit button
function submitOrder(e){
    e.preventDefault();
    const orderUrl = 'http://localhost:3002/order';
    const orderFormInputs = document.getElementsByName("form-inputs")
    const  totalOrderAmount = getTotalAmount(itemsList);

    const newOrder={
        orderID: orderFormInputs[0].value,
        customerName: orderFormInputs[1].value,
        emailId: orderFormInputs[2].value,
        contactNumber: orderFormInputs[3].value,
        orderDate: String( orderFormInputs[4].value ),
        address: orderFormInputs[5].value,
        orderItemDetails:[...itemsList],
        totalAmount: totalOrderAmount,
    }     
    axios.post(orderUrl,newOrder)
    .then(res =>{
        e.preventDefault()
        const message = `Total amount to be paid: $${res.data.totalAmount}`;
        document.getElementById("message-ordered").innerHTML= message;         
        console.log("posted");

     })
     .catch(err =>{
        console.log(err)
     })
    ORDERS_LIST.orders.push( newOrder )
    document.getElementById("total-amount").value = totalOrderAmount
}
function add(e){
    const row = e.target.parentNode.parentNode
    const itemIputs = row.getElementsByTagName("input")
    e.target.disabled=true
    
    for( const input of itemIputs ){
        input.readOnly = true
    }   
    const ORDER_ITEM = {
        categoryName:itemIputs[0].value,
        itemName:itemIputs[1].value,
        price: Number(itemIputs[2].value) ,
        quantity:Number( itemIputs[3].value),
        amount:   Number( itemIputs[2].value) * Number( itemIputs[3].value)
    }
    itemsList.push( ORDER_ITEM );
    itemIputs[4].value =  Number( itemIputs[2].value) * Number( itemIputs[3].value)
    document.getElementById("total-amount").value = getTotalAmount( itemsList );
    document.getElementById( "add-order" ).disabled=false
    const orderNow = document.getElementById("order-now")
    
    if( orderNow.disabled == true ){
        orderNow.disabled =  false
    }

}
function  getTotalAmount(arrayOfOrders){

    let totalAmount=0;
    for( const item  of  arrayOfOrders){
        totalAmount += Number(item.amount )
    }
    return totalAmount;
}
const  isNotEmpty= ( itemList  )=>{
    for( const item  of itemList ){
        if( item.value ==="" ||  item.value == undefined){
            return false;
        }
    }
    return true;
} 
// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    submitOrder,
    getTotalAmount,
    isNotEmpty,
    add,
}


