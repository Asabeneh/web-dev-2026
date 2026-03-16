const nordicCountries = ['Finalnd','Sweden','Norway','Denmark','Iceland']
// console.log(nordicCountries)
// console.log(nordicCountries[0])
// console.log(nordicCountries[1])

let [fin, swe, ...rest] = nordicCountries
console.log(fin,swe, rest)

const nums = [1, 2, 3]
let [one, two, three, four] = nums 
console.log(one)
console.log(four)


const rectangle = {
    width: 20,
    length: 100
}

const {width:w, length:l} = rectangle

const area = w * l
console.log(area)

const user = {
    username:'Asab',
    email:'asab@example.com',
    password:'123123123',
    loggedIn:false,
    createdAt: '16/03/2026 17:43',
    'tel phone': '122345689'
}

let {username, email, password} = user 

console.log(username, email, password)
