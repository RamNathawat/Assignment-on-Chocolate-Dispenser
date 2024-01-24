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
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color

function addChocolates(chocolates,color,count){
  if (count<=0){
    return "Number cannot be zero/negative"
  }
  for(let i=0;i<count;i++){
    chocolates.unshift(color);
  }
}

//Progression 2: Remove z chocolates from the top the dispenser
function removeChocolates(chocolates,number){
  if (number>chocolates.length){
    return 'Insufficient chocolates in the dispenser'
  }
  if(number<=0){
    return 'Number cannot be zero/negative'
  }
  removedArr=[];
  for(let i=0;i<number;i++){
    removedElement=chocolates.shift();
    removedArr.push(removedElement)
  }
  return removedArr
}
//Progression 3: Dispense z chocolates

function dispenseChocolates(chocolates,number){
  if (number>chocolates.length){
    return 'Insufficient chocolates in the dispenser'
  }
  if(number<=0){
    return 'Number cannot be zero/negative'
  }
  removedArr=[];
  for(let i=0;i<number;i++){
    removedArr.push(chocolates.pop())
  }
  return removedArr;
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
function noOfChocolates(chocolates){
  let obj={};

  chocolates.forEach((ele)=>{
    let key=ele;
    if(obj[key]==undefined){
      obj[key]=1;
    }
    else{
      obj[key]++;
    }
  })
  let finalArr=[];
  for(let key in obj){
    finalArr.push(obj[key])
  }
  return finalArr;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates){
      const chocolateCounts = {};
    chocolates.forEach((chocolate) => {
      chocolateCounts[chocolate] = (chocolateCounts[chocolate] || 0) + 1;
    });
    const sortedChocolates = chocolates.sort((a, b) => chocolateCounts[b] - chocolateCounts[a]);
    return sortedChocolates;
}



//Progression 7: Change z chocolates of x color to y color
function changeChocolateColor(chocolates,number, color, finalColor){

  if(number<=0){
    return 'Number cannot be zero/negative'
  }
  if(color==finalColor){
    return "Can't replace the same chocolates"
  }
  let finalArr=[];
let count=0;
for(let i=0;i<chocolates.length;i++){
  if(count==number){
    break;
  }
  if(chocolates[i]==color){
    finalArr.push(finalColor)
  }else{
    finalArr.push(chocolates[i])
  }
}
return finalArr;
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
  let chocolatesArr=chocolates.map((e)=>{
   if(e==color){
     return finalColor;
   }else{
     return e;
   }
 });

 let countOfChangedColor=0;
 chocolatesArr.forEach((e)=>{
   if(e==finalColor){
     countOfChangedColor++;
   }
 });

 console.log([countOfChangedColor, chocolatesArr])

//  return [countOfChangedColor, chocolatesArr];

 return color == finalColor
 ? "Can't replace the same chocolates"
 : 
 [countOfChangedColor, chocolatesArr] 
}
