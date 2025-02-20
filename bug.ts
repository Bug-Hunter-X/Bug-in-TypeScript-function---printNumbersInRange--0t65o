function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This will print 1, 2, 3, 4, 5 correctly

function printNumbersReverse(n: number): void {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

printNumbersReverse(5); // This will print 5, 4, 3, 2, 1 correctly

function printEvenNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumbers(10); // This will print 2, 4, 6, 8, 10 correctly

function printOddNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printOddNumbers(10); // This will print 1, 3, 5, 7, 9 correctly

//The bug is in the following function
function printNumbersInRange(start: number, end: number): void {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

printNumbersInRange(5, 10); //This will print 5,6,7,8,9,10 correctly
printNumbersInRange(10,5); //This will print nothing because the condition i<=end will never be true if start>end