//object literal
let myFirstObject = {
    myFirstStringProperty: 'My property value',
    myFirstFloatProperty: 45.59,
    myFunction: function () {
        return this.myFirstFloatProperty / 2
    },
    add: (a, b) => a + b
};

// console.log(myFirstObject);
// console.log(myFirstObject.myFirstStringProperty);
// console.log(myFirstObject.myFirstFloatProperty);
// console.log(myFirstObject.myFunction);
// console.log(myFirstObject.add);

// let person = {
//     firstName: 'Stephen',
//     lastName: 'Carter'
// }

// let person2 = {
//     firstName: 'Chris',
//     lastName: 'Cusack'
// }


let Person = function (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dob;
    this.age = function () {
        let now = new Date();
        let years = now.getFullYear() - this.dateOfBirth.getFullYear();

        if (now.getMonth() < this.dateOfBirth.getMonth() || now.getMonth == this.dateOfBirth.getMonth() && now.getDay() < this.dateOfBirth.getDay()) {
            years -= 1;
        }
        return years;
    };

    this.toString = function () {
        return `Name: ${this.firstName} ${this.lastName} Age: ${this.age()}`;
    };
};
let people = [];

let person = new Person('Stephen', 'Carter', new Date(1972, 11, 22));
let anotherPerson = new Person('Kreg', 'Bhentli', new Date(1999, 12, 31));
let lastPerson = new Person('Bob', 'Barker', new Date(1925, 3, 5));

people.push(person);
people.push(anotherPerson);
people.push(lastPerson);

// console.log(person.toString());
console.log('n\Print all people');

people.forEach(p => console.log(p.toString()));

console.log('\nQuery last name');


//Filter always returns an array
let query = people.filter(function (p) {
    return p.lastName == 'Carter';
});

query.forEach(p => console.log(p.toString()));

console.log('\nQuery by first and last name');


let findStephen = people.filter(p => p.firstName == 'Stephen' && p.lastName == 'Carter');

if (findStephen.length > 0) {
    console.log('\nRecord found:')
    console.log(findStephen[0].toString());
} else {
    console.log('\nRecord not found');
}

