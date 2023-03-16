// Extract the first four characters from the string below;
// "beautiful"
let x = "Beautiful";
const FirstFourChars = x.substring(0,4);
console.log(FirstFourChars);

// Insert the following string at the tenth index of the below variable:
// "eat"
// const food = "I did not have appetite today"
const sentence = "I did not have  appetite today" ;
const sentence2 = sentence.substring (0,10) + "eat" + sentence.substring(10);
console.log(sentence2);

const output = sentence .slice(0,10) + "eat";
console.log(output);

// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."s"
// const story= "She sells sea shells at the sea shore"
const story= "She sells sea shells at the sea shore";
let countThe = (story.match(/the/g)).length;
console.log(countThe);
let countS = (story.match(/s/g)).length;
console.log(countS);

// Convert the following strings into the specified format:
// 1. UpperCase: "CONfidant"
// 2. LowerCase: "amazing", "beautiFUL"
// 3. Title case "A busy office"
let string = "CONfidant";
console.log(string.toUpperCase());
let string1 = "amazing"; let string2 = "beautiFUL";
console.log(string1.toLowerCase());console.log(string2.toLowerCase());
let string3 = "A busy office";
let string3ToTitleCase = string3.split(" ").map(n =>n[0].toUpperCase()+n.substring(1).toLowerCase());
console.log(string3ToTitleCase);
// let splitStringsToWords = string3.split("");
// // convertFirstletterToCapital  
// for(let a = string3; a< splitStringsToWords.length; a++){splitStringsToWords[a]=splitStringsToWords[a][o].toUpperCase() + splitStringsToWords[a].substring(1).toLowerCase();}
// let wordToTitleCase = splitStringsToWords.join("");
// console.log(wordToTitleCase);


// Using JavaScript, find the following words from the following strings:
// 1. "market"
// const string1 = "The lady went to the market with her sister";
// 2. "season"
// const string2 = "My favorite season is spring"
//  Option 1
const string4 = "The lady went to the market with her sister";
const findmarket = "market";
console.log(string4.includes("market"));
if(string4.includes(findmarket))
{console.log(`${findmarket} found in the string.`);} 
else
{console.log(`${findmarket} not found in the string.`);};
const string5 = "My favorite season is spring";
const findSeason = "season";
if (string5.includes(findSeason)){console.log(`${findSeason} found in the string`);}else{ console.log(`${findSeason} not found in the string`);};



