var users = [
    {   
        id: 8,
        name: 'Mustafa',
        surname: 'Kalfa',
        age: 25
    },
    {
        id: 1,
        name: 'Bedirhan',
        surname: 'Kara',
        age: 25
    }
];

var numberOne = users.find(function getSomeoneById(user){
    return user.id == 1;
});

console.log(numberOne.name);