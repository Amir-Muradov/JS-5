const names = [
    {
        name: 'Amir',
        gender: 'male'
    },
    {
        name: 'Emil',
        gender: 'male'
    },
    {
        name: 'Kanan',
        gender: 'male'
    },
    {
        name: 'Ravan',
        gender: 'male'
    },
    {
        name: 'Omar',
        gender: 'male'
    },
    {
        name: 'Narmin',
        gender: 'female'
    },
    {
        name: 'Fatima',
        gender: 'female'
    },
    {
        name: 'Aysel',
        gender: 'female'
    },
    {
        name: 'Sofia',
        gender: 'female'
    },
    {
        name: 'Sabina',
        gender: 'female'
    }
];
const surnames = [
    'Muradov',
    'Ismayilov',
    'Abbasov',
    'Musayev',
    'Gasanov',
]
const randomPerson = names[Math.floor(Math.random() * names.length)];
const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
let fullName = randomPerson.name + ' ' + randomSurname;
if (randomPerson.gender == 'female') {
    fullName += 'a';
}
const result = {
    "Porson's Name": fullName
};
console.log(result);