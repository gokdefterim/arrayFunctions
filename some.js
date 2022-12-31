// Let's check if there is an adult one in the array.
// The some() method returns true (and stops) if the function returns true for one of the array elements.

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
    },
    {
        name: 'Şule',
        surname: 'Aydın',
        age: 12
    },
    {
        name: 'Zeynep',
        surname: 'Müştak',
        age: 19
    },
    {
        name: 'Dilara',
        surname: 'Hekimoğlu',
        age: 17
    }
];

var isThereAdultOne = users.some(function checkAdult(user){
    return user.age > 18;
});

console.log(isThereAdultOne);