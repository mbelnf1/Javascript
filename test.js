var number = 5; // in-line comment

/* this is a 









multi-line comment */

number = 9;

var myName = "Beau"

myName = 8

let ourName = "freeCodeCamp"

const pi = 3.14

var a;
var b = 2;
console.log(a)
a = 7;

b = a;

console.log(a)

var a = 9;

var a = 5;
var b = 10;
var c = "I am a "

a = a + 1;
b = b + 5;
c = c + " String!";

// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String"
titleCaseOver = 9000;

var sum = 10 + 10;
console.log(sum)

var difference = 45 - 33;

var product = 8 * 10;

var quotient = 66 / 33;

var myVar = 87;

// Only change code below this line
myVar++;

var myVar = 11;

// Only change code below this line
myVar--;

var ourDecimal = 5.7;

// Only change the code below this line

var myDecimal = 0.009

var product = 2.0 * 2.5;

console.log(product)

var quotient = 4.4 / 2.0;

var remainder; 
remainder = 11 % 3;

var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a += 12;
b += 9;
c += 7;

var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a -= 6;
b -= 15;
c -= 1;

var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a *= 5;
b *= 3;
c *= 10;

var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a /= 12;
b /= 4;
c /= 11;

// Example

var firstName = "Alan";
var LastNamer = " Turing";

// Only change code below this line

var myFirstName = "Beau";
var myLastName = "Carnes";

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.group(myStr)

var myStr ='a href="http://www.example.com" target="_blank">Link</a>';

/*****
CODE OUTPUT
\ '    single quote
\ "    double quote
\\     backslash
\n     newline
\r     carriage return
\t     tab
\b     backspace
\f     form feed
*****/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr = "This is the start. " + "This is the end."
console.log(myStr);

// Example
var ourStr = "I come first. ";
ourStr += " I come second. ";

// Only change code below this line

var myStr = "This is the first sentence. "
myStr += "This is the second sentence."

console.log(myStr)

// Example
var ourName2 = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName2 + ", how are you?";

// Only change code below this line
var myName = "Beau";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr)

// Example
var anAdjective ="awesome!";
var ourStr = "freeCpdeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;

console.log(myStr)

// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;

console.log(lastNameLength)

// Example

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfLastName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

console.log(firstLetterOfLastName)

// Setup
var myStr = "Jello World";

// Only change code below this line

myStr= "Hello World"

// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterofLastName = lastName[2];

console.log(thirdLetterofLastName)

// Example 

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfLastName)

// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    // Your code above this line
    return result;
}

// Change the words here to test your function
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["Quincy", 1];

// Example
var ourArray = [["the universe", 42], ["everything", 101010]]

// Only change code below this line.
var myArray = [["Bulls", 23],["White Sox", 45]];

// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line.
var myData = myArray[0];
console.log(myData)

// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

// Only change code below this line.
myArray[0] = 45;
console.log(myArray)

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13, 14]];

// Only change code below this line.

var myData = myArray[2][1];

console.log(myData)

// Example

var ourArray = ["Stimpson", "J", "cat"];

ourArray.push(["happy","joy"]);
// ourArray now equals ["Stimpson", "J", "cat". ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3])

// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and our Array now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();

console.log(myArray)

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]

//Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();

console.log(myArray)

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John, 23"], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul, 35"]);

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 3],["eggs", 12]];

// Example
function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line

function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Output 5

// Only change code below this line.

function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(10, 5)

// Declare your variable here
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;


}

// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " +oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

function minusSeven(num) {
    return num -7;
}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

// Example
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive(){
    sum += 5;
}

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);


var processed =0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7)

function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " +JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function welcomeToBooleans() {
    return false;
}

// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
if (wasThatTrue){
    return "Yes, that was true";
}
return "No, that was false";


}

console.log(trueOrFalse(true));

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
console.log(testEqual(10));

// Setup
function testStrict(val) {
    if (val === 7) { // change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testStrict(10);

/*

3 === 3
3 === '3'
*/

// Setup
function compareEquality(a, b){
    if (a === b) { // Change this line
    return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
console.log(compareEquality(10, "10"));

// Setup 
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
return  "Equal";
}

// Change this value to test
console.log(testNotEqual(10));

// Setup
function testStrictNotEqual(val) {
    // Only Change Code Below this Line

    if (val !== 17) {
    
    // Only CHange Code Above this Line

        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
console.log(testStrictNotEqual(10));

function testGreaterThan(val) {
    if (val > 100) { // Change this line
        return "Over 100";
    }

    if (val > 10) { // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

// Change this value to test
console.log(testGreaterThan(10));

function testGreaterOrEqual(val) {
    if (val >= 20) { // Change this lien
        return "20 or Over";
    }

    if (val >= 10) { // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

// Change this value to test
console.log(testGreaterOrEqual(10));

function testLessThan(val) {
    if (val < 25) { // Change this line
        return "Under 25";
    }

    if (val < 55) { // CHange this line
        return "Under 55";
    }

    return "55 or Over";
}

// Change this value to test
console.log(testLessThan(10));

function testLessOrEqual(val) {
    if (val <= 12) { // Change this line
        return "Smaller Than or Equal to 12"
    }

    if (val <= 24) { //Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

// Change this value to test
console.log(testLessOrEqual(10));

function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

// Change this value to test
console.log(testLogicalAnd(10));

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20 ) {
        return "Outside";
    }
    
    //Only change code above this line
    return "Inside";
}
console.log(testLogicalOr(15));

function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}
testElse(10);

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5){
        return "Smaller than 5";
    } else {
    return "Between 5 and 10";
    }
}

// Change this value to test
testElseIf(7);

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greate than or equal to 10";
    
    
    }
}

// Change this value to test
console.log(orderMyLogic(3));

function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}


console.log(testSize(19));

/*
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return " Large"
num >= 20 - return "Huge"

*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey","Go Home"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names [0]
    } else if (strokes <= par - 2) {
      return names[1]
    } else if (strokes == par - 1) {
    return names[2]
    } else if (strokes == par) {
    return names[3]
    } else if (strokes == par + 1) {
    return names[4]
    } else if (strokes <= par + 2) {
    return names[5]
    } else {
    return names[6]
    }
}

// Change these values to test
console.log(golfScore(5, 8));

/*
Strokes     Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1      "Birdie"
par         "par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"

*/

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: 
            answer = "alpha"
            break;
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta";
            break;
    }


    return answer;
}

// Change this value to test
console.log(caseInSwitch(1));

/*
Write a switch statement which tests val and sets answer for the follwing condition
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;

    }
        return answer;
}

// Change this value to test
console.log(switchOfStuff("c"));

function sequentualSizes(val) {
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

// Change this value to test
console.log(sequentualSizes(7));

function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch(val) {
        case "bob":
            answer= "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break; 
        case 7:
            answer = "Ate Nine";
            break;

    }
    
    // Only change code above this line
    return answer;
}

chainToSwitch(54);

function isLess(a, b) {
    // Fix this code
    return a < b;
       
    
}

// Change these values to test
console.log(isLess(20, 15));

// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return undefined;
    }
    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) +Math.sqrt(b), 2))
}

// Change values below to test your code
console.log(abTest(-2,2));

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "j":
        case "Q":
        case "k":
        case "A":
            count--;
            break;
    }

    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet;

}

cc(2); cc('K'); cc(10); cc('K'); cc('A'); 
console.log(cc(4))

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {
    "name" : "Quincy",
    "legs" : 3,
    "tails" : 2,
    "friends" : []
};

// Setup 
var testObj = {
    "hat": "Ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;     // Change this line
var shirtValue = testObj.shirt;   // Change this line

// Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"]; // Change this line
var drinkValue = testObj = testObj['the drink']; // Change this line

// Setup 
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;   // Change this Line
var player = testObj[playerNumber];   // Change this Line

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog.name = "Happy Coder";

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog['bark'] = "woof!"

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line

delete myDog.tails;

// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "frank" 
    };
    result = lookup[val];
    // Only change code above this line
    return result;
}

// Change this value to test
console.log(phoneticLookup("charlie"));

// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // You Code Here
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    } else {
        return "Not Found";
    }
}

// Test your code by modifying these values
console.log(checkObj("gift"));

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    // Add record here
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "Youtube video"
        ]
    }
];

// Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents= myStorage.car.inside["glove box"]; // Change this line

console.log(gloveBoxContents)

// Setup
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line
console.log(secondTree)

// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if (value === ""){
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

// Alter values below to test your code
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));

var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray);

// Example
var ourArray =[];

for (var i = 0; i < 10; i += 2){
    ourArray.push(i);
}

console.log(ourArray);

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

console.log(ourArray);

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 9; i > 0; i-= 2) {
    myArray.push(i);
}

console.log(myArray);

// Example
var ourArr = [ 9 , 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);

// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total= 0 ;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);

function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);

// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

do {
    myArray.push(i);
    i++;
}   while (i < 5) 

console.log(i, myArray);

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

// Change these values to test your function
var data = lookUpProfile( "Sherlock", "lastName");

console.log(data)

function randomFraction() {

    return Math.random();
}

console.log(randomFraction());

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

// Example
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax){

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

var myRandom = randomRange(5, 15);

console.log(myRandom);

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

function convertToInteger(str) {
    return parseInt(str, 2)

}

convertToInteger("10011");

// Condition ? statement-if0true : statement-if-false;

function checkEqual(a, b) {
    return a === b ? true : false;

    return a === b;
}

checkEqual(1, 2);

function checkSign(num) {
return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(10));

let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();

function checkScope() {
    "use strict";
    let i = "function scope";
    if(true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";

    //sentence = str + " is amazing!"

    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp")

const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
   // s = [2, 5, 7];

}
editInPlace();

console.log(s)

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);

const magic = () => new Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3, 4, 5]));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

const sam = (function() {
    return function sam(...args) {
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sam(1, 2, 3, 4));

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1]; // Change this line
    arr1[0] = 'potato'
})();
console.log(arr2);

var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; // x = 3.6
var y =voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const { x : d, y : e, z : f} = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // Change code below this line
    const { tomorrow : tempOfTomorrow } = avgTemperatures; // change this line
    // change code above this line
    return tempOfTomorrow; 
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOFTmrw(forecast) {
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOFTmrw(LOCAL_FORECAST));

const [zf, xm, , yr] = [1, 2, 3, 4, 5, 6];
console.log(zf, xm, yr);

let ab = 8, ba = 6;
(() => {
    "use strict";
    [ab,ba] = [ba, ab]
})();
 console.log(ab);
 console.log(ba);

 const source = [1,2,3,4,5,6,7,8,9,10];
 function removeFirstTwo(list) {

    const [ , , ...arr] = list;

    return arr;
 }
 const arr = removeFirstTwo(source);
 console.log(arr);
 console.log(source);

 const stats = {
     max: 56.78,
     standard_deviation: 4.34,
     median: 34.54,
     mode: 23.87,
     min: -0.75,
     average: 35.85
 };
 const half = (function() {
     
    return function half({ max, min }) {
        return (max + min) / 2.0;
    };

 })();
console.log(stats);
console.log(half(stats));

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// Template literal with multi_line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);




const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`, 
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)

const createPerson = (name, age, gender) => ( { name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "male"));

const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

class SpaceShuttle {
constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle ('Jupiter');

console.log(zeus.targetPlanet)


 function makeClass() {
     class Vegetable {
         constructor(name){
             this.name= name;
         }
     }

    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer(){
        return this._author;
    }
    // setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32); 
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

//import { capitalizeString }  from "./string_function"
//const cap = capitalizeString ("hello!");

//console.log(cap);

//const capitalizeString = (string) => {
  //  return string.charAT(0).toUpperCase() + string.slice(1);
//}

//export { capitalizeString };

//export const foo = "bar";
//export const bar = "foo";

//import * as capitalizeString from "capitalize_strings";

//export default function subtract(x,y) {return x - y;}

//import subtract from "math_functions";
//subtract(7,4);