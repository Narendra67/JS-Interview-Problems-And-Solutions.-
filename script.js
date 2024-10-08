// Day1. Find largest string from the given multiple words

/*const findLongestWord =(str) =>{
    if(str.trim().length === 0){
return false;
    }
    words = str.split(" ");
    words = words.sort((a,b) => b.length - a.length);

    console.log(words)
    return words[0];
};
console.log(findLongestWord(
    "This is series 100 days javaScript learning"
)
);*/

// Day2. Write a function generate Hash to accomplish this task.
/*
const generateHash = (str) =>{
    if(str.length > 200 || str.trim().length === 0){
   return false;
    }
    str = str.split(" ");
    str = str.map(
        (curElem) =>
            curElem.replace(curElem[0], curElem[0].toUpperCase())
            // curElem.charAt(0).toUpperCase() + curElem.slice(1)
    );
    str  = `#${str.join("")}`;
    console.log(str)
    return str;
};
console.log(generateHash("my name is narendra kushwaha"))
*/


/* day3. Count Occurence of Character.

const countChar = (word, char) =>{
    word = word.toLowerCase();
    char = char.toLowerCase();
    totalCount = word.split("").reduce((accum, curChar) =>{
        if(curChar === char){
            accum++;
        }
        return accum
    },0);
    return totalCount;
    // console.log(totalCount)
}
console.log(countChar("IlluMinatimiti", "I"));

*/


/* Day4. Find triangle type
 const checkTrianleType =(a,b,c)=>{
    if(a===b && b===c) return "Equilateral";
    if(a===b || b===c || a===c) return "isosceles";
    return "scalene";
 }

 console.log(checkTrianleType(2, 2, 2));
 console.log(checkTrianleType(2, 2, ));
 console.log(checkTrianleType(2, 6, 5));
 */

/* Day5. Write a function to sort an Array of Number in an ascending Order.
const sortAscending = (arr) =>{
    return arr.sort((a,b) => a-b)
}
console.log(sortAscending([12,34, 5,7 ,8,9,0]));
let arr = [12,34, 5,7 ,8,9,0];
let index = arr.indexOf(8);
console.log(index)
*/


/* Day6. Given String palindrome or not.


const isPalindrrome =(str) => {
str = str.toLowerCase().replace(/\W/g, "");
let r_str = str.split("").reverse().join("")
console.log(r_str);
return str === r_str ? true : false;
}



console.log(isPalindrrome("A man, a plan, a camel"));
console.log(isPalindrrome("racecar"));
console.log(isPalindrrome("hello"));
*/

/* Day7. Find max nnum in the given array
const findMax = (arr)=>{
    console.log(...arr)
    return Math.max(...arr)
}

console.log(findMax([1,4,5,6,74,3]));
console.log(findMax([5]));
console.log(findMax([5,4,5,6,8,9,100,1.5]));



let arr = [1,3,4,5,7,3];
const findMax = (arr)=>{
    console.log(`Given array is:- ${arr}`);
    return Math.max(...arr);
}
const maxNum = findMax(arr);
console.log(`Max Number is:- ${maxNum}`);
*/

/* Day8. How to find the factorial of any number.
const factorial = (num)=>{
    let fact = 1;
    for(i = 1; i<=num; i++){
        // console.log(i);
        fact = fact *i;
    }
    return fact;
    
}

console.log(factorial(5));


/* let factNum = prompt("Enter the factorial number:- ");
const factorial =(factNum)=>{
    let fact = 1;
    for(let i = 1; i<= factNum; i++){
fact = fact *i; 
    }
    return fact;
}
console.log(factorial(factNum)); */


/* Day9. Calculate Average 

const findAverage = (arr) => {
    let sum = arr.reduce((accum, curElem) => accum + curElem, 0)
    console.log(sum);
    return sum /arr.length;
}

console.log(findAverage([11,2,3,4,9,9,7])) 
*/

/* Day10. Write a function arrayAreEqual that takes two array.

const  arrayAreEqual =(arr1, arr2) =>{
    if(arr1.length !== arr2.length){
        return false;
    }
    return arr1.every((curVal, index)=> curVal === arr2[index]);
} 

console.log(arrayAreEqual([1,2,3], [1,2,3]))
console.log(arrayAreEqual([1,2,3], [1,2,5]))
console.log(arrayAreEqual([], [])) 


 Day11  Write a function that takes a number as input and the sum of its digits.

const sumOfDigits = (num) =>{
    // console.log(typeof num);
    let arr = Array.from(String(num),Number);
    console.log(arr)
    return arr.reduce((accum, curElem) => accum += curElem, 0)
}

console.log(sumOfDigits(12345))

/* 12. Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements. */

/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 3, 5, 6, 3, 2];
const removeDuplicateVal = ()=>{
    let newArr = [...new Set(arr)];
    return newArr;
}
console.log(removeDuplicateVal()) ; */

// 13 Write a function that takes a string as input and returns the count of vowels in that string. Cnsider 'a', 'e', 'i', 'o', 'u' as vowels (lower case and uppercase).
/*
const countVowels = (str) =>{
    let vowels = ["a", "e", "i", "o", "u"];


    let arr = str.split('');
    console.log(arr);

    let count = 0;
    for(char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello wolrd"));
console.log(countVowels("The quick broWN foX"))
*/

// str = "IOT is the technology which is used to protect and helps to share and transfer date over the Internet";

// const findVowels = ()=>{
//     let vowels = ["a", "e", "o", "i", "u"];
//     let arr = str.split('');
//     console.log(arr)

// let count =  0;
// for(let char of arr){
//     if(vowels.includes(char.toLowerCase())){
//         count++;
//     }
// }
// return count;
// }
// console.log(findVowels());


// 14 Write a function called isPowerOfTwo that takes an integar num as input and returns true if num is a power of true and false otherwise.

// const number =  prompt("Enter the number:- ")
/*const isPowerOfTwo = (number)=>{
    let op = false;
    for(let i = 1; i<number; i++){
        if(2**i === number){
            op = true;
        }
    }
    return op;
}
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(7));
*/

//15 . Write a function to calculate the sum of squares of all elements in an array. For example , given the array [1, 2, 3] the function should be return 14.

/* let arr = [1, 2, 3];
const sumOfSquare = ()=>{
    let sum = 0;
    for(let elem of arr){
        sum = sum + elem*elem;
    }
    return sum ;
}
console.log(sumOfSquare())
// console.log(sumOfSquare([1, 2, 3]));*/

// Second Way
 /*let arr = [1, 2, 3, 5]
 const sumOfSquare = ()=>{
     return arr.reduce((accum, curElem) =>(accum = accum + curElem*curElem), 0)
 }

 console.log(sumOfSquare())*/ 


 //16 Find the minimum value in an Array.
 // Write a function findMin that takes an array of number as input ans return the minimum value found in the array.


//  const minValue = (arr)=>{
// //      arr = arr.sort((a, b) =>{
// // if(b>a) return -1;
// //     })
// //     return arr[0];

//     if(arr.length === 0) return "Arr is empty"
//  return Math.min(...arr)
//  }
// console.log(minValue([3, 4, 5, 6, 3, 1]))
//  console.log(minValue([-1, 4, 5, 2 -0, 4, -3]));
// console.log(minValue([]));


//17 Write a funcrtion to convert string into camaleCase.

/*const toCamelCase = (str) =>{
    return str
    .trim()
    .split(" ")
    .map((curElem, index) =>{
        if(index === 0){
            return curElem.toLowerCase()
        }
        else{
 return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
        }
    })
    .join("")
}

console.log(toCamelCase(" Hello, mY name is Narendra kuShawaha")) */


//018 Write a function to check if a character is uppercase or lowercase.
//  const toUpperCase = (char)=>{
//     if (char.charCodeAt(0) >= 65 &&  char.charCodeAt(0) <= 90){
//         return true
//     }
//     return false
//  }

//2nd Way
//  return char === char.toUpperCase();
//  }

// console.log(toUpperCase("S"))  


