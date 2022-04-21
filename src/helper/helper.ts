//Recursively replaces last positive integer of the string with *, up to 4 times
import {RomanNumeral} from "../component/RomanNumeral/RomanNumeral";

export const replaceMask = (input: string, count = 0): string => {
  if(count === 4)
    return input;
  return replaceMask(input.replace(/([0-9])(?!.*[0-9])/, '*', ), count+1);
}

//Reorders a string of multiple positive integers based on the sum of combined digits for each integer in ascending order
export const reorderByWeight = (input: string) => {
  if(!input.match(/^(\d|\s)*$/) || input === '')
    return ''
  //Obtain array of integers from string
  const arr = input.split(' ');
  //Sorts the array based on weight
  arr.sort((a,b) => {
    //returns the weight, which is the sum of all digits for each integer
    const getWeight = (input: string) => {
      return input.split('').reduce((acc, curr) => (acc + Number(curr)),0)
    }
    return (getWeight(a) - getWeight(b))
  })
  //recombined the sorted integer into a string seperated by space and return
  return arr.reduce((acc, curr, index) =>
    //Add whitespace at the end of each character other than the last element
    (index !== arr.length-1 ? `${acc}${curr} `: `${acc}${curr}`),'');
}

//Corresponding value of roman numeral
const RomanNumeralDefinition: {[key: string]: number} = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

//Convert roman numerals to integer value
export const convertRomanToInt = (input: string) => {
  if(input.split('').find((char) =>
    !Object.keys(RomanNumeralDefinition).some((roman) =>
      roman === char
    )
  ) || input === '')
    return -1;
  let result = 0;
  for(let i = 0; i < input.length; i++){
    //Need to check for special scenario
    if ((input[i] === "I" && input[i + 1] === "V") ||
      (input[i] === "I" && input[i + 1] === "X") ||
      (input[i] === "X" && input[i + 1] === "L") ||
      (input[i] === "X" && input[i + 1] === "C") ||
      (input[i] === "C" && input[i + 1] === "D") ||
      (input[i] === "C" && input[i + 1] === "M")
    ) {
      result += RomanNumeralDefinition[input[i + 1]] - RomanNumeralDefinition[input[i]];
      i++;
    } else {
      result += RomanNumeralDefinition[input[i]];
    }
  }
  return result;
}
