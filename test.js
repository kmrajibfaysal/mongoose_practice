const database = [
    {
        username: 'faysal',
        password: 'rajibfaysal',
    },
];

const newsFeed = [
    {
        username: 'Isaac',
        timeline: 'So tired for all this learning',
    },
    {
        username: 'Natalia ',
        timeline: 'python is so cool!',
    },
];

// eslint-disable-next-line no-undef
const userNamePrompt = prompt("What's your username?");
// eslint-disable-next-line no-undef
const passwordPrompt = prompt("What's your password?");
function signIn(user, pass) {
    if (user !== database[0].username && pass !== database[0].password) {
        console.log('wrong username or password!');
    } else {
        console.log(newsFeed);
    }
}

signIn(userNamePrompt, passwordPrompt);
