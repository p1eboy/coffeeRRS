const coffeSize = ['small', 'medium', 'large']; 
const coffeeType = ['cappuccino', 'latte', 'espresso', 'americano'];
let type;
let recipe;
let sugar;
let syrup;
let milkQuantity;


function makeCoffeeGreatAgain(type, size, sugar, syrup) {
  let output = 
  `Your ${coffeeType[type]} recipe is:\n
  1. Take ${coffeSize[size]} cup.\n`;
  
  if (sugar == true) {
    output += `5. Add sugar.\n`;
  }
  if (syrup == true) {
    output += `6. Add ${syrup} syrup\n`;
  }

  switch (size) {
    case 0:
      milkQuantity = 150;
      break;
    case 1:
      milkQuantity = 250;
      break;
    case 2:
      milkQuantity = 330;
      break;
  }

  switch (type) {
    case 0:
      output += `2. Add ${milkQuantity}ml of milk.\n 3. Add espresso shot.\n 4. Add shaked up warm milk.\n`;
      break;
    case 1:
      output += `2. Add ${milkQuantity + milkQuantity / 10}ml of milk.\n 3. Add espresso shot.\n 4. Add shaked up warm milk.\n`;
      break;
    case 2:
      output += '2. Add espresso shot.\n';
      break;
    case 3:
      `2. Add espresso shot.\n 3. Add ${milkQuantity}ml of water`;
  }
  return output;
}

console.log(makeCoffeeGreatAgain(1, 2, 0, 'vanila'));

function greeting(name) {
    console.log('Hello ' + name + '. Do you want some coffee?');
}

// function whatCoffeeType(type) {
//     return type = 'Your ' + coffeeType[type] + ' recipe is:';
// }

// function whatSize(size) {
//     return recipe = 'Take ' + coffeSize[size] + ' cup.';
// }

// greeting('Sergey');
// whatCoffeeType(1);
// whatSize(0);

// console.log(temp);
// console.log(recipe);

// =======================================

/*
let greetingMessage = 'What kind of coffe do you want? Cappuccino(1),\ latte(2) or espresso(3)?'
let name;
let syrup;
let coffeeTypeInt;
let coffeeTypeString;
let coffeeSizeInt;
let coffeeSizeString;
let price;
let espressoMessage = 'May I offer you a glass of water?';

name = prompt('What is your name?');
coffeeTypeInt = prompt(`Hi, ${name}! ${greetingMessage}`);

if (coffeeTypeInt == 1) {
  coffeeTypeString = 'cappuccino';
} else if (coffeeTypeInt == 2) {
  coffeeTypeString = 'latte';
} else if (coffeeTypeInt == 3) {
  coffeeTypeString = 'espresso';
  if (coffeeTypeString == 'espresso')
    console.log(espressoMessage);
} else alert("You don't choosed a coffee type!");

coffeeSizeInt = prompt('Choose a cup size. Small(1), medium(2) or large(3)', 1);

if (coffeeSizeInt == 1) {
  coffeeSizeString = 'small';
  price = '$1';
} else if (coffeeSizeInt == 2) {
  coffeeSizeString = 'medium';
  price = '$1.5';
} else if (coffeeSizeInt == 3) {
  coffeeSizeString = 'large';
  price = '$1.7'
} else alert("You don't choosed cup size!");

syrup = Number(prompt('Do you want syrup? Enter 1(yes) or 0(no):', 0));

if (syrup) {
  console.log(`${name}, your ${coffeeSizeString} ${coffeeTypeString} with syrup is done. It will be cost ${price}`);
} else {
  console.log(`${name}, your ${coffeeSizeString} ${coffeeTypeString} is done. It will be cost ${price}`);
}
*/