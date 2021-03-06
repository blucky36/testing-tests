let factorial,fibonacci,palindrome,pascalsTriangle,binToDec,binarySearch

exports.factorial =  factorial = (n) => n === 1 ? 1 : n * factorial(n-1)

exports.fibonacci = fibonacci = (n) => n === 0 ? 0 : n === 1 ? 1 : fibonacci(n-1) + fibonacci(n-2)


exports.palindrome = palindrome = (str) => str.length <= 1 ? true : str[0] === str[str.length - 1] ? palindrome(str.slice(1,str.length-1)) : false


exports.pascalsTriangle = pascalsTriangle = (row, col) => row===0?1:row===1?1:col===0?1:col===row?1:pascalsTriangle(row-1,col-1)+pascalsTriangle(row-1,col)


exports.binToDec = binToDec = (stringOfBinary) => stringOfBinary.length===0 ? 0 : parseInt(stringOfBinary[0]) * Math.pow(2, stringOfBinary.length-1) + binToDec(stringOfBinary.slice(1))

exports.binarySearch = binarySearch = (arr, val, left = 0, right = arr.length - 1) => arr[left] === val ? left : left === right ? -1 : binarySearch(arr,val,left+1,right)
