/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]

2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/
/*

1) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count

2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/

//-------------------------------------------------------------------------------------------------------

let output =[];
let count =0;
function nonzero(nums)
{
  for(let i=0;i<nums.length;i++)
   {
   if(nums[i]!=0)
   {
    output.push(nums[i]);
   }
   else{
     count++;
   }
  }
 for(let i=0;i<count;i++)
  {
     output.splice(output.length,0,0)
  }
return output;
}
let nums = [0,1,0,3,12];
nonzero(nums)
console.log(output);
//-------------------------------------------------------------------------------------------------------
let nums1 = [0]
nonzero(nums1)
console.log(nums1);
//--------------------------------------------------------------------------------------------------------
let nums2 = [34, 7, 21, 89, 54, 10, 91, 67]
let output2 =[];
let min=nums2[0]
let max=0;
for(let i=0;i<nums2.length;i++)
{
    if(nums2[i]<min)
    {
        min=nums2[i];
        MinIndex=i;
    }
    else if(nums2[i]>max){
        max=nums2[i];
        maxIndex=i;
    }
}
console.log(min +" "+ MinIndex);
console.log(max +" "+maxIndex);
//--------------------------------------------------------------------------------------------------------
const num = [2,4,5,2,1,2];
const k = 2;
let countval=0;
for(let i=0;i<num.length;i++)
{
   if(num[i]==k)
   {
    countval++;
   }
}
console.log(countval);
//--------------------------------------------------------------------------------------------------------
console.log("value-----------------------");
const n1 = [2,4,7,8,11,14]; // sort array !!
const target = 18;
let sum=0;
for(let i=0;i<n1.length;i++)
{
    for(let j=i+1;j<n1.length;j++)
    {
         sum=sum+n1[i]+n1[j];
         if(target==sum)
         {
            console.log(n1[i]+" + "+n1[j]+ "then index value are "+i +","+j);
         }
         sum=0;
    }
  
}
//--------------------------------------------------------------------------------------------------------
let iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
//Output: resultArray = [1, 2, 3, 4, 5, 6]
for(let i=0;i<iputArray.length;i++)
{
    for(let j=i+1;j<iputArray.length;j++)
    {
         if(iputArray[i]==iputArray[j])
         {
            iputArray.splice(j,1)
         }
    }
  
}
console.log(iputArray);
//-------------------------------------------------------------------------------------------------------
