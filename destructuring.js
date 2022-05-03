const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
// tesla, mercedes


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output = name doesnt connect to anything, byt otherName = elon
console.log(name);
console.log(otherName);





const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output= no errors, i think
console.log(password);
console.log(hashedPassword);
// nvm there is no "password" in the obj of person





const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output I do not know but I think it will be good
console.log(first == second);
console.log(first == third);
// perf





const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output I dont think linw 57 will work
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// nvm... key stays as value






