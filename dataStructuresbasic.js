const express=require("express");
const app=express();

// app.listen(4000,function(){
//     console.log("listening at port 4000");
// });


//1 push
//2 pop
//3 shift
//4 unshift
//5 concat
//6 splice
//7 slice
//8 forEach
//9 map
//10 filter
//11 reduce
//12 reduceRight
//14 find
//15 findIndex
//16 indexOf
//17 lastIndexOf
//18 includes
//19 every
//20 some
//21 sort
//22 reverse
//23 isArray
//24 join
//25 Array.from
//26 Array.of
//27 fill
//28 flat
//29 flatMap
//30 keys
//31 values
//32 enteries
//33 findLastIndex
//34 copyWithin
//35 at
//36 constructor
//37 prototype
//38 valueOf



//-----------Leetcode----------
const numbers = [0, 1, 2, 3, 4, 5, 6, 7,];


//-----------push-------------
const pushin=()=>{
    numbers.push(5,6);
    console.log(numbers);
}
pushin();



//-----------pop-------------
const popout=()=>{
    numbers.pop();
    console.log(numbers);
}
popout();


//-----------shift------------- Removes the first element from an array and returns it.
const shiftin=()=>{
    // const newShift=numbers.shift();
    // console.log(newShift);
    // console.log(numbers);
}
shiftin();



//-----------unShift------------- Adds one or more elements to the beginning of an array.
const unShift=()=>{
    // numbers.unshift(0,0.3);
    // console.log(numbers);
}
unShift();




//-----------concat-------------
const concat=()=>{
    // const arr2 = [3, 4];
    // console.log(arr2.concat(numbers));
}
concat();



//-----------Splice-------------  cuts out contents in an array provided the index given
//This method modifies the original array and returns the removed elements as a new array. 
const splice=()=>{
    console.log(numbers);
    // let days = numbers.splice(7); // 2 is index then the new array [2,3,4,5,6,7] 4 is normal count of the new array - will start removing elements from index 2.
    // Array.splice(start, removeCount, newItem, newItem, newItem, ...)
    // numbers.splice(1,0,'hi') //adds hi from index 1 - 0
    // numbers.splice(2,4,'nice','job')
    console.log(numbers)
    console.log(days);
}
// splice();




//-----------Slice------------- Returns a shallow copy of a portion of an array.
//portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. 
const slice=()=>{
    // console.log(numbers)
    // const days=numbers.slice(2,4);
    // console.log(numbers,days);
}
slice();





//------------forEach-------------- Executes a provided function once for each array element.
const forEach=()=>{
    // numbers.forEach(num=>console.log(num));
}
forEach();


//The map() method returns a new array, whereas the forEach() method does not return a new array.


//------------map--------------  Creates a new array with the results of calling a provided function on each element.
const map=()=>{
    // numbers.map(num=>console.log(num));
}
map();



//------------filter--------------  Creates a new array with all elements that pass the test in a provided function.
const filter=()=>{
    // console.log(numbers.filter(num => num % 2 === 0)); //all even numbers
}
filter();


//------------reduce-------------- Applies a function against an accumulator and each element in the array to reduce it to a single value.
const reduce=()=>{
    numbers.splice(0,1);
    console.log('2',numbers)
    console.log('3',numbers.reduce((a, cv) => a + cv, 1)); //a is 0. cv is 1, a is 1, cv is 2 
}
// reduce();


//------------reduceRight-------------- Similar to reduceRight(), but processes the array from right to left.
const reduceRight=()=>{
    numbers.splice(0,1);
    console.log('2',numbers)
    console.log('3',numbers.reduceRight((a, cv) => a + cv, ' ')); //a is 0. cv is 1, a is 1, cv is 2 
}

// reduceRight();



//------------find-------------- Returns the first element in the array that satisfies a provided testing function. 
const find=()=>{
    const found = numbers.find(num => num + num);
    console.log(found);
}

// find();



//------------findIndex-------------- Returns the index of the first element in the array that satisfies a provided testing function
const findIndex=()=>{
    const found = numbers.findIndex(num => num > 2);
    console.log(numbers);
    console.log(found);
}

// findIndex();



//------------indexOf-------------- Returns the first index at which a given element can be found in the array.
const indexOf=()=>{
    const found = numbers.indexOf(4);
    console.log(numbers);
    console.log(found);
}

// indexOf();


//------------lastIndexOf-------------- Returns the last index at which a given element can be found in the array
const lastIndexOf=()=>{
    const found = numbers.lastIndexOf(2);
    console.log(numbers);
    console.log(found);
}

// lastIndexOf();



//------------includes-------------- Returns the index of the first element in the array that satisfies a provided testing function
const includes=()=>{
    const found = numbers.includes(2);
    console.log(numbers);
    console.log(found);
}

// includes();



//------------every-------------- Checks if all elements in the array pass a provided testing function.
const every=()=>{
    const found = numbers.every(num => num < 6);
    console.log(numbers);
    console.log(found);
}

// every();



//------------some-------------- Checks if at least one element in the array passes a provided testing function
const some=()=>{
    const found = numbers.some(num=> num > 20);
    console.log(numbers);
    console.log(found);
}

// some();




//------------reverse-------------- Reverses the order of elements in an array in place.
const reverse=()=>{
    console.log(numbers);
    const found = numbers.reverse();
    console.log(found);
}

// reverse();



//------------isArray-------------- Checks if a given value is an array. 
const isArray=()=>{
    const found = Array.isArray(numbers);
    console.log(found);
}

// isArray();



//------------join-------------- Converts the elements of an array into a string and concatenates them using a specified separator
const join=()=>{
    const found = numbers.join('_');
    console.log(numbers);
    console.log(found);
}

// join();




//------------Arrayfrom-------------- Creates a new shallow-copied array from an array-like or iterable object
const Arrayfrom=()=>{
    const nums='hello'
    const found = Array.from(numbers);
    const found2 = Array.from(nums); // loose all the string and form array from it [ 'h', 'e', 'l', 'l', 'o' ]
    console.log(found);
    console.log(found2);
}

// Arrayfrom();






//------------ArrayOf-------------- Creates a new array with the provided elements as its elements.
const ArrayOf=()=>{
    const nums='hello'
    const found = Array.of(numbers);
    console.log(found);
}

// ArrayOf();



//------------fill-------------- Fills all the elements of an array from a start index to an end index with a static value.
//array.fill(value, start, end)
const fill=()=>{
    const found=numbers.fill(3,1,5); //from index 1 to index 4, filled with 3
    console.log(numbers);
}

// fill();





//------------flat-------------- Creates a new array with all sub-array elements concatenated recursively.
const flat=()=>{
    const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7,[6,9,{n:'lion'}],[9,9,9]];

    const found=numbers2.flat(); 
    console.log(found);
}

// flat();



//------------fill-------------- Similar to map(), but first maps each element using a mapping function, then flattens the result into a new array.
const flatMap=()=>{
    const found=numbers.flatMap(num=>[num * 2, num * 3]); // doubledAndFlattened
    console.log(numbers);
    console.log(found);
}

// flatMap();




//------------keys-------------- 
const keys=()=>{
    const found=numbers.keys(); //Object [Array Iterator] {}
    for (const key of found) {
        console.log(key); // Outputs: 0, 1, 2
    }
    console.log(numbers);
    // console.log(found);
}

// keys();





//------------values-------------- 
const values=()=>{
    const found=numbers.values(); //Object [Array Iterator] {}
    for (const key of found) {
        console.log(key); // Outputs: 0, 1, 2
    }
    console.log(numbers);
    // console.log(found);
}

// values();



//------------entries-------------- Returns a new array iterator that contains key/value pairs for each index in the array.
const entries=()=>{
    const found=numbers.entries(); //Object [Array Iterator] {}
    for (const [index, value] of found) {
    console.log(index, value); // Outputs: 0 10, 1 20, 2 30
    }
    console.log(numbers);
    // console.log(found);
}

// entries();





//------------copyWithin-------------- Copies a portion of an array to another location in the same array.

const copyWithin=()=>{
//copyWithin(target, start)
//copyWithin(target, start, end)

    console.log(numbers);
    const found=numbers.copyWithin(1, 2, 4); //
    console.log(found);
}
//[0,1,2,3,4,5,6,7]
//[0,3,4,3..]   ???????
// copyWithin();





//------------at------------------ This method is used to access the element at a specific index in the array. It's similar to using square brackets [index] for accessing elements.

const at=()=>{
    console.log(numbers.at(7))
}

// at();



//------------constructor------------------ This property returns a reference to the array's constructor function, which is the Array function itself.
const constructor=()=>{
    console.log(numbers.constructor)
}
//[Function: Array]

// constructor();



//------------prototype------------------ This property allows you to add properties and methods to all instances of arrays. You can extend the prototype to add custom functionality.
const prototype=()=>{
    Array.prototype.sayHello = function() {
        console.log("Hello from the array prototype!");
        return 'Hello from the array prototype!'
    };
    Array.prototype.sayHello2=9;
    console.log('lo',numbers.sayHello(),numbers.sayHello2)
}

// prototype();



//------------valueOf------------------ This method returns the primitive value of an array. When JavaScript expects a primitive value, it automatically calls valueOf() to convert objects (including arrays) to primitives.
const valueOf=()=>{
    console.log(numbers.valueOf(1))
}
// ????????
// valueOf();






















//1 length
//2 charAt
//3 concat
//4 indexOf
//5 lastIndexOf
//6 slice
//7 substring
//8 substr
//9 toUpperCase
//10 toLowerCase
//11 trim
//12 replace
//13 split
//14 startsWith
//15 endsWith
//16 includes
//17 repeat
//18 padStart
//19 padEnd
//20 match
//21 search
//22 toLocaleString
//23 charCodeAt
//24 trimStart
//25 trimEnd
//26 replaceAll




//strings
const nums='HELLO WORLD'
//-----------length------------
const length=()=>{
    console.log(nums.length)
}
// length();




//-----------charAt------------
const charAt=()=>{
    console.log(nums.charAt(0)) //H
}
// charAt();



//-----------charCodeAt------------ returns unicode value of the character at the specified index
const charCodeAt=()=>{
    console.log(nums.charCodeAt('H')) //72
}
charCodeAt();





//-----------concat------------
const concat2=()=>{
    const nums2=' Yeah'
    console.log(nums.concat(nums2))
}
// concat2();




//-----------indexOf------------ returns the index of the first occurance of a specified substring in the string
const indexOf2=()=>{
    console.log(nums.indexOf('L')) // 2 of the first L from HELLO
}
// indexOf2();



//-----------lastIndexOf------------ returns the index of the last occurance of a specified substring in the string
const lastIndexOf2=()=>{
    console.log(nums.lastIndexOf('L')) // 9 from the last L from world
}
// lastIndexOf2();



//-----------slice------------ Returns a portion of the string specified by the start and end indices
const slice2=()=>{
    console.log(nums)
    console.log(nums.slice(4))//O WORLD
    console.log(nums.slice(4,7)) //OW
}
// slice2();



//alert("testme".substring(-2)); // "testme", -2 becomes 0
//alert("testme".substring(4, -1)); // "test"
// -1 Becomes 0 -> got substring (4, 0)
// 4> 0, so that the arguments are swapped -> substring (0, 4) = "test"


//alert("testme".slice(-2)); // "me", from the end position 2
//alert("testme".slice(1, -1)); // "estm", from the first position to the one at the end.



//-----------substring------------ thesame with slice
const substring=()=>{
    console.log(nums)
    console.log(nums.substring(4))//
    console.log(nums.substring(4,7)) 
}
// substring();





//-----------substr------------ Returns a portion of the string starting from a specified index and extending for a given number of characters
const substr=()=>{
    console.log(nums)
    console.log(nums.substr(4,3))//
    console.log(nums.substr(4,7)) 
}
//(from,length:number of chx to return from index (from))
// substr();



//-----------toUpperCase------------ 
const toUpperCase=()=>{
    console.log(nums.toUpperCase())
    console.log(nums.toLocaleUpperCase()) //thesame
}
// toUpperCase();


//locale i based on language in use, some dont folllow same syntax as english


//-----------toLowerCase------------ 
const toLowerCase=()=>{
    console.log(nums.toLowerCase())
    console.log(nums.toLocaleLowerCase()) //thesame
}
// toLowerCase();



//-----------trim------------remove white space from both ends of a string
const trim=()=>{
    const nums2=' HELLO WORLD '
    console.log(nums2.trim())
}
// trim();
//trim space begins in blog site blogcompnenet description display





//-----------replace------------ replaces a substring with another substring
const replace=()=>{
    console.log(nums.replace('WORLD','universe'))
}
// replace();




//-----------split------------ Splits a string into an array of substrings based on a specified delimiter
const split=()=>{
    console.log(nums.split(' '))
    console.log(nums.split(' ')[1])
}
// split();




//-----------startsWith------------
const startsWith=()=>{
    console.log(nums.startsWith('HE'))
}
// startsWith();



//-----------endsWith------------
const endsWith=()=>{
    console.log(nums.endsWith('LD'))
}
// endsWith();



//-----------includes------------
const includes2=()=>{
    console.log(nums.includes('HE'))
}
// includes2();




//-----------repeat------------
const repeat=()=>{
    console.log(nums.repeat(2))
}
// repeat();



//-----------padStart------------ Pads the string from the start with a specified xharacter until it reaches a given length
const padStart=()=>{
    console.log(nums.padStart(12,'0')) //0HELLO WORLD if nums its greater than the start lenght it just prints out nums
    console.log(nums)
}
// padStart();


//-----------padEnd------------ Pads the string from the end with a specified xharacter until it reaches a given length
const padEnd=()=>{
    console.log(nums.padEnd(12,'0')) //HELLO WORLD0 if nums its greater than the start lenght it just prints out nums
    console.log(nums)
}
// padEnd();



//-----------match------------ Searches the string for a match against a regular express on and returns an array containing the matches
const match=()=>{
    console.log(nums.match(/[A-G]/g)) 
}
// match();


//-----------search------------ Searches the string for a match against a regular express on and returns the index of the first match
const search=()=>{
    console.log(nums.search(/[A-G]/g)) 
}
// search();


//-----------replaceAll------------ replaceAlles the string for a match against a regular express on and returns the index of the first match
const replaceAll=()=>{
    console.log(nums.replaceAll(14,'ttt')) 
}
// replaceAll();
//?????????????????????/

