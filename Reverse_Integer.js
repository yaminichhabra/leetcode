// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverseString = function(s, i) {
   
    let j = s.length -1

    while(i<j) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    return s
};
var reverse = function(x) {
    x = x.toString();
    let arr = x.split("")
    if(arr[0] == "-") {
        reverseString(arr,1)
    } else {
        reverseString(arr,0)
    }
    x= arr.join("");

    x= parseInt(x)
    if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) {
            return 0;
        }
    return x
};