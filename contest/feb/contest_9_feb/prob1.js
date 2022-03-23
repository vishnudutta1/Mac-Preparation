// Given an array of non-negative integers, and a value 'sum',
// determine if there is a subset of the given set (array) with
// sum equal to given sum.

// If there is a subset whose sum is equal to the required sum 
// then print "yes" else print "no" without quotes.

var arr = [1,2,3,4,5,6,7,8,9];

var arr = arr.sort((a,b) =>a-b)

var tar = 5;

left = 0;

right = arr.length-1

var count = 0;

while(left<=right){

    if(arr[left] +arr[right] == tar){
            count++
    }

    else if (arr[left] +arr[right] > tar){
            right--
    }
}