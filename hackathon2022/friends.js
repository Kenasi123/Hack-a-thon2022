
// Pratice 1 
// let friends_name = ["girl1","girl2","boy1","boy2"]
//     for (let friends= 0;friends < friends_name.length;friends++) {
       
//         console.log(friends_name[friends]);

//     }  
// Write a JavaScript program to compute the sum of the two given integers,
// If the sum is in the range 50..80 return 65 other wise return 80 

// function runIt(x,y) {


// const answer = x + y;

// if (answer >= 50 && answer <= 80) {
    
//     return 65;
//     }
// return 80; 
// } 

// console.log(runIt(80,50)) 

//Return Fuction Example 

// function sayHello(name) {
//     return "Corcoding"; 
//     console.log(`hello ${name}`);
// } 

// const returnValue = sayHello("Terry"); 

// console.log(returnValue); 


// Create an instance of the BankAccount class and make sure that the user provides initial amount 
//and accountType in order to create the BankAccount object. After that deposit $100 in the account.
//Next withdraw $50 from the account. Finally, print out the remaining balance of the account. 

//function of the class deposit and withdraw
// class  BankAccout { 
//     constructor (balance, Accountype) 
//     this.balance = balance ;
//     this.AccountType = AccountType;
// }

// function deposit(amount) 

// function withdraw(amount) 

function Pizza(inputCrust,inputSauce,inputCheese,inputToppings,inputDippings) {

this.crust = inputCrust; 
this.sauce = inputSauce; 
this.cheese = inputCheese; 
this.toppings = inputToppings; 
this.dipping = inputDippings;

//inputCheese(normal,light,extra);

// Methods //For toppings 
    this.addtoppings = function(newToppings) {
    this.toppings = newToppings; 
    
}
        
     

// else 
//     this.toppings === null;  
// }

// method for the crust

// let crustSize = ['small','medium','large'] 

// let count = 0 
//     for(let i = 0;i < crustSize.length;i++ ) {

//         console.log(crustSize[i]) 

//         if (crustSize[i] === 'small' ) { 

//             count = count + 1 
//             console.log(count)

//         }
//     }

// this.addcrustSize = function(crustSize) {

//     if (crustSize === "hand tossed") {
//         this.crust = new handTossed; 
//     }
//     else (crustSize === "brooklyn style") 
//         this.crust = new brooklynStyle; 
    
//     // else if (crustSize === "thick crust") 
      
//     //     this.crust = new thickCrust;
    
// }

//This method bakes the pizza 

this.bake = function(pizzaBaked) {

    this.bake = pizzaBaked; 
    }
}
//end of program

const person1Pizza = new Pizza("handtossed", "honeybbq", "normal","meats","ranch"); 

console.log (person1Pizza); 

//instance where someone can choose meats or non meats for each toppings 

person1Pizza.addtoppings("puppy"); 

console.log (person1Pizza); 

//person1Pizza.addcrustSize("brooklynStyle"); 

//console.log(Pizza)
