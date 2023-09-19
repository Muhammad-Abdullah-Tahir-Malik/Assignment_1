/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try
to make one happen. Change an index in one of your programs to produce an index error. Make sure
you correct the error before closing the program.*/


const myArray: number[] = [1, 2, 3];


const outOfRangeElement = myArray[3]; 

if (outOfRangeElement === undefined) {
  console.error("Array index is out of range.");
} else {

    console.log(`Element at index 3: ${outOfRangeElement}`);