
firstName = 'John';
score = 100;
isPresent = true;

user1 = {
    firstName: 'John',
    score: 100,
    isPresent: true
}

user2 = {
    firstName: 'Joe',
    score: 90,
    isPresent: false
}

users = [user1, user2];

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
tens = [10, 20, 30, 40, 50, 60, 70, 80, 90];
hundreds = [100, 200, 300, 400, 500, 600, 700, 800, 900];

selectedUser = 0;
selectedItem = 'score';

console.log(users);

// bracket notation vs dot notation = same performance-wise

// access by bracket notation
console.log(users[1]); // selects the 2nd user (**first number is always zero)

// access by dot notation
console.log(users[0].firstName); // selects 1st user's first name
console.log(users[1].score); // selects 2nd user's score

// access by both bracket notation
console.log(users[0]['firstName']); // can also call the information by string name
console.log(users[1]['score']);