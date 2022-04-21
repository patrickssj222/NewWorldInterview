# New World Inc. Interview Exercise
#### April 20th 2022 Yun Hao

This project was done for New World Inc. interview

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### `yarn test`

Runs the test files\
Test covers all functions in the helper.ts

## Side Notes & Limitations

1. For the first question, I understand from the test file you are looking to replace
   each positive integer 'digit' ([0-9]) with *. Thus multi-digit numbers or negative 
   integers such as (89, -9, etc.) are treated as seperate digits.

2. I understand you want to avoid too many comments, but I have alot of modern one 
   liner solutions and regex expressions. I want to comment explaining my thought 
   process to demonstrate these are my own. Of course in real-life scenarios these
   are not needed.

3. To better satisfy my role in the position I'm applying for, I decided to go a 
   little bit above and beyond to create a simple react app for you to enter your 
   inputs for testing to make your life easier. Including a very simple designed 
   form with some minimal css to demonstrate my understanding in the Frontend field.
   
### Test #1
Create a function that will taken in a random string and mask the last 4 numbers using
asterisk (*).

Example:
“F3f213h82r3” should be “F3f21* h** r*”

###Test #2
You are provided a string containing a list of positive integers separated by a space (" ").
Take each value and calculate the sum of its digits, which we call it's "weight". Then return
the list in ascending order by weight, as a string joined by a space.
For example 99 will have "weight" 18, 100 will have "weight"
1 so in the output 100 will come before 99.

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:
"100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let's consider them to be strings and not
numbers:

100 is before 180 because its "weight" (1) is less than the one of 180 (9)
and 180 is before 90 since, having the same "weight" (9) it comes before as a string.
All numbers in the list are positive integers and the list can be empty.

###Test #3
Create a function that takes a Roman numeral as its argument and returns its value as a
numeric decimal integer. You need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be
encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered
"MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 =
VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order
