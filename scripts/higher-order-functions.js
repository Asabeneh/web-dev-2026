/*

map
filter
reduce
every
some
find
findIndex


*/

console.log('countries in HOF file', countries)
const nums = [1, 2, 3, 4] // [1, 4, 9, 16]

const newArr = []

for (let i = 0; i < nums.length; i++) {
    let squared = nums[i] ** 2
    newArr.push(squared)
}
console.log(newArr)

const squaredNumbers = nums.map((item) => item * item)
console.log(squaredNumbers)

/* function makeSquare (n) {
    return n * n 
}

console.log(makeSquare(10)) */

// const makeSquare  = (n) =>  {
//     return n * n 
// }

const makeSquare = (n) => n * n


console.log(makeSquare(10))

const addTwoNums = (a, b) => a + b

const countryCodes = countries.map((country) => country.toUpperCase().slice(0, 3))
console.log(countryCodes)
const countrisWithLand = countries.filter((country) => country.includes('land'))
console.log(countrisWithLand)

// function filterCountryByPattern (pattern) {
//     return countries.filter((country) => country.includes(pattern))
// }

const filterCountryByPattern = (pattern) => countries.filter((country) => country.includes(pattern))
console.log(filterCountryByPattern('South'))

const numbers = [0, 5, 25, -2, 3, 15, 8, 6]

// filter even numbers

/* function filterEvenNumbers(arr) {
    const evens = []

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i]
        if (number % 2 === 0) {
            evens.push(number)
        }
    }
    return evens
}

console.log(filterEvenNumbers(numbers)) */

/*  function filterEvenNumbers(arr) {
    const evens = []
    for (let number of arr) {
        if (number % 2 === 0) {
            evens.push(number)
        }
    }
    return evens
}

console.log(filterEvenNumbers(numbers))  */

const evens = numbers.filter((number) => number % 2 == 0)
console.log(evens)



// let sum = 0
// for (let num of numbers) {
//     console.log( num)
//     sum = sum + num
// }
// console.log(sum)

// reduce 

const total = numbers.reduce((acc, cur) => acc + cur, 100)
console.log(total)


// every, some

// const areEvens = numbers.every((number) => number % 2 == 0)
// console.log(areEvens)

const areEvens = numbers.some((number) => number % 2 == 0)
console.log(areEvens)
const areAllCountriesLong = countries.every(c => c.length > 5)
console.log(areAllCountriesLong)

console.log(countries.filter(c => c.length <= 5))

console.log(countries.find((item) => item.includes('Solomon')))

const itemIndex = countries.findIndex((item) => item.includes('Solomon'))
console.log(itemIndex)