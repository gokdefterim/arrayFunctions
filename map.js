// We create new arrays by using map method.

var users = [
    {
        name: 'Mustafa',
        surname: 'Kalfa',
        age: 25
    },
    {
        name: 'Bedirhan',
        surname: 'Kara',
        age: 25
    }
];

var date = new Date();

var newVersion = users.map(user => {
    return {
        fullName: user.name + ' ' + user.surname,
        yearOfBirth: date.getFullYear() - user.age
    }
})