let students =[
    {name : "kaviya", age : 20},
    {name : "dharani", age : 17},
    {name : "raja", age : 50},
    {name : "viji" , age : 40}
];

// let result = students.filter(student => student.age >= 20);
// console.log(result);

let result = students
        .filter(s => s.age>20)
       .map(s => s.name.toUpperCase() )
       .reduce((acc,name) => {
        acc.push(name);
        return acc;
       } , []);
console.log(result);