const recursion = require('../mocha-src/recursion');
const expect = require('chai').expect;

describe('factorial', function(){
  it('should return the factorial of argument', function(){
    expect(recursion.factorial(1)).to.equal(1);
    expect(recursion.factorial(2)).to.equal(2);
    expect(recursion.factorial(3)).to.equal(6);
    expect(recursion.factorial(4)).to.equal(24);
    expect(recursion.factorial(5)).to.equal(120);
  })
})

describe('fibonacci', function(){
  it('should return the nth fibonacci number', function(){
    expect(recursion.fibonacci(0)).to.equal(0);
    expect(recursion.fibonacci(1)).to.equal(1);
    expect(recursion.fibonacci(2)).to.equal(1);
    expect(recursion.fibonacci(3)).to.equal(2);
    expect(recursion.fibonacci(4)).to.equal(3);
    expect(recursion.fibonacci(5)).to.equal(5);
    expect(recursion.fibonacci(6)).to.equal(8);
    expect(recursion.fibonacci(7)).to.equal(13);
    expect(recursion.fibonacci(8)).to.equal(21);
    expect(recursion.fibonacci(9)).to.equal(34);
  })
})

describe('palindrome', function(){
  it('should return true if a string is a palindrome with odd number of letters', function(){
    expect(recursion.palindrome('qwertytrewq')).to.equal(true)
  })
  it('should return true if a string is a palindrome with even number of letters', function(){
    expect(recursion.palindrome('qwerttrewq')).to.equal(true)
  })
  it('should return false if a string is not a palindrome', function(){
    expect(recursion.palindrome('qwerttrew')).to.equal(false)
  })
})

describe('pascalsTriangle', function(){
  it('should return the pascal number of a given row and column', function(){
    expect(recursion.pascalsTriangle(0,0)).to.equal(1);
    expect(recursion.pascalsTriangle(1,0)).to.equal(1);
    expect(recursion.pascalsTriangle(1,1)).to.equal(1);
    expect(recursion.pascalsTriangle(2,0)).to.equal(1);
    expect(recursion.pascalsTriangle(2,1)).to.equal(2);
    expect(recursion.pascalsTriangle(2,2)).to.equal(1);
    expect(recursion.pascalsTriangle(3,0)).to.equal(1);
    expect(recursion.pascalsTriangle(3,1)).to.equal(3);
    expect(recursion.pascalsTriangle(3,2)).to.equal(3);
    expect(recursion.pascalsTriangle(3,3)).to.equal(1);
    expect(recursion.pascalsTriangle(4,0)).to.equal(1);
    expect(recursion.pascalsTriangle(4,1)).to.equal(4);
    expect(recursion.pascalsTriangle(4,2)).to.equal(6);
    expect(recursion.pascalsTriangle(4,3)).to.equal(4);
    expect(recursion.pascalsTriangle(4,4)).to.equal(1);
    expect(recursion.pascalsTriangle(5,0)).to.equal(1);
    expect(recursion.pascalsTriangle(5,1)).to.equal(5);
    expect(recursion.pascalsTriangle(5,2)).to.equal(10);
    expect(recursion.pascalsTriangle(5,3)).to.equal(10);
    expect(recursion.pascalsTriangle(5,4)).to.equal(5);
    expect(recursion.pascalsTriangle(5,5)).to.equal(1);

  })
})

describe('binToDec', function(){
  it('should convert binary to decimal', function(){
    expect(recursion.binToDec('0')).to.equal(0);
    expect(recursion.binToDec('1')).to.equal(1);
    expect(recursion.binToDec('10')).to.equal(2);
    expect(recursion.binToDec('11')).to.equal(3);
    expect(recursion.binToDec('100')).to.equal(4);
    expect(recursion.binToDec('110')).to.equal(6);
    expect(recursion.binToDec('111')).to.equal(7);
    expect(recursion.binToDec('011')).to.equal(3);
    expect(recursion.binToDec('001')).to.equal(1);
    expect(recursion.binToDec('101')).to.equal(5);
  })
})


describe('binarySearch', function(){
  it('should return the index of val if found', function(){
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 1)).to.equal(0);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 2)).to.equal(1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 3)).to.equal(2);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 4)).to.equal(3);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 5)).to.equal(4);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 6)).to.equal(5);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 7)).to.equal(6);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 8)).to.equal(7);
  })

  it('should return -1 of val is not found', function(){
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 10)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 20)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 30)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 40)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 50)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 60)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 70)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], 80)).to.equal(-1);

    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], -10)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], -20)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], -30)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], -40)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], -50)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], -60)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], -70)).to.equal(-1);
    expect(recursion.binarySearch([1,2,3,4,5,6,7,8], -80)).to.equal(-1);
  })

})
