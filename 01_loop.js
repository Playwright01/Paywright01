/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/

function sum()
{
    let t=0;
    for(let i=1;i<=val;i++)
    {
      t=t+i;
    }
    return t;
}

let val=5;
let sumval=sum()
console.log(`sum of ${val} is ${sumval}`);
val=10;
sumval=sum()
console.log(`sum of ${val} is ${sumval}`);

