// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');
let money = 550;
let water = 400;
let milk = 540;
let coffeeBeans = 120;
let disposableCups = 9;

console.log(`The coffee machine has:\n${water}ml of water\n${milk}ml of milk`);
console.log(`${coffeeBeans} g of coffee beans\n${disposableCups} disposable cups`);
console.log(`$${money} of money`);

const buyCoffee = () => {
    const choice = input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n`)
    if (choice === '1') {
        if (water < 250) {
            console.log('Sorry, not enough water!');
        } else if (coffeeBeans < 16) {
            console.log('Sorry, not enough coffee beans!');
        } else if (disposableCups < 1) {
            console.log('Sorry, not enough disposable cups!');
        } else {
            console.log('I have enough resources, making you a coffee!');
            money += 4;
            water -= 250;
            coffeeBeans -= 16;
            disposableCups -= 1;
        }
    } else if (choice === '2') {
        if (water < 350) {
            console.log('Sorry, not enough water!');
        } else if (milk < 75) {
            console.log('Sorry, not enough milk!');
        } else if(coffeeBeans < 20) {
            console.log('Sorry, not enough coffee beans!');
        }else if(disposableCups < 1){
            console.log('Sorry, not enough disposable cups!');
        }else{
            console.log('I have enough resources, making you a coffee!');
            money += 4;
            water -= 250;
            coffeeBeans -= 16;
            disposableCups -= 1;
        }
    }
    else if (choice === '3') {
        if (water < 200) {
            console.log('Sorry, not enough water!');
        } else if (milk < 100) {
            console.log('Sorry, not enough milk!');
        } else if(coffeeBeans < 12) {
            console.log('Sorry, not enough coffee beans!');
        }else if(disposableCups < 1){
            console.log('Sorry, not enough disposable cups!');
        }else{
            console.log('I have enough resources, making you a coffee!');
            milk -= 100;
            water -= 200;
            coffeeBeans -= 12;
            disposableCups -= 1;
        }
    }
}
const fillMachine = () => {
    let howMuchWater = input(`Write how many ml of water you want to add:\n`)
    let howMuchMilk = input(`Write how many ml of milk you want to add:\n`)
    let howManyGramsCoffee = input(`Write how many grams of coffee beans you want to add:\n`);
    let numCups = input(`Write how many disposable cups you want to add:\n`);
    let newWater = water + howMuchWater;
    let newMilk = milk + howMuchMilk
    let newCoffee = coffeeBeans+ howManyGramsCoffee;
    let newCups = disposableCups + numCups;
    console.log(`The coffee machine has:\n${newWater}ml of water\n${newMilk}ml of milk`);
    console.log(`${newCoffee} g of coffee beans\n${newCups} disposable cups`);
    console.log(`$${money} of money`);
};
const takeCoffee = () => {
    console.log(`I gave you $${money}`);
    console.log(`The coffee machine has:\n${water}ml of water\n${milk}ml of milk`);
    console.log(`${coffeeBeans} g of coffee beans\n${disposableCups} disposable cups`);
    console.log(`$${money - money} of money`);
};
let whatToDo = input(`Write action (buy, fill, take):\n`);
if(whatToDo === `buy`){
    buyCoffee();
    whatToDo;
} else if(whatToDo === `fill`){
    fillMachine();
    whatToDo;
}else if(whatToDo === `take`){
    takeCoffee();
    whatToDo
}


