import PromptSync from "prompt-sync";

 const prompt = PromptSync();

 function mainMenu(){
    console.log("== Main Menu==")
    console.log("1. Greet Me")
    console.log("2. Tell a joke")
    console.log("3. Show current time")
    console.log("4. Reverse a word")
    console.log("5. Check if a number is even or odd")
    console.log("6. Calculate the square of a number")
    console.log("7. Repeat a phrase")
    console.log("8. Convert Celsius to Fahrenheit")
    console.log("9. Count down from a number")
    console.log("10. Exit")
 }

 mainMenu();

 let number = "";
 while (true){
      number = prompt ("Enter a Number to choose an action");
      const hasDigit = /[0-9]/.test(number);
  
     if (hasDigit){
        console.log("");
        break;
        } else {
            console.log("Acess denied")
        }

        }
 
 for(let i = 1; i <= 1; i++ ){
     const n1 = prompt("Hola buddy!!");
    if (n1 == 1){
        console.log("Hola buddy")
    }
 }

  while (true){
      number = prompt ("Enter a Number to choose an action");
      const hasDigit = /[0-9]/.test(number);
       mainMenu();

     if (hasDigit){
        console.log("");
        break;
        } else {
            console.log("Acess denied")
        }

        }

 for(let i = 1; i <= 1; i++ ){
     const n2 = prompt("Why did the JavaScript Developer quit his job?");
        let joke = "Because he didn't get arrays"
        console.log(joke);
    if (n2 !== 2){
        console.log()
    }
 }

 while (true){
      number = prompt ("Enter a Number to choose an action");
      const hasDigit = /[0-9]/.test(number);
       mainMenu();  

     if (hasDigit){
        console.log("");
        break;
        } else {
            console.log("Acess denied")
        }
        }

     for(let i = 1; i <= 1; i++ ){
     const n3 = prompt("It is currently 9:30am");
        console.log();
     if (n3 !== 3){
        console.log()
    }
 }

 while (true){
      number = prompt ("Enter a Number to choose an action");
      const hasDigit = /[0-9]/.test(number);
      mainMenu();

     if (hasDigit){
        console.log("");
        break;
        } else {
            console.log("Acess denied")
        }


        }

        function reverseString(str) {
            let newString = "";
            const n4 = prompt("Give me a word");
           console.log(`${n4}`);
        for(let i = str.length - 1; i >= 0; i-- ) {
            newString += str[i];
            console.log(newString);
    }
       return newString;
 } 
   reverseString('hello');


 while (true){
      number = prompt ("Enter a Number to choose an action");
      const hasDigit = /[0-9]/.test(number);
      mainMenu();

     if (hasDigit){
        console.log("");
        break;
        } else {
            console.log("Acess denied")
        }
        }

        for (let i = 1; i <= 1; i++){
            const n5 =prompt("Give me a number to indicate if even or odd")
          if ( n5 % 2 !== 0){
      console.log("Number is odd")
      console.log(n5)
      }
        if( n5 % 2 == 0){
      console.log("Number is even")
      console.log (n5)
    } 
 }
        
 while (true){
      number = prompt ("Enter a Number to choose an action");
      const hasDigit = /[0-9]/.test(number);
      mainMenu();

     if (hasDigit){
        console.log("");
        break;
        } else {
            console.log("Acess denied")
        }


        }

         
        for(let i = 1; i <= 1; i++ ){
        const n6 = prompt("Calculate the square of:");
        let number = 5;
        let square = number ** 2;
        console.log (square)
 }

 while (true){
      number = prompt ("Enter a Number to choose an action");
      const hasDigit = /[0-9]/.test(number);
      mainMenu();

     if (hasDigit){
        console.log("");
        break;
        } else {
            console.log("Acess denied")
        }


        }

            
        for(let i = 1; i <= 1; i++ ){
        const n7 = prompt("Repeat which phrase?:");
        const phrase = "OKC will be champions"
        const repeatPhrase = phrase.repeat(3);
        console.log(repeatPhrase)
 }

  while (true){
      number = prompt ("Enter a Number to choose an action");
      const hasDigit = /[0-9]/.test(number);
      mainMenu();

     if (hasDigit){
        console.log("");
        break;
        } else {
            console.log("Acess denied")
        }


        }
         function convertCelsiusToFahrenheit(){
            const n8 = prompt("Give me a celsius value");
         for(let i = 1; i <= 1; i++ ){
            const celsius = 15
            const Fahrenheit = (celsius * 1.8) + 32;
             console.log(`${celsius} degrees celsius is equal to ${Fahrenheit} degrees Fahrenheit`);
            return Fahrenheit;
           
                }
            }


 
  while (true){
      number = prompt ("Enter a Number to choose an action");
      const hasDigit = /[0-9]/.test(number);
      mainMenu();

     if (hasDigit){
        console.log("");
        break;
        } else {
            console.log("Acess denied")
        }


        }
          function simplecountdown(startNumber){
          const n9 = prompt("Give me a number to count down to zero");
         for(let i = startNumber; i >= 0; i-- ){
        console.log(i);
       }
       console.log("Countdown complete")
       }
       simplecountdown(10);
       

while (true){
      number = prompt ("Enter a Number to choose an action");
      const hasDigit = /[0-9]/.test(number);
      mainMenu();

     if (hasDigit){
        console.log("");
        break;
        } else {
            console.log("Acess denied")
        }

        }


for(let i = 1; i <= 1; i++ ){
     const n10 = prompt("Are you sure?");
        console.log();
    if (n10 !== 10){
        console.log()
    }
}


