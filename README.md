# Meu primeiro exercício concluido com sucesso (com código)


Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

    Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

    Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

    Log the value of BMIMark and BMIJohn to the console.

    BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


  ```javascript
// CHALLENGE #1 ---  BMI = mass (KG)  / height * height (METERS) )
  
const massMark = 78;

const heightMark = 1.69;

const massJohn = 92;

const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);

const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log (BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);
```










