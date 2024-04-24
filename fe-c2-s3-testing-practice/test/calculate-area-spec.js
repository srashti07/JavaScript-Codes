// Write test code here
const chai = require('chai');
const expect = chai.expect;
const {
    calculateAreaOfSquare,
    calculateAreaOfCircle,
    calculateAreaOfRectangle
} = require('../solution/calculate-area-solution');

describe('solution', function () {
    it('should have function `calculateAreaOfSquare()`', function () {
        expect(calculateAreaOfSquare).to.be.a('function');
    });

    it('should have function `calculateAreaOfCircle()`', function () {
        expect(calculateAreaOfCircle).to.be.a('function');
    });

    it('should have function `calculateAreaOfRectangle()`', function () {
        expect(calculateAreaOfRectangle).to.be.a('function');
    });
});

describe('Function calculateAreaOfSquare', function () {
    it('should return area of square for the valid input provided', function () {
        const area = calculateAreaOfSquare(7);
        expect(area).to.equal(49);
    });

    it('should return message insufficient input if less than 1 parameter is passed', function () {
        const result = calculateAreaOfSquare();
        expect(result).to.equal('Insufficient Input');
    });

    it('should return message invalid input type if the parameter is not a number', function () {
        const result = calculateAreaOfSquare('side');
        expect(result).to.equal('Invalid Input Type, Side Should Be A Number !!');
    });

    it('should return message incorrect input if the value of the parameter is less than or equal to 0', function () {
        const result = calculateAreaOfSquare(-5);
        expect(result).to.equal('Incorrect Input, Side Cannot Be Zero or Negative !!');
    });
});

describe('Function calculateAreaOfCircle', function () {
    it('should return area of circle for the valid input provided', function () {
        const result = calculateAreaOfCircle(7);

        
        expect(result).to.equal(153.86); 
    });

    it('should return message insufficient input if less than 1 parameter is passed', function () {
        const result = calculateAreaOfCircle();
        expect(result).to.equal('Insufficient Input');
    });

    it('should return message invalid input type if the parameter is not a number', function () {
        const result = calculateAreaOfCircle('radius');
        expect(result).to.equal('Invalid Input Type, Radius Should Be A Number !!');
    });

    it('should return message incorrect input if the value of the parameter is less than or equal to 0', function () {
        const result = calculateAreaOfCircle(-5);
        expect(result).to.equal('Incorrect Input, Radius Cannot Be Zero or Negative !!');
    });
});

describe('Function calculateAreaOfRectangle', function () {
    it('should return area of rectangle for the valid inputs provided', function () {
        const result = calculateAreaOfRectangle(4, 6);
        expect(result).to.equal(24);
    });

    it('should return message insufficient inputs if less than 2 parameters are passed', function () {
        const result = calculateAreaOfRectangle(5);
        expect(result).to.equal('Insufficient Inputs');
    });

    it('should return message invalid input types if the parameters are not of type numbers', function () {
        const result = calculateAreaOfRectangle('length', 'breadth');
        expect(result).to.equal('Invalid Input Types, Length and Breadth Should Be Numbers !!');
    });

    it('should return message incorrect input if the value of each of the parameters is less than or equal to 0', function () {
        const result = calculateAreaOfRectangle(-3, 8);
        expect(result).to.equal('Incorrect Input, Length and Breadth Cannot Be Zero or Negative !!');
    });
});