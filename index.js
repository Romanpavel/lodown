'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: takes an input value and returns a that value, unchanged 
 * 
 * @param {*} value: single value of any type
 * 
 * @return {*} : the input value that is unchanged
 * 
 * 
 */


function identity (value) {
    return value;
}

module.exports.identity = identity;


/**
 * typeOF: takes a value and return the type of value it is
 * 
 * @param {*} : value: a single value of any dataType
 * 
 * @return {string} : a string of the dataType
 * 
 */ 
 
 function typeOf(value) {
    if (value === null) {
        return 'null';
    } else if (value instanceof Date === true) {
        return 'date';
    } else if (Array.isArray(value)) {
        return 'array';
    } else {
        return typeof value;
    }
    
}

module.exports.typeOf = typeOf;


/**
 * first: takes an array and a number, returns all the indexes up to the number, returns empty array if not an array, or negative number, return first index
 * 
 * @param {array} : an array
 * 
 * @param {number} : a number
 * 
 * @return {array} : return empty array if number is nagative, or parameter not an array, return first index if number is undefined or NaN, 
 *                   return array of elements up to the number parameter
 * 
 */
 
 function first (array, number) {
    
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
if (isNaN(number) === true || number === undefined) {
    return array[0];
} else {
    return array.slice(0, number);
}
}

module.exports.first = first;

/**
 * last: takes an array and a number, returns all the indexes down to the number, returns empty array if not an array, or negative number, return first index
 * 
 * @param {array} array : an array
 * 
 * @param {number} number : a number
 * 
 * @return {array} : return empty array if number is nagative, or parameter not an array, return first index if number is undefined or NaN, 
 *                   return array of elements down to the number parameter
 * 
 */
 
function last (array, number) {
    
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
if (isNaN(number) === true || number === undefined) {
    return array[array.length - 1];
} else {
    return array.slice(-number);
}
}

module.exports.last = last;

/**
 * indexOF: takes an array an a value, returns the index of the value, or -1 if value is not found
 * 
 * @param {array} array : and array of values
 * 
 * @param {*} value : any type of value
 * 
 * @return {index || -1} : return the index at whcih the value was found, or -1 if no value is found
 * 
 */
 
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return i;
        } 
    }
    return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: searches through the array to find a value
 * 
 * @param {array} array : an Array
 * 
 * @param {*} value : a value
 * 
 * @return {boolean} : true if value is found, false if value is not found
 * 
 * 
 */

 function contains(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
}
return false;
}

module.exports.contains = contains;


/**
 * unique: takes an array, and returns an aray with all duplicates removed
 * 
 * @param: {array} array : an array
 * 
 * @return {array} : an array with all duplicates removed
 * 
 */
 
 function unique (array) {
    var myArr = [];
    for (let i = 0; i < array.length; i ++) {
        if(indexOf(array, array[i]) === i) {
            myArr.push(array[i]);
        }
    }
    return myArr;
};

module.exports.unique = unique;


/**
 * filter: takes an array and a function, then filters the array into a new array
 * 
 * @param {array} array : an array of values
 * 
 * @param {function} func : a function that acts on elements, index, array 
 * 
 * @return {array} : a filtered array
 */
 
 function filter (array, func) {
    var myArr = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            myArr.push(array[i]);
        }
    }
    return myArr;
};

module.exports.filter = filter;

/**
 * reject: takes an array and a function, returns boolean of false if any values evaluate to false
 * 
 * @param: {array} array : an array of values
 * 
 * @pamam: {function} func : a function to act on element, index, array on array
 * 
 * @return {boolean} : if any values evaluate to false return false
 */
 
 function reject (array, func) {
    return filter(array, (e, i, a) => func(e, i, a) === false);
};

module.exports.reject = reject;


/**
 * partition: returns 2 arrays, one of truthy values and the other of falsy values
 * 
 * @param: {array} array : an array of values
 * 
 * @param: {function} func : a function to act on element, index, array of array
 * 
 * @return: {array} : return array of 2 arrays, one of truthy values, the other falsy values
 */
 
function partition (array, func) {
    
    var trueArr = [];
    var falseArr = [];
    
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            trueArr.push(array[i]);
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            falseArr.push(array[i]);
        }
    }
    return [trueArr].concat([falseArr]);
    
};

module.exports.partition = partition;


/**
 * map: iterates through a collection and return an new array of updated values, after being passed through the function
 * 
 * @param: {array/object} collection : can be an array or an object
 * 
 * @param: {function} func: a function that acts on element, index, array
 * 
 * @return: {array} : return an updated array
 * 
 */
 
function map (collection, func) {
    var myArr = [];
        if (Array.isArray(collection)) {
             for (let i = 0; i < collection.length; i++) {
                var x = func(collection[i], i, collection);
                     myArr.push(x);
             }
        } else if (typeof collection === 'object' && collection !== null && collection instanceof Date === false) {
                for (var key in collection) {
                var y = func(collection[key], key, collection);
                    myArr.push(y);
        }
        }
        return myArr;
}

module.exports.map = map;

/**
 * every: return a boolean true if every value passes to be true, false otherwise
 * 
 * @param: {array/object} collection: an array or an object
 * 
 * @param: {function} func : a function that acts upon element, index, array
 * 
 * @return {boolean} : true if all elements are truthy, otherwise false
 * 
 */
 
function every (collection, func) {
let test = true;
each(collection, function(e, i, a) {
    if (typeof func === 'function' && !func(e, i, a)) {
            test = false;
        } else if (!e) {
                test = false;
    }
});
return test
};

module.exports.every = every;


/**
 * some:
 * 
 * @param {array/object} collection: an array or an object
 * 
 * @param {function} func : a function to act on all elements, index, array
 * 
 * @return {boolean} : if one element is truthy, return true, otherwise return false
 * 
 */
 
function some (collection, func) {
let test = false;
each(collection, function (e, i, c) {
    if (typeof func === 'function') {
        if(func(e, i, c) === true) {
          test = true;
}
}
    if (func === undefined) {
    if(e) {
        test = true;
}
}
});
return test;
}

 
 module.exports.some = some;
 
 
 /**
  * reduce: takes an array, a function, and a seed
  * 
  * @param: {array} array : an array of values
  * 
  * @param: {function} func : a function that acts on element, index, array of array
  * 
  * @param: {*} seed : a value, if no value is given, value becomes the first index of the array
  * 
  * @return: {*} : a value 
  * 
  * 
  */
  
 function reduce (arr, func, seed) {
     let prevResult;
     if (seed !== undefined) {
         prevResult = seed;
         each(arr, function(e, i, a) {
            prevResult = func(prevResult, e, i, a);
         });
     } else {
         prevResult = arr[0];
         for (let i = 1; i < arr.length; i++) {
             prevResult = func(prevResult, arr[i], i, arr);
         }
     }
     return prevResult;
 } 

 module.exports.reduce = reduce;
  
  
  /**
   * extend: adds objects properties to current object
   * 
   * @param {object} object : an object
   * 
   * @return {object} : updated object
   * 
   * 
   */
   
 function extend (object1, object2, ...object) {
    return Object.assign(object1, object2, ...object);
}
   
   module.exports.extend = extend;