"use strict";

const str1 = "Brown fox jumped over the lazy dog.";

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
