// for...in
let car = {};
car.age = 25;
car.complexion = "Dark"
for(let prop in car){
    console.log(prop);
    
}

//for...of
const iterable = [60,120,55,12]
for (let value of iterable){
value +=1;
console.log(value);
}