// // // // // // // // // // // var firstName = "hamu";
// // // // // // // // // // // console.log(firstName);
// // // // // // // // // // // var age = 23;

// // // // // // // // // // // console.log(firstName + " " + age);

// // // // // // // // // // // // var lastName = "king";
// // // // // // // // // // // var fullAge = true;

// // // // // // // // // // // console.log(fullAge);

// // // // // // // // // // // var job;
// // // // // // // // // // // console.log(job);

// // // // // // // // // // // //---- undefined is when a variable is declared but not assigned any value

// // // // // // // // // // // var hamu, isMarried;
// // // // // // // // // // // hamu = "programmer";
// // // // // // // // // // // isMarried = false;

// // // // // // // // // // // alert(
// // // // // // // // // // //   firstName +
// // // // // // // // // // //     " is a " +
// // // // // // // // // // //     age +
// // // // // // // // // // //     " years old " +
// // // // // // // // // // //     hamu +
// // // // // // // // // // //     " is he married: " +
// // // // // // // // // // //     isMarried
// // // // // // // // // // // );
// // // // // // // // // // var firstName = "hamu";

// // // // // // // // // // var lastName = prompt("what is his last name?");

// // // // // // // // // // console.log(firstName + " " + lastName);

// // // // // // // // // // ///******** Basic operators */

// // // // // // // // // // var year, yearHamu, yearDj;

// // // // // // // // // // now = 2022;
// // // // // // // // // // ageHamu = now - 27;
// // // // // // // // // // ageDj = now - 25;

// // // // // // // // // // console.log(yearHamu);

// // // // // // // // // // console.log(now + 2);
// // // // // // // // // // console.log(now * 2);
// // // // // // // // // // console.log(now / 10);

// // // // // // // // // // var hamuOlder = ageHamu < ageDj;
// // // // // // // // // // console.log(hamuOlder);

// // // // // // // // // // console.log(typeof  hamuOlder);
// // // // // // // // // // console.log(typeof ageHamu)

// // // // // // // // // // var now = 2022;
// // // // // // // // // // var yearHamu = 1998;
// // // // // // // // // // var fullAge = 24;

// // // // // // // // // // var isFullAge = now - yearHamu == fullAge

// // // // // // // // // // console.log(isFullAge)

// // // // // // // // // // var ageSaad = 19;
// // // // // // // // // // var ageTalha =14;

// // // // // // // // // // var ageAvg = (ageSaad + ageTalha) / 2;

// // // // // // // // // // console.log(ageAvg)

// // // // // // // // // // var x;

// // // // // // // // // // x=y= (3+5) *4 -6;

// // // // // // // // // // console.log(x , y)
// // // // // // // // // // x *=2;
// // // // // // // // // // console.log(x)

// // // // // // // // // // ///////-------challenge time---//

// // // // // // // // // // var massMark = 54;
// // // // // // // // // // var massJohn = 35;

// // // // // // // // // // var heightMark = 1.67;
// // // // // // // // // // var heightJohn =1.8;

// // // // // // // // // // var markBmi = massMark / (heightMark * heightMark) ;

// // // // // // // // // // console.log(markBmi)

// // // // // // // // // // var johnBmi = massJohn / (heightJohn * heightJohn) ;

// // // // // // // // // // console.log(johnBmi)

// // // // // // // // // // var compareBmi = markBmi > johnBmi ;

// // // // // // // // // // console.log( 'is mark\'s BMI is greater than John\'s ? ' + compareBmi )

// // // // // // // // // var firstName = "hamza";
// // // // // // // // // var isMarried = true;

// // // // // // // // // if (isMarried) {
// // // // // // // // //   console.log(firstName + " is married");
// // // // // // // // // } else {
// // // // // // // // //   console.log("Hopefuly he'll merry soon");
// // // // // // // // // }

// // // // // // // // // var job = "student";
// // // // // // // // // switch (job) {
// // // // // // // // //   case "teacher":
// // // // // // // // //     console.log(firstName + " teaches kids how to code ");
// // // // // // // // //     break;
// // // // // // // // //   case "driver":
// // // // // // // // //     console.log(firstName + "drives an uber in hasilpur");
// // // // // // // // //     break;
// // // // // // // // //   default:
// // // // // // // // //     console.log(firstName + " does something else");
// // // // // // // // // }

// // // // // // // // // var age = 20;
// // // // // // // // // var userName = "hamza";

// // // // // // // // // switch (true) {
// // // // // // // // //   case age <= 15:
// // // // // // // // //     console.log(userName + " he is not a man");
// // // // // // // // //     break;
// // // // // // // // //   case age >= 15 && age < 20:
// // // // // // // // //     console.log(userName + "  is still a baby");
// // // // // // // // //     break;
// // // // // // // // //   case age >= 20:
// // // // // // // // //     console.log(userName + " he is older enough to drive a car");
// // // // // // // // //     break;
// // // // // // // // //   case age <= 15:
// // // // // // // // //     console.log(userName + " he is not a man");
// // // // // // // // //     break;

// // // // // // // // //   default:
// // // // // // // // //     console.log(userName + " is not in the given age criteria");
// // // // // // // // // }

// // // // // // // // ///---------codding challenge---------///

// // // // // // // // var scoreJohn = [189, 120, 103];

// // // // // // // // var scoreJohnSum = scoreJohn.reduce(function (a, b) {
// // // // // // // //   return a + b;
// // // // // // // // }, 0);
// // // // // // // // console.log(scoreJohnSum);

// // // // // // // // var avgScoreJohn = scoreJohnSum / 3;
// // // // // // // // console.log(avgScoreJohn);

// // // // // // // // var scoreMike = [116, 94, 123];

// // // // // // // // var scoreMikeSum = scoreMike.reduce(function (a, b) {
// // // // // // // //   return a + b;
// // // // // // // // }, 0);
// // // // // // // // console.log(scoreMikeSum);

// // // // // // // // var avgScoreMike = scoreMikeSum / 3;
// // // // // // // // console.log(avgScoreMike);

// // // // // // // // if (avgScoreMike > avgScoreJohn) {
// // // // // // // //   console.log("Mik's team win the match");
// // // // // // // // } else if (avgScoreJohn > avgScoreMike) {
// // // // // // // //   console.log("John's team win the match");
// // // // // // // // }

// // // // // // // // function ageCalculator(year) {
// // // // // // // //   return 2022 - year;
// // // // // // // // }
// // // // // // // // let ageAeni = ageCalculator(2003, "qurat-ul-ain");
// // // // // // // // let ageTalha = ageCalculator(2002, "talha");
// // // // // // // // let ageSaad = ageCalculator(2002, "saad");
// // // // // // // // let ageHamza = ageCalculator(1998, "hamza");

// // // // // // // // console.log(ageAeni, ageTalha, ageSaad, ageHamza);

// // // // // // // // function retireAgeCalc(year, firstName) {
// // // // // // // //   let age = ageCalculator(year);
// // // // // // // //   let retirement = 60 - age;
// // // // // // // //   console.log(firstName + " will retire in " + retirement + " years.");

// // // // // // // //   if (retirement < 0) {
// // // // // // // //     console.log(firstName + " will retire in " + retirement + " years.");
// // // // // // // //   } else {
// // // // // // // //     console.log(firstName + " is already retired");
// // // // // // // //   }
// // // // // // // // }
// // // // // // // // retireAgeCalc(1938, "hamza");
// // // // // // // // retireAgeCalc(2002, "saad");
// // // // // // // // retireAgeCalc(2002, "talha");
// // // // // // // // retireAgeCalc(2003, "aeni");

// // // // // // // // // f = (kq1q2 / r) ^ 2;

// // // // // // // // const getSquare = (val) => {
// // // // // // // //   return val * val;
// // // // // // // // };

// // // // // // // // const getForce = (q1, q2, r) => {
// // // // // // // //   let radius = Math.pow(r, 2);
// // // // // // // //   let k = 1.38 * Math.pow(10, -23);
// // // // // // // //   return (k * q1 * q2) / radius;
// // // // // // // // };

// // // // // // // // console.log(getForce(50, 30, 5));

// // // // // // // // var names = ["hamza", "saad", "talha"];
// // // // // // // // var years = new Array(1990, 3092, 23423);

// // // // // // // // console.log(names[1]);
// // // // // // // // console.log(years[1]);

// // // // // // // // names[0] = "king";
// // // // // // // // names[names.length] = "husnain";

// // // // // // // // console.log(names);

// // // // // // // // console.log(names.indexOf("dj"));

// // // // // // // // var findName =
// // // // // // // //   names.indexOf("polio") === -1
// // // // // // // //     ? "polio is not inside the array"
// // // // // // // //     : "polio is inside the array";
// // // // // // // // console.log(findName);
// // // // // // // // var findAge =
// // // // // // // //   years.indexOf(1998) === -1
// // // // // // // //     ? "age of hamu king is not here"
// // // // // // // //     : "age of hamu nor inside the array";

// // // // // // // // console.log(findAge);

// // // // // // // // function tipCakculator (bill){
// // // // // // // // var percentage;
// // // // // // // // if(bill < 50){
// // // // // // // //     percentage = 0.2;
// // // // // // // // }else if(bill >= 50 && bill <200){
// // // // // // // //     percentage = 0.15
// // // // // // // // }else{
// // // // // // // //     percentage = 0.1;
// // // // // // // // }
// // // // // // // // return percentage * bill
// // // // // // // // }
// // // // // // // // var bills = [124 ,48 , 268 ]
// // // // // // // // var tip = [tipCakculator(bills[0]),
// // // // // // // // tipCakculator(bills[1]),
// // // // // // // // tipCakculator(bills[2]),]

// // // // // // // // console.log(tip)

// // // // // // // // var totalBill = [bills[0] + tip [0],
// // // // // // // // bills[1] + tip [1],
// // // // // // // // bills[2] + tip [2]]

// // // // // // // // console.log(totalBill)

// // // // // // // // function tipCalc (bill){
// // // // // // // //     var percentage;
// // // // // // // //     switch(bill){
// // // // // // // // case (bill < 50):
// // // // // // // //     percentage= 0.2;
// // // // // // // //     break;
// // // // // // // //     case (bill >= 50 && bill <200):
// // // // // // // //     percentage= 0.15;
// // // // // // // //     break;
// // // // // // // //     default:
// // // // // // // //         percentage = 0.1;
// // // // // // // //     }
// // // // // // // //     return percentage*bill;
// // // // // // // // }
// // // // // // // // var bills =[124 , 48 , 268]
// // // // // // // // var tipCount = [tipCalc (bills[0]),
// // // // // // // // tipCalc (bills[1]),
// // // // // // // // tipCalc (bills[2])]

// // // // // // // // objects and methods

// // // // // // // // var birthYear = 1998;

// // // // // // // // var elem = {
// // // // // // // //   firstname: "hamu",
// // // // // // // //   lastName: "king",
// // // // // // // //   birthYear: 1998,
// // // // // // // //   family: ["hamza", "saad", "talha"],
// // // // // // // //   job: "student",
// // // // // // // //   isMarried: false,
// // // // // // // //   calcAge: function () {
// // // // // // // //     return 2018 - this.birthYear;
// // // // // // // //   },
// // // // // // // // };
// // // // // // // // elem.calcAge(1998);
// // // // // // // // console.log(elem.calcAge());

// // // // // // // var johnBmi = {
// // // // // // //   firstName: "john",
// // // // // // //   mass: 50,
// // // // // // //   height: 1.7,
// // // // // // //   calcBmi: function () {
// // // // // // //     bmi = this.mass / (this.height * this.height);
// // // // // // //     return this.bmi;
// // // // // // //   },
// // // // // // // };
// // // // // // // var clarkBmi = {
// // // // // // //   firstName: "clark",
// // // // // // //   mass: 60,
// // // // // // //   height: 1.6,
// // // // // // //   calcBmi: function () {
// // // // // // //     this.bmi = this.mass / (this.height * this.height);
// // // // // // //     return this.bmi;
// // // // // // //   },
// // // // // // // };

// // // // // // // johnBmi.calcBmi();
// // // // // // // clarkBmi.calcBmi();
// // // // // // // console.log(johnBmi, clarkBmi);

// // // // // // var array =['hamza' , 'saad' , 'talha' ,1998 , 'dj', false, 'chimps'];

// // // // // // for(i = 0; i < array.length; i++ ){
// // // // // //    if(typeof array[i] !== 'string')continue;
// // // // // //    console.log(array[i])
// // // // // // }

// // // // // // //----------continue and break

// // // // // // var array =['hamza' , 'saad' , 'talha' ,1998 , 'dj', false, 'chimps'];

// // // // // // for (i = array.length -1 ; i >= 0 ; i--){
// // // // // // if(typeof array[i] !== 'string')continue;
// // // // // // console.log(array[i])
// // // // // // }

// // // // // // var john = {
// // // // // //     bill : [124 ,48 , 268 , 180 , 42 ],
// // // // // //     tips : function(){
// // // // // //         if(this.bill[i] < 50){
// // // // // //             console.log(john.tips * 0.2)
// // // // // //         }
// // // // // //     }
// // // // // // }
// // // // // // program to generate a multiplication table

// // // take input from the user
// // // const number = parseInt(prompt("Enter any number: "));

// // // for (let i = 1; i <= 10; i++) {
// // //   const result = i * number;
// // //   console.log(`${i} *${number} = ${result}`);
// // // }
// // // // // calculateAge(1998);

// // // // // function calculateAge(year) {
// // // // //   console.log(2022 - year);
// // // // //   console.log(this);
// // // // // }

// // // // var john = {
// // // //   name: "hamza",
// // // //   yearOfBirth: 1998,
// // // //   calculateAge: function () {
// // // //     console.log(this);
// // // //     console.log(2022 - this.yearOfBirth);

// // // //     function innerFunction() {
// // // //       console.log(this);
// // // //     }
// // // //     innerFunction();
// // // //   },
// // // // };
// // // // john.calculateAge

// // // //-------objects function constructure-----//

// // // var john = {
// // //   name: "hamu",
// // //   yearOfBirth: 1998,
// // //   job: "student",
// // // };

// // // var Person = function (name, yearOfBirth, job) {
// // //   this.name = name;
// // //   this.yearOfBirth = yearOfBirth;
// // //   this.job = job;
// // // };

// // // Person.prototype.calculateAge = function () {
// // //   console.log(this.name + " is", 2022 - this.yearOfBirth + " years old");
// // // };

// // // var john = new Person("hamu", 1998, "student");
// // // var mark = new Person("niazi", 1999, "designer");
// // // var jane = new Person("faizi", 2001, "doctor");

// // // john.calculateAge();
// // // mark.calculateAge();
// // // jane.calculateAge();

// // // const number = parseInt(prompt("Enter integer to get table :"));

// // // let number = 2;

// // // for (let i = 1; i <= 10; i++) {
// // //   const result = i * number;
// // //   console.log(`${i} * ${number} =${result}`);
// // // }

// // // let studentData = [{ name: "hamza" }, { age: 23 }, { profession: "student" }];

// // // console.log(studentData);

// // // console.log("hello world")

// // // var myAge = 20;
// // // var myName = "faizan"

// // // console.log(myAge,myName);

// // // var number = 20 - 10;
// // // console.log(number)

// // // let x = 5;
// // // let y = 5;

// // // console.log(`is both the x and y are the equal: ${x===y}`)

// // // let avg = 95%10;
// // // console.log(avg)

// // // var num =20;
// // // var newNum = num++;

// // // console.log(newNum)

// // // var num =20;
// // // var newNum = ++num;

// // // console.log(num)
// // // console.log(newNum)

// // // let x = 40;
// // // let y = 35;

// // // console.log(!(x > y) || (x > 50))

// // // console.log(!false)

// // // let para1 = "this is faizi";
// // // let para2 = " this is hamu";

// // // console.log(para1 + para2)

// // //

// // // var a = 5;
// // // var b = "5";

// // // // var a = a+b; // a+b = 15
// // // // var b = a-b; // b = 5

// // // // var a = a-b; // 15 - 5 =10

// // // console.log(typeof(b))

// // // var weather = "rainy";

// // // if(weather == "rainy"){
// // //     console.log("tak a cap")
// // // }else{
// // //     console.log("no need to take cap")
// // // }
// // // var age = 17;

// // // console.log(age >= 18 ? "you can vote" : "you can't vote");

// // // let year = 2020

// // // if(year%4 === 0){
// // //     console.log("this " + year+ " is a leap year")
// // // }else if(year % 400 ===0){
// // //     console.log("this is a leap year")
// // // }else{
// // // console.log("this year " +year+ " is not a leap year")
// // // }

// // // var area = "circle";
// // // var PI = 3.14,
// // //   l = 5,
// // //   b = 4,
// // //   r = 3;

// // // if (area == "circle") {
// // //   console.log("The area of the circle is :" + PI * r ** 2);
// // // } else if (area == "triangle") {
// // //   console.log("The area of the triangle :" + (l * b) / 2);
// // // } else if (area == "rectangle") {
// // //   console.log("The raea of the rectangle :" + l * b);
// // // } else {
// // //   console.log("please anter a valid number");
// // // }

// // // switch (area) {
// // //   case "circle":
// // //     console.log("The area of the circle is :" + PI * r ** 2);
// // // break;

// // //   case "triangle":
// // //     console.log("The area of the triangle :" + (l * b) / 2);
// // //     break;

// // //   case "rectangle":
// // //     console.log("The raea of the rectangle :" + l * b);
// // //     break;

// // //   default:
// // //     console.log("please enter a valid data");
// // // }

// // // var num = 20;
// // // while(num <=10){
// // //     console.log(num)
// // //     num++
// // // }

// // // var num =0;
// // // do{
// // //     console.log(num)
// // //     num++
// // // }while(num<=10)

// // // for (let i = 1; i <= 10; i++) {
// // //   let tableOf = 8;
// // //   console.log(tableOf + "*" + i + "=" + tableOf * i);
// // // }

// // // a,b is the parametre
// // // function sum(a,b){
// // // let total = a+b;
// // // console.log(total)
// // // }

// // // sum(20,30) //20,30 is the argument
// // // sum(40,30)
// // // sum()

// // // function benefit is DRY (do not repeat yourself)

// // const person = { name: "john", age: 45 };
// // const sPerson = { ...person };

// // console.log(person);
// // console.log(sPerson);

// // spread operator (...) is when you want to expand the array or object.
// //rest operator (...) is when you are using function to get all the parameters or may be rest of the parameters

// var tableOf = 9;
// var result = 0;
// for (let i = 1; i <= 10; i++) {
//   let result = tableOf + "*" + i + "=" + tableOf * i;
//   console.log(result);
// }

let str = "muhammad hamza";
