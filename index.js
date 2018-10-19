//Katas1 forEach()
function forEach(array, callBackFunction) {
    for (let x = 0; x < array.length; x++) {
        const currentValue = array[x];
        callBackFunction(currentValue, x, array);
    }
  
}


//Katas2 map()
function map(array, x, callBackFunction) {
    for (let x = 0; x < array.length; x++) {
        const newArray = array[x];
        callBackFunction(newArray, x, array);
    }
}



//Katas3 some()
function some(array, x, callBackFunction) {
    for (let x = 0; x < array.length; x++) {
        const arrayCheck = array[x];
        if (arrayCheck === array[x]) {
            return true;
        }
        else if (arrayCheck !== array[x]) {
            return false;
        }
        callBackFunction(arrayCheck, x, array);
    }
}


//Katas4 find()
function find(array, x, callBackFunction) {
    for (let x = 0; x < array.length; x++) {
        const arrayFind = array[x];
        if (arrayFind[x] === array[x]) {
            return arrayFind;
        }

        else if (arrayFind !== array[x]) {
            return "undefined";
        }
    }
    callBackFunction(arrayFind, x, array);
}


//Katas5 findIndex()
function findIndex(array, callBackFunction) {
    for (let x = 0; x < array.length; x++) {
        const arrayIndex = array[x];
        if (arrayIndex[x] === array[x]) {
            return arrayIndex[x]
        }
        else if (arrayFind !== array[x]) {
            return -1;
        }
    }
    callBackFunction(arrayIndex, x, array)
}


//Katas6 every()
function every(array, callBackFunction) {
    for (let x = 0; x < array.length; x++) {
        const arrayEvery = array[x];
        if (arrayEvery === array) {
            return true;
        }
        else if (arrayEvery !== array[x]) {
            return false;
        }
    }
    callBackFunction(arrayEvery, x, array)
}


//Katas7 filter()
function filter (array, callBackFunction){
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (callBackFunction(array[i]) === true){
            result.push(array[i])
        }
    }
    return result;
}
