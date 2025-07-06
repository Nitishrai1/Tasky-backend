const fs = require('fs');
const { faker } = require('@faker-js/faker');

const users = [];

for (let i = 0; i < 800; i++) {
    users.push({
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(), // You can hash this if needed
        todos: [],
       
    });
}


fs.writeFileSync('seed/users.json', JSON.stringify(users, null, 2));

console.log('800 users generated successfully!');
