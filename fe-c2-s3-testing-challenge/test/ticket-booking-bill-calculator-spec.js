// Write test code here
const chai = require('chai');
const expect = chai.expect;
const{
    getPerTicketPriceBySeatType,
    getPerComboPrice,
    calculateTotalTicketAmount,
    calculateTotalComboAmount,
    calculateTotalBillAmount
} = require('../solution/ticket-booking-bill-calculator');

describe('Test for Existing Code',function(){

    it('getPerTicketPriceBySeatType should exist',function(){
        expect(getPerTicketPriceBySeatType).to.be.a('function');
    });
    it('getPerComboPrice should exist',function(){
        expect(getPerComboPrice).to.be.a('function');
    });
    it('calculateTotalTicketAmount should exist',function(){
        expect(calculateTotalTicketAmount).to.be.a('function');
    });
    it('calculateTotalComboAmount should exist',function(){
        expect(calculateTotalComboAmount).to.be.a('function');
    });
    it('calculateTotalBill should exist',function(){
        expect(calculateTotalBillAmount).to.be.a('function')
    });
});

describe('Function test with valid input',function(){

    it('getPerTicketPriceBySeatType should return price for gold seat',function(){
        expect(getPerTicketPriceBySeatType('Gold')).to.be.equal(6.0);
    });
    it('getPerComboPrice should return price for combo-1',function(){
        expect(getPerComboPrice('Combo-1')).to.be.equal(2.5);
    });
    it('calculateTotalTicketAmount should return total ticket amount for 2 Silver seats',function(){
        expect(calculateTotalTicketAmount('Silver',2)).to.be.equal(10.0);
    });
    it('calculateTotalComboAmount should return total amount for 3 Combo-2',function(){
        expect(calculateTotalComboAmount('Combo-2',3)).to.be.equal(13.50);
    });
    it('calculateTotalBillAmount should return total booking amount for 2 Platinum seats and 1 Combo-3',function(){
        expect(calculateTotalBillAmount('Platinum',2,'Combo-3',1)).to.be.equal(24.50);
    });
});

describe('Function Test with Invalid input and error message',function(){

    it('getPerTIcketPriceBySeatType should return error message Invalid Seat Type for invalid seat type value',function(){
        expect(getPerTicketPriceBySeatType('InvalidSeatType')).to.be.equal('Invalid Seat Type');
    });
    it('getPerComboPrice should return error message Invalid Combo Type for invalid combo type value',function(){
        expect(getPerComboPrice('InvalidComboType')).to.be.equal('Invalid Combo Type');
    });
    it('calculateTotalTicketAmount should return error message if ticket count is zero',function(){
        expect(calculateTotalTicketAmount('Gold',0)).to.be.equal('Incorrect Input, TicketCount cannot be Zero or Negative !!');
    });
    it('calculateTotalTicketAmount should return error message if seat type is invalid',function(){
        expect(calculateTotalTicketAmount('InvalidSeatType',1)).to.be.equal('Invalid Seat Type');
    });
    it('calculateTotalComboAmount should return error message if combo count is zero',function(){
        expect(calculateTotalComboAmount('Combo-1',0)).to.be.equal('Incorrect Input, ComboCount cannot be Zero or Negative !!');
    });
    it('calculateTotalComboAmount should return error message if combo type is invalid',function(){
        expect(calculateTotalComboAmount('InvalidComboType',1)).to.be.equal('Invalid Combo Type');
    });
    it('calculateTotalBillAmount should return error message if ticket count is negative',function(){
        expect(calculateTotalBillAmount('Silver',-1,'Combo-1',1)).to.be.equals('Incorrect Input, TicketCount and ComboCount cannot be Zero or Negative !!');
    });
    it('calculateTotalBillAmount should return error message if combo count is negative',function(){
        expect(calculateTotalBillAmount('Gold',2,'Combro-2',-1)).to.be.equal('Incorrect Input, TicketCount and ComboCount cannot be Zero or Negative !!');
    });
})