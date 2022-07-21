"use strict";

let str1 = "Brown fox jumped over the lazy dog.";

// gauti zodi Brown su slice(start, end) metodu . "end" neisiskaiciuoja

const firstWord = str1.slice(0, 5);
console.log("firstWord ===", firstWord);

// the
const theWord = str1.slice(-13, -10);
console.log("theWord ===", theWord);
// lazy
const lazyWord = str1.slice(-9, -5);
console.log("lazyWord ===", lazyWord);
// dog
const dogWord = str1.slice(-5, -1);
console.log("dogWord ===", dogWord);

// gauti 3 paskutinius zodzius

const threeWords = str1.slice(21, 35);
console.log("threeWords ===", threeWords);

// gauti sakinio dali nuo pradziu iki 'jumped'
const jumpedWordI = str1.indexOf("jumped");
console.log("jumpedWordI ===", jumpedWordI);

const jumpedWord = str1.substring(0, jumpedWordI);
console.log("jumpedWord ===", jumpedWord);

// gauti zodi esanti pries over

// str.substr(nuoIndex, kiek simboliu)
const jumpedWordSubstr = str1.substr(jumpedWordI, 11); // depricated, bus pasalintas tolimesnese versijose
console.log("jumpedWordSubstr ===", jumpedWordSubstr);

const upperCase = str1.toUpperCase();
console.log("upperCase ===", upperCase);
console.log("str1 ===", str1);

// concat

const strCon = str1.concat(" ", "Sun ", "is ", "shinning.");
console.log("strCon ===", strCon);

// trim() nukerpa white space(space'us)

// str.charAt(index) - grazina simboli toje vietoje

const str3 = "sun is shinning";
console.log(str3.charAt(4));

// gauti str3 sentence case - padaryti pirma raide didziaja

const str3Sentence = str3.charAt(0).toUpperCase() + str3.slice(1);
console.log("str3Sentence ===", str3Sentence);

// parasyti funkcija kuri argumentu gauna stringa ir grazina pirmaja raide padidinta.

/**
 * this function makes first letter of the sentence capitalized
 * @param {string} str
 * @return {string}
 */
function toSentenceCase(str) {
  const senC = str.charAt(0).toUpperCase() + str.slice(1);
  console.log("toSentenceCase ===", senC);
  return senC;
}

const upper = toSentenceCase("pakeisk pirma i didziaja, pamirsau");

// str.split(per ka padalinti) -  padalina i masyva

const str1Arr = str1.split(" ");
console.log("str1Arr ===", str1Arr);

let capitalizedSentence = "";
for (const word of str1Arr) {
  capitalizedSentence += toSentenceCase(word) + " ";
}
console.log("capitalizedSentence ===", capitalizedSentence);

console.log('str1Arr.join(" ") ===', str1Arr.join(" "));

//  regular expression regex

str1 = "Brown fox jumped over fox lazy dog.";

// i - case insensitive
// g - global
// galima jungti ir i viena "gi"
const sqrl = str1.replace(/FOX/gi, "squirrel");
