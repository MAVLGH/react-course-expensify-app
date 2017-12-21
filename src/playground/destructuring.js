// OBJECT DESTRUCTURING


// const person = {
//     name: 'Mario',
//     age: 25,
//     location: {
//         city: 'Santiago',
//         temp: 24
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',
//         address: 'Monkey Street'
//     }
// };
// const {name: publisherName = 'self-published'} = book.publisher
// console.log(publisherName);

// ARRAY DESTRUCTURING

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [,city , state='No State'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (Hot)', '$2.00', '$2.25', '$2.75']
const [name,,medium] = item
console.log(`A medium ${name} costs ${medium}`);