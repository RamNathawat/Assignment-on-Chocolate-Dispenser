var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a count from 0<=a<=100

//Progression 1: Add z chocolates of x color

function addChocolates(chocolates, color, count) {
if (count <= 0) {
  return 'Number cannot be zero/negative';
  }
for (let i = 0; i < count; i++) {
  chocolates.unshift(color);
  }
}

//Progression 2: Remove z chocolates from the top the dispenser

function removeChocolates(chocolates, count) {
if (count <= 0) {
  return 'Number cannot be zero/negative';
}
if (count > chocolates.length) {
  return 'Insufficient chocolates in the dispenser';
}
const removedChocolates = chocolates.splice(0, count);
return removedChocolates;
}

//Progression 3: Dispense z chocolates

function dispenseChocolates(chocolates, count) {
if (count <= 0) {
  return 'Number cannot be zero/negative';
}
if (count > chocolates.length) {
  return 'Insufficient chocolates in the dispenser';
}
let dischoco = chocolates.slice(-count); 
return dischoco.reverse(); 
}

//Progression 4: Dispense z chocolates of x color

function dispenseChocolatesOfColor(chocolates, count, color) {
if (count <= 0) {
  return 'Number cannot be zero/negative';
}
const colorChocolates = chocolates.filter(choco => choco === color);
if (count > colorChocolates.length) {
  return 'Insufficient chocolates in the dispenser';
}
const dispensedChocolates = colorChocolates.slice(-count);
chocolates = chocolates.filter(choco => choco !== color || dispensedChocolates.indexOf(choco) === -1);
return dispensedChocolates;
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

//Progression 6: Sort chocolates based on count in each color. Return array of colors

//Progression 7: Change z chocolates of x color to y color

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

//Challenge 1: Remove one chocolate of x color from the top

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
