/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

let str1 = "Hello World"
let n=str1.split(" ")
console.log(n[n.length-1].length);

let  str2 = "   fly me   to   the moon  ";
str2=str2.trim();
let arrVal=str2.split(" ")
console.log(arrVal[arrVal.length-1].length);

let Anagramstr1='listen';
let Anagramstr2='silent';

if(Anagramstr1.length==Anagramstr2.length)
{
    let arr1=Anagramstr1.split("");
    let arr2=Anagramstr2.split("");
    arr1.sort();
    arr2.sort();
   let strVal1=arr1.join("")
   let strVal2=arr2.join("")
    if(strVal1===strVal2)
    {
        console.log(`String is Anangram ${strVal1} = ${strVal1}`);
    }
    else
    {
        console.log(`String is not Anangram ${strVal1} != ${strVal1}`);
    }

}
else{
    console.log("String is not Anangram");
}


//palindrome

let str="madam";

let reverse="";

for(let i=str.length-1;i>=0;i--)
{
    reverse=reverse+str.charAt(i);
}
console.log(reverse);
console.log(str);
if(reverse===str)
{
    console.log(`${reverse} is a palindrome`);
}
else{
    console.log(`${reverse} is not a palindrome`);
}





