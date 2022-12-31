// Did everyone vote "yes" to the referendum?

var referendum = [
    {
        name: 'Mustafa',
        vote: 'yes'
    },
    {
        name: 'Bedirhan',
        vote: 'yes'
    },
    {
        name: 'Dilara',
        vote: 'yes'
    },
    {
        name: 'Şule',
        vote: 'no'
    }
];

var unanimity = referendum.every(function isThereUnamity(user){
    return user.vote == 'yes';
})

console.log(unanimity);