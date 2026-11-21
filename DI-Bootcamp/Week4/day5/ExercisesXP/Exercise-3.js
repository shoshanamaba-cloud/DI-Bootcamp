const users = { user1: 18273, user2: 92833, user3: 90315 };

const tuples = Object.entries(users);
console.log(tuples);

const doubledUsers = tuples.map(user => {
    return [user[0], user[1] * 2];
});

console.log(doubledUsers);