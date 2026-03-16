console.log('love people!')
console.log('Hello world!')
console.log('The sum is ', 1 + 2)
console.log('The difference is ', 2 - 1)
console.log('The product is', 2 * 3)
console.log('The division', 4 / 2)
console.log('The remainder', 7 % 3)
console.log('The remainder', 9 % 5)
console.log('The exponential', 2 * 2 * 2 * 2, 2 ** 4)

// double slash are a comment in JavaScript

// these are JavaScript variables

// variables store data

let a = 1
let b = 2
let c = a + b
console.log('The sum is ', c)

let pi = 3.14
let gravity = 9.81
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let age = 21
let height = 1.72
let mass = 75


let weight = mass * gravity
console.log('The weight of the person ', weight)

let bmi = mass / height ** 2

console.log('The bmi of the person', bmi.toFixed(2))
console.log('The bmi of the person', bmi.toPrecision(5))


// Operators: = assignment operator

let n = 3
let m = 4

// Comparison operators
console.log(`Going to be true: ${m} > ${n}`, m > n)
console.log(`Going to be false: ${m} < ${n}`, m < n)
console.log(4 <= 3)
console.log(3 >= 4)
console.log(4 != 4)
console.log(4 == '4')
console.log(4 === '4')
console.log(4 === 4)

// Logical operators &&, ||, !
console.log(4 > 3 && 3 < 4)
console.log(4 > 3 && 3 > 4)

console.log(4 > 3 || 3 < 4)
console.log(4 > 3 || 3 > 4)
console.log(4 < 3 || 3 > 4)
console.log(!(4 < 3 || 3 > 4))
console.log(!true)
console.log(!false)


/*
Conditionals

*/

let isRaining = false
if (isRaining) {
    console.log('Take an umbrella')
} else {
    console.log('Go out freely')
}

let num = 'xdkdkd'

if (num > 0) {
    console.log('The number is positive')
} else if (n == 0) {
    console.log('The number is zero')
} else if (n < 0) {
    console.log('The number is negative')
} else {
    console.log('The value is not a number')
}

/*     let weather = prompt('What is the weahter? ').toLowerCase()
    if (weather == 'rainy'){
        console.log('Take an umbrella')
    } else if (weather == 'cloudy') {
        console.log('It may rain')
    } else if (weather  == 'foggy') {
        console.log('There might be visibility issue')
    } else if (weather == 'snowy') {
        console.log('It may be slippery')
    } else if (weather == 'sunny') {
        console.log('It will be shinny day')
    } else {
        console.log('No knows the weather')
    } */

/* 
    
    let weather = prompt('What is the weahter? ').toLowerCase()
 
    switch(weather) {
    case 'rainy':
         console.log('Take an umbrella')
         break
    case 'cloudy':
        console.log('It may rain')
        break
    case 'foggy':
        console.log('There might be visibility issue')
        break
    case 'snowy':
        console.log('It may be slippery')
        break
    case 'sunny':
        console.log('It will be shinny day')
        break
    default:
        console.log('No knows the weather')
 
    } */


/*
 
Number - int, floats
Strings : anything under a sigle, double or back tick.
Booleans: True or False
Array
 
 
*/

// Numbers
console.log(10)
console.log(9.81)

let temperature = 37


// Strings
// any data under a single, double quote or under tick

console.log('Finland')
console.log('Asabeneh')
console.log('100')
console.log("JavaScript")
console.log(`I love people`)
console.log(`The patient body temperature is ${temperature} degree celcius.`)

// Booleans: true or false

console.log('Finland'.includes('land'))
console.log(1 > 0)
console.log('cat' > 'dog')

let nums = [1, 2, 3]
console.log(nums)
console.log(nums.length)
console.log(nums[0])
console.log(nums[1])
console.log(nums[2])
let last_index = nums.length - 1
console.log(nums[last_index])

let shoppingList = ['Milk', 'Potatoes', 'Coffee', 'Tea', 'Sugar']
console.log(shoppingList)

shoppingList.push('Meat')
shoppingList.push('Mango')
console.log(shoppingList)

shoppingList.splice(1, 0, 'Carrot', 'Onion', 'Tomatoes')
console.log(shoppingList)
shoppingList.forEach((item, index) => {
    console.log(item.toUpperCase(), index)
})
shoppingList.splice(0, 0, 'Avocado')
console.log(shoppingList)
shoppingList.pop()
console.log(shoppingList)
shoppingList.unshift('Apple')

console.log('Where are we?', shoppingList)
shoppingList.shift()
console.log(shoppingList)
/* array methods: 
arr.length
arr.push
arr.splice
arr. unshift
arr.shift
arr.forEach
*/


/*
 
Strings Methods
*/

console.log('Cat')
console.log('Cat'.length)
console.log('Cat'.toLowerCase())
console.log('Cat'.toUpperCase())
console.log('Cat'.endsWith('t'))
console.log('Cat'.startsWith('C'))
console.log('Cat'.indexOf('a'))
console.log('Cat'.charAt(1))
console.log('Copy cat'.includes('cat'))

/*
Loops
 
regular for loop
for of
for in 
while 
do while
 
*/

/* console.log('Before the loop')
for ( let i = 0; i < 61; i+=10) {
    console.log(i)
}
 
console.log('After the loop')
console.log('Countries data:', countries)
 
for (let i = 0; i < countries.length; i++){
    console.log(countries[i], countries[i].toUpperCase(), countries[i].toUpperCase().slice(0, 3))
} */

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
console.log(countries.length) // 5

for (let i = 0; i < countries.length; i++) {
    console.log(i, countries[i], countries[i].toUpperCase(), countries[i].toUpperCase().slice(0, 3))
}

for (let country of countries) {
    console.log(country, country.toUpperCase(), country.toUpperCase().slice(0, 3))
}

countries.forEach((country, index) => {
    console.log(index, country, country.toUpperCase())
})

console.log('Break:')
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('way')) {
        break
    }
    console.log(countries[i])
}

console.log('Continue:')

for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')) {
        continue
    }
    console.log(countries[i])
}

/*
Function is a block of code that perform a certain task
 
*/

function doSomething(txt) {
    console.log(`I am ${txt}.`)
}

doSomething('teaching')
doSomething('learning')
doSomething('playing')

/*
 
addTwoNums, it should take a and b as input
and it should print out the sum of the two numbers.
 
*/
function addTwoNums(a, b) {
    console.log(a + b)
}

addTwoNums(1, 2)
addTwoNums(1, 9)

/*
make a function, its is makeSqare and it one input and it prints the square of the number
*/

function makeSqare(n) {
    console.log(n * n)
}

console.log(makeSqare(10))

const numbers = [1, 2, 3, 4, 5, 6]


function sumArrayNumbers(arr) {
    let total = 0

    for (let number of arr) {
        total = total + number
    }
    return total

}
console.log(sumArrayNumbers(numbers))
console.log(sumArrayNumbers([10, 20, 90, -100]))
console.log(sumArrayNumbers([1, 2, 3]))

function getCountryCode(arr) {
    let newArr = []
    for (let item of arr) {
        let countryCode = item.toUpperCase().slice(0, 3)
        newArr.push(countryCode)
    }
    return newArr
}

console.log(getCountryCode(countries))

/*

filterCountriesWithLand, it takes all the countries as input and it filter out the countries with a substring land as an array

['Finland','Switherland','Poland','Iceland', '']

*/

function filterCountriesWithLand(arr) {
    let newArr = []
    for (let country of arr) {
        if (country.includes('land')) {
            newArr.push(country)
        }
    }
    return newArr
}

console.log(filterCountriesWithLand(countries))
console.log(filterCountriesWithLand(countriesList))

function filterCountriesWithStartingLetter(arr, letter) {
    let newArr = []
    for (let country of arr) {
        if (country.startsWith(letter)) {
            newArr.push(country)
        }
    }
    return newArr
}

console.log(filterCountriesWithStartingLetter(countriesList, 'F'))
console.log(filterCountriesWithStartingLetter(countriesList, 'H'))