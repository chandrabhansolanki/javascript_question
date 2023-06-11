// ch 5 valiable = let, var and const
 /*var*/
/*var x = 6;
alert(x); // it will print 6 on web page.
alert("x"); */// it will print x on web page because of double/single coat use in braket.
        // var a = 5;
        // var b = x+a;
        // console.log(b);
/*let= in these we can change the value of varibles. eg.*/ 
       /* let a = 6;
        let b = 3;

        a = 20;

        let c = a*b;
        console.log(c);*/

// const= in these we cannot change the value of  varibles in prog its fixed eg.

        /*let a = 6;
        const b = 5;
        b = 15;
        let c = a+b;
        console.log(c);*/

       /* let a = "chandra";
        console.log(a);*/

//  ch 6 Operators in js

       /* let a = 10;
        let y = 5;
        a=y;
        console.log(a);*/

    //  How to use power in js

        // let a = 12;
        // let y = a ** 2; // two multiply sign show the power x2. 
        // console.log(y);

    // calculate area of triangel
         /*
        var height = prompt('Enter a integer');
        var base = prompt('Enter a integer');
        var result = (1/2*height*base);

        console.log(result);*/

    // How to use two strings in diffent varibles in js

       /* let a = "hello";
        let b = "world";
        console.log(a+" "+b);*/

        /*let a = 5;// number 
        let b = "5"; // string
        console.log(a+b);*/

// ch 7 Data Type in Js
        //All the methods are right

        /*let a = "hel'\"lo";
        console.log(a);

        let a = 'hel"lo';
        console.log(a);

        let a = "hel\"lo";
        console.log(a);*/

    // Boolen condition true or false

        /*let a = 5>6;
        console.log(a);*/
    // Array we can use multiple varrible 

        //let a = ["a", "b", "c"];

    // Object 

        //let man = {name:"chandra", age:"27"};
    
    // Type of 

       /* let a = typeof 45;
        console.log(a);

        let b = "chandra";
        console.log(typeof b);*/ // it will show which type of data stored

    // How we can use varible and string together

       /* let a = "chandra";
        alert("good morning" +a);*/
    
    // There is also other way 
         
        /*let a = "chandra"
        alert(`hello` ${x}})*/

//  ch 9 Condition in java script

        /*let age = 10;
        if(age>=14){
            alert("you can vote !");
        }
        else{
            alert("you cannot vote !");
        }*/


       /* let age = 15;
        let voteridcard = "yes";
        if(age>=14 && voteridcard == "yes"){
            alert("you can vote !");
        }
        else{
            alert("you cannot vote !");
        }*/
    
    // Nested condition operator

       /* let age =16;
        let voteridcard = "no";

        if(age>=14){            
            if(voteridcard == "yes"){ 
                alert("you can vote !");              
            }
            else{
                alert("get your voter id card");
            }
        }
        else{
            alert("you cannot vote !");
        }*/
    // Terenary Operator
        /*
        let isloggedin = 1;
        let option = isloggedin == 1 ? "logout" : "login";

        document.write(option); */
    
        // We can also use if and else condition in method

        /*let isloggedin = 1;

        if(isloggedin == 0){
            document.write('login');
        }
        else{
            document.write('logout');
        }*/

    // Ch 10 Switch statement
    // if input = 1, 'Y','Yes' output = continue...
    // if input = 0, 'N','No' output = End...
        /*
        let input;

        input = 'No';

        if(input === 1){
            document.write("continue...");
        }
        else if(input === 'Y'){
            document.write("continue...");
        }
        else if(input === 'Yes'){
            document.write("continue...");
        }
        else if(input === 0){
            document.write("End...");
        }
        else if(input === 'N'){
            document.write("End...");
        }
        else if(input === 'No'){
            document.write("End...");
        }
        else{
            document.write("wrong input");
        }*/


    // Switch cases
        /*
        let input;
        input = 'Y';

        switch(input){
            case 1:
                document.write('continue...');
                break ;
            case 'Y':
                document.write('continue...');
                break ;
            case 'Yes':
                document.write('continue...');
                break ;
            case 0:
                document.write('End...');
                break ;
            case 'N':
                document.write('End...');
                break ;
            case 'No':
                document.write('End...');
                break ;
            default :
                document.write('Wrong input...');
        }*/
    // Shortcut method of switch statement .   
      /*  let input;
            input = 'Nofdsf';

            switch(input){
                case 1:    
                case 'Y':
                case 'Yes':
                    document.write('continue...');
                    break ;
                case 0:              
                case 'N':              
                case 'No':
                    document.write('End...');
                    break ;
                default :
                    document.write('Wrong input...');
        }*/   

    // ch 11 while , do while and for loop
         
   /* let a = 1;
 
            while(a<=10){
                document.write(' chandra ');
                document.write('<br>');
                a++;
    }*/
    
            /*let counter = 1;
            let sum = 0 ;

            while(counter<=100){
                if(counter % 2 == 0){
                    sum = sum + counter ;
                }
                counter++;
            }
            document.write(sum );
            document.write('<br>');*/

   // ch 12 Break, Continue and Nested Loop 
        // Break statement
           /* let counter = 1;
            for(counter=1;counter<=10;counter++){
                if(counter == 5){
                    break;
                }
                document.write(counter);
                document.write('<br>');
            }*/

        // continue statement 
        /*let counter = 1;
        for(counter=1;counter<=10;counter++){
            if(counter == 5){
                continue;
            }
            document.write(counter);
            document.write('<br>');
        }*/
        
        // Nested loop
        /*
        let counter = 1;
        let counter2 = 1;
        for(counter=1;counter<=10;counter++){
            document.write(counter);
            document.write('<br>');

            for(counter2=1;counter2<3;counter2++){
                document.write('hello');
                document.write('<br>');
            }
        }  */

        // WE can also used "break" and "continue" function in Nested loop
        /*  
        let counter = 1;
        let counter2 = 1;
        for(counter=1;counter<=10;counter++){
            document.write(counter);
            document.write('<br>');

            for(counter2=1;counter2<3;counter2++){
                if(counter == 3){
                    break;
                }
                document.write('hello');
                document.write('<br>');
            }
        }*/

        // how we can stop outer loop by using "break" in inner loop function in js
        // we have to give "label" in outer loop to stop .
       /* 
        let counter = 1;
        let counter2 = 1;
        outer:for(counter=1;counter<=10;counter++){
            document.write(counter);
            document.write('<br>');

            for(counter2=1;counter2<3;counter2++){
                if(counter == 3){
                    break outer;
                }
                document.write('hello');
                document.write('<br>');
            }
        }*/

        // Ch 13 alert, prompt and confirm
        // prompt
            /*
            let Age = prompt('Enter your age', 15);

            if (Age != null){
                document.write(`My Age is ${Age}`);
            }
            else {  
                document.write('Age field was blank');
            }*/

            // Confirm
            /*
            let a = confirm('Do you want to delete');
            
            if(a){
                document.write('Deleted');
            }
            else{
                document.write('Not Deleted');
            }*/

        // ch 15 String Manipulation
            /*
            let str = "chandra bhan";

            console.log(str.length);*/
            /*
            let str = "chandra bhan";

            console.log(str[5]);*/
            /*
            let str = "chandra bhan";

            console.log(str.length);*/
            /*
            let str = "chandra";
            let str2 = "bhan";

            // console.log(str + str2);
            console.log(str+" hello "+str2);*/
            /*
            let str = "chandra bhan";
            if ("chandra bhan" == str){
                console.log("Equal");
            }
            else{
                console.log("Not Equal");
            }*/

        // how to combine to different word
            /*
            let str = "chandra";
            let str2 = 'bhan';
            let str3 = 'singh'
            let str4 = str.concat(" ", str2,' ', str3);
            console.log(str4);*/

        // Sub string
            /*
            let str = "This is Javascript Tutorial. It is a good tutorial.";

            let substring = str.substr(3, 27);
            console.log(substring);*/
            /*
            let str = "This is Javascript Tutorial. It is a good tutorial.";

            let substring = str.substring(3, 17);
            console.log(substring);*/

        // How to find starting position in java script
            /*
            let str = "This is Javascript Tutorial. It is a good tutorial.";

            let position = str.indexOf('is',3);
            console.log(position);*/

        // How to change whole sentence in capital or small letter
            /*
            let str = "This is Javascript Tutorial. It is a good tutorial.";

            let capital = str.toUpperCase();

            console.log(str);
            console.log(capital);*/

        // For Small Letter
            /*
            let str = "This is Javascript Tutorial. It is a good tutorial.";

            let small = str.toLowerCase();

            console.log(str);
            console.log(small);*/

        // How to replace a word or sentence from the paragraph
            /*
            let str = "This is Javascript Tutorial. It is a good tutorial.";

            let wordreplace = str.replace('Tutorial', 'Center to learn computer language');

            console.log(str);
            console.log(wordreplace);*/

        // how to find word or letter from the sentence or a paragraph.
            /*
            let str = "This is Javascript Tutorial. It is a good tutorial.";

        //  let findword = str.includes('HTML');
            let findword = str.includes('good');

            console.log(str);
            console.log(findword);*/

        // Ch 16 Array in javascript
            /*
            let book = ['maths', 12.5, 45, 'english', "Hindi"];

            console.log(book);*/

            // we can also change the element in array
            /*
            let book = ['maths', 12.5, 45, 'english', "Hindi"];

            // book[0] = "Chemistry";
            console.log(book[1]);*/

    // Ch 17 Operation on Array
        // How we can add another book in the integers
            /*
            let book = ['maths', 'science', 'English', 'Hindi'];

            // book.unshift('geography');// geography book will be add in the starting element of array
            book.push("Geography");// geography book will be add in the last element of array
            console.log(book);*/

        //How we can remove integer from array in prog.
            /*
            let book = ['maths', 'science', 'English', 'Hindi'];

            //book.shift();// starting book of array will be removed
            book.pop();// last book of array will be removed
            console.log(book);*/
        
        // How we can remove integrs from between the array in prog.
            /*
            let book = ['maths', 'science', 'English', 'Hindi'];
            
            book.splice(1, 2);
            console.log(book);*/

        // if we have to remove to all array from prog.
            /*
            let book = ['maths', 'science', 'English', 'Hindi'];

            //book = [];
            book.length = 0;
            // book.splice(0,4);

            console.log(book);*/

        // How we can find its array or varrible?
        /*
            let book = ['maths', 'science', 'English', 'Hindi'];
            //let book = 'maths';

            console.log(Array.isArray(book));*/

        // how we can conver a sentence in array
            /*
            let text = "These is my first class of js.";

            //let wardarray = text.split('s');// word will remove and reaming sentence become array
            let wardarray = text.split(' ');
            console.log(wardarray);*/

        // how we can join an array in to a varible
        /*
            let book = ['maths', 'science', 'English', 'Hindi'];

            let wordarray = book.join(' ');
            console.log(wordarray);*/

        // How we can add Two array in a prog.
            /*
            let book = ['maths', 'science', 'English', 'Hindi'];
            let book2 = ['geography', 'computer','science'];
            let book3 = ['sanskrit','bio'];
            let newbook = book2.concat(book,book3);
            console.log(newbook);*/

        // Multidimensonal Array
            /*
            let book = ['maths', 'science', 'English', 'Hindi'];

            let bookwithpages = [ //we can give as many array in one array in prog
                ['maths', '300'],
                ['science', '450'],
                ['Engkish', '360'],
                ['Hindi', '250']
            ]

            let pages = bookwithpages[1][0];
            console.log(pages);*/

        // Using loops and array together
            /*
            let book = ['maths', 'science', 'English', 'Hindi'];
            let booklength = book.length;

            console.log(booklength);
            
            for(let i=0; i<booklength;i++){
                console.log(`Element ${i} is ${book[i]}\n`);
            }*/

        // Using functions and array together
            /*
            let book = ['maths', 'science', 'English', 'Hindi'];

            book.forEach(myfu);
            function myfu(value){
                console.log(value);
            }*/

    //Ch 18 function in Java Script
         /*   
        let multable = prompt('enter the value');
            
        for(i = 1; i<= 10; i++){
            document.write(`${multable} * ${i} = ${multable*i}\n`);
            document.write('<br><br>')
        }*/

        // How we can make the "function" to use that function in anywhere in program.
        /*
           function multable(){
            let multable = prompt('enter the value');

            for(i = 1; i<= 10; i++){
                document.write(`${multable} * ${i} = ${multable*i}\n`);
                document.write('<br><br>')
            }
    
           } 
           multable();
           document.write('hello everyone \n ');
           document.write('<br><br>')
           multable();*/

    // ch 19 Parameter and Argument
                /*    
                function multable(num){
                    for(i = 1; i<= 10; i++){
                        document.write(`${num} * ${i} = ${num*i}`);
                        document.write('<br><br>')
                    }
            
                   } 
                   multable(15);
                   document.write('<br><br>')
                   multable(6);/*

            // HOw we can use multiple parameter and argument together
                /*
                function add(num1, num2){
                    document.write(`${num1} + ${num2} = ${num1+num2}`);
                }
                add(9,11);*/

    // ch 20 Argument abjective
            // how we can add infinity no by using argement method
                /*
                function add(){
                    if(arguments.length == 0){
                        console.log('No argument is passed !')
                    }
                    else{
                        let sum = 0;
                        for(let i = 0;i < arguments.length; i++){
                            sum = sum + arguments[i];
                        }
                        console.log(sum);
                    }
                }
                add(5,2,6);

                let addition = add;// we can also use function into the varible.
                add(9,3,4)*/
    // ch 21 Return a value function
            /*
            function add(a, b){
                let d = a+b;
                return d;
            }
            let c = add(9,6);
            document.write(c);*/

    // Ch 23 Anonymous Function
            /*
            let show = function(){
                console.log('hello world!');
            };
            show();*/

            // setTimeout(functionname, time);
            
            // function show(){
            //     console.log("hello!");
            // }
            // show();
            /*
            setTimeout(function (){
                console.log("Javascript");
            },3000);*/

    // ch 24 Immediately invoked function
          //  syntax of immediately invoked function
            /*
            (function (){
              console.log('Hello Every one!');
              alert('Hello Everyone!');
            })();*/


    // Ch 26 Object Properties
            /*
            let person = {
                First_Name: 'Chandra',
                Middle_Name: 'Bhan',
                Last_Name: 'Singh',
            };
            person.First_Name = 'Tonu'; //To Change the first name

            console.log(person.First_Name);
            console.log(person['Middle_Name']);*/

            // If we add New Property in Object
            /*
            let person = {
                First_Name: 'Chandra',
                Middle_Name: 'Bhan',
                Last_Name: 'Singh',
            };

                person.age = 25;
                console.log(person);*/
            // How we can delete the properties
            /*
            let person = {
                First_Name: 'Chandra',
                Middle_Name: 'Bhan',
                Last_Name: 'Singh',
            };
                person.age = 25;
                person.First_Name = 'Tonu';
                delete person.Middle_Name;
                console.log(person);*/

            // iterator operator to find the person details by using "for in loop" function
            /*
            let person = {
                First_Name: 'Chandra',
                Middle_Name: 'Bhan',
                Last_Name: 'Singh',
            };
                person.age = 25;
                person.First_Name = 'Tonu';
                delete person.Middle_Name;
                for(let detail in person){
                   //console.log(detail +': '+person.detail);// it will not work 
                    console.log(detail +': '+person[detail]);// it will work
                }*/

    // Ch 27 Mehtod in Object
            // 1st method
                /*
                let person = {
                    firstName: "chandra",
                    lastName: "singh"
                };
                // we are using anonymous function

                person.abc = function(){
                    console.log("Hello every one");
                }
                perosn.abc();*/

            // 2nd method   
                /*             
                let person = {
                    firstName: "chandra",
                    lastName: "singh"
                };
                function sayhello(){
                    console.log("Hello !");
                }
                sayhello();*/

            // 3 method
          /*  let person = {
                firstName: "chandra",
                lastName: "singh",
                sayhello: function(){
                    console.log("Hi Everyone");
                }
            }
                person.sayhello();*/
            
            // 4th method
              /*  let person = {
                    firstName: "chandra",
                    lastName: "singh",
                    sayhello(){
                        console.log("Good Night");
                    }
                }
                    person.sayhello();*/

    // Ch 28 " This " keyword in javascript
            /*
            let person = {
                firstName: 'chandra',
                lastName: 'singh',
                sayhello(){
                    console.log("Hello ! I am "+ this.firstName +" and I have a "+ car.Brand +" car.");
                }
            }   
            let car = {
                Brand: 'hyundi',
                Model: 'Verna'
            }

            person.sayhello();*/

    // Ch 29 Math object
            
            // console.log(Math.PI); // PI value will generate
            // console.log(Math.E); // Eulers value will generate

        // Round off the value in JS.
            // let z = Math.round(5.5);
            // console.log(z);

        // "Trunc" it will remove point from the value.
            // let z = Math.trunc(12.3);
            // console.log(z);
        
        // How to use power value in js 
            // let z = Math.pow(8, 3);
            // console.log(z);

    // Ch 30 Generate Random no.
        // Syntax
           /* let a = Math.random(); // It will generate no between 0 to 1
            console.log(a); // no. will come in points*/
            /*
            let a = Math.floor(Math.random() * 10);// it will generate no. from 0 to 9
            console.log(a);*/

        // if we multiply with 100 it will start generating no. from 0 to 99
        // if we have to generate no. from 15 to 25 

            /*
            let a = Math.floor(Math.random() * (25-15))+15;
            console.log(a);*/

        // how to use function in random number
        /*
        function getrandom(min, max){
            let x = Math.floor(Math.random()*(max - min))+min;
            return x;
        }
        console.log(getrandom (10, 20)); // No will be generate b/w 10 to 19*/
        /*
        function getrandom(min, max){
            let x = Math.floor(Math.random()*(max - min + 1))+min;
            return x;
        }
        console.log(getrandom (10, 20)); // No will be generate b/w 10 to 20*/

    // Ch 31 Date Object
    /*
        let x = new Date();
        console.log(x); //it will Show the current date and time of your computer*/
        /*
        let x = new Date(2018, 11, 6, 8, 15, 56, 9);// (year, Month, date, hr, min, sec, milesec)
        console.log(x);*/
        
        // how to change year, date, month , hour , seccounds  from existing with new function ".set"
        /*
        let x = new Date("january 5, 2012, 12:06:15");
        x.setDay();
        console.log(x);*/

        // if we have to calculate the date after 50 days then:-
        /*
        let x = new Date ("feb 6,2019, 9:02:45");
        x.setDate(x.getDate () + 20);
        console.log(x);*/

        // how to compare date in JS.
        /*
        let x = new Date ("feb 6,2022, 9:02:45");
        let y = new Date ("feb 6,2022, 9:02:45");

        if (y > x){
            console.log("x is past date");
        }
        else if (x > y){
            console.log("x is future date");
        }
        else{
            console.log("x and y are same date");
        }*/

    // Ch 32 "New" Keyword
        /*
        var person = new Object();

        person.name = "chandra bhan singh";
        person.age = 26;

        console.log(person.name);*/
    
    // Ch 33 Property getters and setters
        
    // Ch 34 object construction function
        /*
        var student1 = {
            firstName = "chandra",
            lastName = "singh",
            age = 23,
            class: 8
        }

        var student1 = {
            firstName = "Vijay",
            lastName = "kumar",
            age = 21,
            class: 5
        }*/

        // we have shortcut of above program function
        /*
        function Student(first, last, age, cls){
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.class = cls;
        }

        // know we can add has many students as we want

        var student1 = new Student("chandra", "singh", 23, 5);
        var student2 = new Student("jay", "rathore", 20, 3);

        student1.nationality = "India"; // with these function we can only add into the object

       console.log(student2);*/


       // how to use method function to add first name or lastname
       /*
       function Student(first, last, age, cls){
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.class = cls;
        }   
        var student1 = new Student("chandra", "singh", 23, 5);
        var student2 = new Student("jay", "rathore", 20, 3);

         // these method is only applicable for the student1
        student1.name = function(){
            return this.firstName+" "+this.lastName;
        }

        console.log(student1.name());*/

        // we can also add these method function into the object constructin function 
        /*
        function Student(first, last, age, cls){
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.class = cls;
            this.nationality = "India";  
            this.name = function(){  //these method is applicable for all the student1
                return this.firstName+" "+this.lastName;
            }
        }   
        var student1 = new Student("chandra", "singh", 23, 5);
        var student2 = new Student("jay", "rathore", 20, 3);

        

        console.log(student2);*/

    // Ch 35 Object prototypes

        // function config(options) {
        //     options.duration ??= 100;
        //     options.speed ??= 25;
        //     return options;
        // }
        
        // config({ duration: 125 }); // { duration: 125, speed: 25 }
        // config({}); // { duration: 100, speed: 25 }

// testing array


// const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// const regexp = /[A-E]/gi;
// const matches_array = str.match(regexp);

// console.log(matches_array);


var str = 'After 28 years India won the world cup.'
var match = /[a-z]/;
var found = str.match(match)
console.log(str.match(match));
console.log(found);