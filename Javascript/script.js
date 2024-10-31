

function getName(name) {
    return name;
}

// let a = true;
let a = false;
let b = true;  // true  // if b is false then ans is false


// in case of && ---> if a is true then only it checks for b 
// if a is false then it will not check for b and return false

console.log(a && b);

console.log(a || getName("Divyanka Pagare"));

//-----------------------------------------------------------------------

//Template Literals

let name1 = "Ritesh";
let name2 = "Girase";

console.log(name1 + " " + name2 + ", ", `${name1} ${name2}`);


//-----------------------------------------------------------------------


let showRecipeOne = true;

function getRecipeOneName(rName) {
    return rName;
}

function getRecipeTwoName(rName) {
    return rName;
}

//if showRecipeOne is true then it return if statement (Pizza) otherwise return else part 

if(showRecipeOne) {
    console.log(getRecipeOneName("Pizza"));
} else {
    console.log(getRecipeTwoName("coke"));
}


//ternary function

//condition ? statement1 : statement2


//it logs if showRecipeOne is true then statement 1, if false then statement 2
console.log(
    showRecipeOne                       //condition
    ? getRecipeOneName("Pizza")         //if condition true
    : getRecipeTwoName("coke")          //else
);


//-------------------------------------------------------------------------

const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const product = {
    id,
    productName,
    rating
}

console.log(product);


const product2 = {
    description : "Product 2 description",
    id,
    productName,
    rating
};

// const prduct2description = product2.description;

// console.log(prduct2description);


// {} is used for objects

const {description} = product2;    //vimp
console.log(description);


//--------------------------------------------------------------------------
const array = [1, 2, 3];

let getFirstVal = array[0];
let getSecondVal = array[1];

console.log(getFirstVal, getSecondVal);

// destructuring array  ---> same output but different method

const [
    getFirstElement, 
    getSecondElement
] = array;

console.log(getFirstElement, getSecondElement); 

/*

// if you try to fetch 4th element it gives undefined in console

const [
getFirstElement, 
getSecondElement, 
getThirdElement, 
getFourthElement
] = array;

console.log(getFirstElement, getSecondElement, getThirdElement, getFourthElement); 

*/

// default parameters, spread and rest operator 

function mulOfTwoFunctions(num1 = 1, num2 = 2) {
    console.log(num1, num2);
    return num1 * num2;
}

console.log(mulOfTwoFunctions(5, 4));

const array2 = [2, 3, 4];
const array3 = [10, 11, 12];

console.log([99,...array2, 66, ...array3]);  //99, 2, 3, 4, 66, 10, 11, 12

function getInfo(a, b,...c) {    // rest parameter must be at the last
    
    console.log(a, b, c);

    return "Ritesh Girase";
}

console.log(getInfo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12));


//map, filter, find, some, every, includes, indexOf, findIndex

const personArray = [
    {
        name: 'Shrikant',
        age: 48,
        country: 'USA'
    },
    {
        name: 'Ritesh',
        age: 21,
        country: 'INDIA'
    }, 
    {
        name: 'Divyanka',
        age: 20,
        country: 'INDIA'
    }
];

// map
let getAllNames = personArray.map((singlePerson, index) => {
    console.log(singlePerson, index);
    return `${singlePerson.name}'s age is ${singlePerson.age}`;
});

console.log(getAllNames);

//------------------------------------------------------------------

//find

let getPersonFromUSA = personArray.find((singlePerson, index) => {
    return singlePerson.country === "INDIA";
});

console.log(getPersonFromUSA); 

//------------------------------------------------------------------

//some

let chekckSomeArrayMethod = personArray.some((singlePerson, index) => {

    // return singlePerson.age > 30;   // true --> 1 person whose age is greater than 30 
    return singlePerson.age > 50;   // false --> bcs there is no person whose age is greater than 50 
});

console.log(chekckSomeArrayMethod); 

//------------------------------------------------------------------


//every

let checkEveryArrayMethod = personArray.every((singlePerson, index) => {

    return singlePerson.age > 30;   // true --> if all person has age greater than 30 otherwise return false
});

console.log(checkEveryArrayMethod);

//---------------------------------------------------------------------

//includes

const fruitArray = ["apple", "banana", "orange", "kiwi"];

console.log(fruitArray.includes("apple"), fruitArray.indexOf("apple")); // true 0 (ture -> bcs apple is present and 0 is the index of apple)

let getIdFromUSA = personArray.findIndex(singlePerson => {
    return singlePerson.country === "USA";  // 2
    // return singlePerson.country === "JAPAN";  //-1
})

console.log(getIdFromUSA); // 2 


//---------------------------------------------------------------------

let getListOfProductsElement = document.querySelector('.list-of-products');


function renderProducts(getProducts) {
    getListOfProductsElement.innerHTML = getProducts.map(singleProductItem => `<p>${singleProductItem.title}</p>`).join(" ");
}

async function fetchListOfProducts() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/products', {
            method: 'GET'
        });

        const result = await apiResponse.json();

        if (result?.products?.length > 0) renderProducts(result?.products)
    } catch (e) {
        console.log(e);
    }
}

fetchListOfProducts();
