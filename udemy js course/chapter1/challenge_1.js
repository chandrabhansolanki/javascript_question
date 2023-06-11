// challenge 1

// const MarkMass = 78;
// const MarkHeight = 1.69;

// const JohnMass = 92;
// const JohnHeight = 1.95;

// const MarkBMI = MarkMass / (MarkHeight * MarkHeight);
// const JohnBMI = JohnMass / (JohnHeight * JohnHeight);

// const compareBMI = MarkBMI > JohnBMI;

// console.log(MarkBMI, JohnBMI, compareBMI);

// Template Literals

// const firstname = "chandra";
// const Age = 25;
// const year = 1994;

// const Template = `hello ${firstname} whats your age ${Age}`;
// console.log(Template);

// // we can also use \n\ in template literals or Backtics example.

// console.log(`I am
// Leaining
// javaScript`);

// if and else condition

// const age = 12;
// const minAgeLic = age >= 18;

// if (minAgeLic) {
//   console.log("he has lic ");
// } else {
//   console.log(`he is miner not to approved wait for ${18 - age}  for License`);
// }

// const birthYear = 2001;
// let century;
// if (birthYear <= 2000) {
//   century = 19;
// } else {
//   century = 20;
// }

// console.log(century);

// Challenge 2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// const MarkMass = 78;
// const MarkHeight = 1.69;

// const JohnMass = 78;
// const JohnHeight = 1.69;

// const MarkBMI = MarkMass / (MarkHeight * MarkHeight);
// const JohnBMI = JohnMass / (JohnHeight * JohnHeight);

// const compareBMI = MarkBMI > JohnBMI;

// console.log(
//   `Mark BMI ${MarkBMI} is higher than John BMI ${JohnBMI} if we compare ${compareBMI}`
// );

// if (compareBMI) {
//   console.log(
//     `Mark BMI ${MarkBMI} is higher than John BMI ${JohnBMI} if we compare ${compareBMI}`
//   );
// } else {
//   console.log(`Mark BMI is less than John BMi`);
// }

// type of conversion

// const firstname = "chandra";
// const year = "2021";
// console.log(typeof Boolean(firstname));
// console.log(typeof Number(year) + 2000);

// type Coercion

// const first = "Rakesh";
// console.log("rakesh was born in " + 2001 + " year");

// Truthy and falsy values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("chandra"));
// console.log(Boolean({}));

// let book = 0;
// // console.log(Boolean(book));
// if (book) {
//   console.log("There is no book in the store");
// } else {
//   console.log("you can buy any book from store");
// }

// Boolean logics

// let number = 2;
// number = prompt("enter a number");

// if (number === 22

//   ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Logical operators

// const hecandrive = 20;
// const hehasgoodvision = true;
// const license = "renew";

// // console.log(hecandrive || hehasgoodvision);
// // console.log(hecandrive && hehasgoodvision);

// // const chandra = hecandrive && hehasgoodvision;

// if (hecandrive >= 21 && hehasgoodvision && license) {
//   console.log("he can drive");
// } else {
//   console.log("he cannot drive");
// }

// Challenge 3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKolas = (109 + 95 + 123) / 3;

// console.log(scoreDolphins);
// console.log(scoreKolas);
// // const compare = scoreDolphins === scoreKolas;

// if (scoreDolphins > scoreKolas && scoreDolphins >= 100) {
//   console.log("scoreDolphins wins the match");
// } else if (scoreDolphins < scoreKolas && scoreKolas >= 100) {
//   console.log("scoreKolas wins the match");
// } else if (scoreDolphins === scoreKolas) {
//   console.log("match will be draw");
// }

// Terenary operatore in a one line

// const first = "rohan";
// const last = "singh";
// const age = 23;

// console.log(`hello ${first} ${last} how old are you ${age}`);

// console.log(`calulation (23 - 10 )`);

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

// const Bill = 500;
// const tip;

// if (Bill >= 50 && Bill <= 300) {
//   tip = Bill * 0.15;
//   console.log(tip);
// } else if (Bill < 50 || Bill > 300) {
//   tip = Bill * 0.2;
//   console.log(tip);
// }

// const tip = Bill >= 50 && Bill <= 300 ? Bill * 0.15 : Bill * 0.2;
// console.log(tip);
