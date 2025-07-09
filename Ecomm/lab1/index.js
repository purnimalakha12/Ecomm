console.log("Hello World")
const arr1 = [1,2,3,4,5]
const arr2 = [11,22,33,44,55]
const mergedArray = [...arr1,...arr2]
console.log("merged array:", mergedArray)

const addFunc=(...values)=>{
    console.log("Values:",values)

    let sum=0;
    values.forEach(
        //callback function
        (ele, index)=>{
            sum+=ele
        }
    )
    return sum
}

let res=addFunc(5,6,35,74,85)
console.log("result:",res)
//map examples
const fruits=["apple","banana","lichi","mango"]
const capitalizedFruits =fruits.map(
    (ele, index)=>{
        return ele.toUpperCase()
    },
)

console.log("Upper case Fruits:",capitalizedFruits)

//object

const person ={
    name:"Lily",
    age:20,
    country:"USA"

}

//accessing object key value
//1.using dot notation
console.log("name=",person.name)
console.log("age=",person.age)
//2.bracket notation
console.log("name=",person["name"])
//updating object key value
person.name="John"
//person["age"=30]
console.log(person)
//deleting object key value pair
delete person.country
delete person["age"]
console.log(person)

//loop of key value pair
const apple={
    name:"apple",
    price:350,
    quantity:15
}

const keys= Object.keys(apple)
console.log("Keys:",keys)
const value= Object.value(apple)
console.log("Value:",value)
const entries=Object.entries(apple)
console.log("Entries:",entries)