const { array } = require("yargs");

const numVowels = (string) => {
  //setup a variable to hold # of vowels
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  //look at each character of the string
  for (const character of string) {
    //is the current character a vowel
    if (vowels.includes(character)) {
      //if yes we want ot increment the number of variables
      count++;
    }
  }

  // return the vowel number variable
  //
  return count;
};

module.exports = numVowels;
