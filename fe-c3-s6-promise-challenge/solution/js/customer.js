//Write  password validation code here 
function setPasswordConfirmValidity() {
  const pass = document.getElementById("custPasword")
  const passConfirm = document.getElementById("custConfirmPassword")
  if (pass.value === passConfirm.value) {
    return true;
  }
  else {
    return false;
  }
}
//Using axios POST to save the customer details 
// Note:As per test requirement, Customer API should be running on port 3001
function submitCustomerDetail(event) {
  customerUrl = 'http://localhost:3001/customers';
  const myForm = document.getElementsByName("formInput")
  const customerDetails = {
    customerID: Number(myForm[0].value),
    customerName: myForm[1].value,
    password: myForm[2].value,
    customerEmail: myForm[4].value,
    contactNumber: myForm[5].value,
    address: myForm[6].value,
  }
  if (setPasswordConfirmValidity()) {
    axios.post(customerUrl, customerDetails)
      .then(res => {
        document.getElementById("message-success").innerHTML = 'You have successfully registered !'
      })
      .catch(err => {
        console.log("successful post");
      })
  }
  else {
    alert("password does not match")
  }
}
// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
  setPasswordConfirmValidity,
  submitCustomerDetail
}



