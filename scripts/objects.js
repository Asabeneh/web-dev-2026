console.log('This is the Objects file')

const user = {
    username:'Asab',
    email:'asab@example.com',
    password:'123123123',
    loggedIn:false,
    createdAt: '16/03/2026 17:43',
    'tel phone': '122345689'
}

console.log(user.username)
console.log(user.email)
console.log(user.password)
console.log(user.loggedIn)
console.log(user.createdAt)
console.log(user['tel phone'])

user.gender = 'Male'
console.log(user)
const keys = Object.keys(user)
console.log('Keys:', keys)

const values = Object.values(user)

console.log('values:', values)
const entries = Object.entries(user)
console.log('entries:', entries)
console.log(user.hasOwnProperty('age'))
console.log(user.hasOwnProperty('email'))

delete user['tel phone']
console.log(user)

console.log()
for (let entry of entries) {
    console.log(entry)
}

// for (let key in user){
//     console.log('key:', key)
// }





const users = [
    {
    username:'Asab',
    email:'asab@example.com',
    password:'123123123',
    loggedIn:false,
    createdAt: '16/03/2026 17:43'
},
{
    username:'John',
    email:'john@example.com',
    password:'123123123',
    loggedIn:true,
    createdAt: '16/03/2026 16:43'
},
{
    username:'marta',
    email:'marta@example.com',
    password:'123123123',
    loggedIn:false,
    createdAt: '16/03/2026 14:43'
}
] 

for (let user of users) {
    console.log(user, user.username, user.email)
}

