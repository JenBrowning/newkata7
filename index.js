//Katas1 forEach()
function forEach(array, callBackFunction) {
    for (let x = 0; x < array.length; x++) {
        const currentValue = array[x];
        callBackFunction(currentValue, array);
    }
  
}
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e']
forEach(lowerCaseLetters, function(letter) {
    let letterUpperCase = letter.toUpperCase()
    console.log(letterUpperCase)
})
//array.prototype.map in mdn on google

//Katas2 map()
const numbers = [1,2,3,4,5]
function map(array, callBackFunction) {
    let result = [];
    for (let x = 0; x < array.length; x++) {
        result = callBackFunction(array[x]);
    }
    return result;
}
console.log(map(numbers, x => x * 2))



//Katas3 some()
function some(array, callBackFunction) {
    let result = false;
    for (let x = 0; x < array.length; x++) {
        if(callBackFunction(array[x]) === true) {
            result = true;
        }
    } return result;
}
console.log(some(numbers, x => x % 2 ===0));



//Katas4 find()
function find(array, callBackFunction) {
    for (let x = 0; x < array.length; x++) {
       if(callBackFunction(array[x]) === true){
           return array[x];
       }
    }
}
console.log(find(numbers, x => x > 2));



//Katas5 findIndex()
function findIndex(array, callBackFunction) {
    for (let x = 0; x < array.length; x++) {
        if (callBackFunction(array[x]) === true) {
            return x;
        }
    }
    return -1;
}
console.log(findIndex(lowerCaseLetters, x => x =='d'))
    



//Katas6 every()
function every(array, callBackFunction) {
    let result = true;
    for (let x = 0; x < array.length; x++) {
        if(callBackFunction(array[x]) === false) {
            result = false;
        
        }
    }return result;
}
console.log(every(numbers, x => x < 8));


//Katas7 filter()
function filter(array, callBackFunction){
    let result = [];
    for (let x = 0; x < array.length; x++){
        if (callBackFunction(array[x]) === true){
            result.push(array[x])
        }
    }
    return result;
}
console.log(filter(numbers, x => x > 4));
