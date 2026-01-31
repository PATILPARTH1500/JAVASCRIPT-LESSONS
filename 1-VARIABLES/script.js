// VARIABLES TO STORE OBJECTS
//VARIABLE DECLARATION TYPRES: var, let, const

//CONST
//CONST VARIABLES CANNOT BE RE-ASSIGNED
//BUT PROPERTIES OF CONST OBJECTS CAN BE MODIFIED
//CONST BLOCK SCOPE
const products = {
    title: "Laptop",
    price: 150000,
    description: "This is a gaming laptop",
    rating: 4.5,
    offer: "5% off"
}


const insta = {
    username: "parthpatil_2004",
    followers: 500,
    following: 300,
    posts: 100,
    bio: "Web Developer"
}

console.log(insta);


//LET
//LET VARIABLES CAN BE RE-ASSIGNED
//LET BLOCK SCOPE
let laptop = {
    title: "MacBook Pro",
    price: 200000,
    description: "This is a MacBook Pro laptop",
    rating: 4.8,
    offer: "10% off"
}

console.log(laptop);
laptop.price = 180000; //RE-ASSIGNING THE PRICE PROPERTY
console.log(laptop);

//VAR
//VAR VARIABLES CAN BE RE-ASSIGNED
//VAR FUNCTION SCOPE
var mobile = {
    title: "iPhone 13",
    price: 100000,
    description: "This is an iPhone 13",
    rating: 4.7,
    offer: "15% off"
}
console.log(mobile);

mobile.price = 90000; //RE-ASSIGNING THE PRICE PROPERTY
console.log(mobile);

//SUMMARY
//USE CONST WHEN YOU DON'T WANT TO RE-ASSIGN THE VARIABLE
//USE LET WHEN YOU WANT TO RE-ASSIGN THE VARIABLE
//AVOID USING VAR TO PREVENT SCOPE-RELATED ISSUES