/* for(let i=0;i<20;i++){
    if(i % 2 !==0 )
    console.log(i)

}

var sum=0;
for(let j=0 ;j<5;j++ ){
    sum+=j
    console.log("num:",j,"sum:",sum)
}



var arr = [8,6,7,5,3,0,9]
for (var z = 0;z < arr.length; z++){
console.log(arr[z]);
}

var arr = [7,3,8,4,2,0,1];
for( let i=0 ;i< arr.length;i++){
    if(arr[i]% 2==0){
    console.log(arr[i]);
}
else {
    console.log("That is odd");

}
}
var arr=[1,3,8,-5,0,-2,4,-1];
var newArr=[];
for ( let i=0 ; i< arr.length;i++){
    if(arr[i]<0){
        newArr.push(arr[i]);
        arr[i]=arr[i]*-1;

}
else if(arr[i]==0){
    arr[i]="Zero";
}
else{
    arr[i]=arr[i]*-1;
}
}
console.log(arr);
console.log(newArr);


var testArr = [6,3,5,1,2,4];

var sum=0;
for(let i=0; i<testArr.length; i++){
    sum=sum+testArr[i]
        console.log("val",testArr[i],"sum",sum);
}

var testArr = [6,3,5,1,2,4];

var multi=0;
for(let i=0; i<testArr.length; i++){
    multi=i*testArr[i]
        console.log("val",testArr[i],"multi",multi);
}
function counter (){
    for(var num = 0 ; num <= 5; num ++){
        console.log(num);
            }
}
counter();
counter();

function greeting(){
    return"hello";
    console.log("world");
    }
    var word= greeting();
    console.log(word);

    function add(num1, num2){
        console.log("Summing Numbers!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        return sum;
    }
    var result1 = add(3,5);
    var result2 = add(4,7);
    console.log(result1);
    console.log(result2);

    function highFive(num){
        for(var i=0; i<num; i++){
            if(i == 5){
                console.log("High Five!");
                            }
            else{
               console.log(i);
            }
        }
       
    }
 Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
    function buildArr(){
var arr =[]
for (i=1 ;i<=255;i++){
    arr.push(i)
}
return arr;
    }
    var resultado= buildArr();
    console.log(resultado);
Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise
    function getsum(){
        var sum= 0;
        for ( var i=1 ; i <= 1000 ; i++){
            if(i%2==0){
                sum=sum+i;   
                console.log(i)           
            }
        }
return sum
    }
    console.log (getsum());
Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function getSumOdd(){
    var sum= 0 
    for (var i=1 ;i<=5000;i++){
        if(i%2==1){
            sum+=i;   
            console.log(i);
        }
    }
return sum;
}
console.log(getSumOdd());
Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14)
    var sum=0;
    for(var i=0;i< numArr.length;i++){
        sum=sum + numArr[i];
            }
            return sum;

}
console.log(interate([1,2,4]));
Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(numArr){
    var max = numArr[0];
    for(var i=0 ; i < numArr.length;i++){
        if ((numArr)[i]> max) {
            max=numArr[i];
        }
    }
return max;
}
console.log(findMax([-3,-5,-6,-2]))   
Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findaverage(numArr){
    var suma  = 0;
    for (var i=0;i<numArr.length;i++){
        suma= suma+numArr[i];
        var average= (suma/numArr.length);
console.log(average)
    }
    return average ;
}
console.log(findaverage([1,3,5,7,20]))

 */
/* 
Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
 newarray=[];
 function oddarray(array){
     for(x=1;x<=array;x+=2){
         newarray.push(x);
     }
return newarray;
 }
 var array=oddarray(50);
 console.log(array); */
/* impar=[];
function impares(numArr){    
    for (k=1;k<=numArr;k+=2){
      impar.push[k];
         }
         return impar;
}
var numArr=impares(50);
console.log(numArr);
 */
/* 
Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(arr, y){
  var counter = 0; 
 for(var idx = 0; idx < arr.length; idx++){
     if (arr[idx] > y){
         counter++;
     }

    }
    return counter;
 } 
console.log(greaterThanY([1,3,5,7], 2)) */
/* Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4]) */
/* function squares(arr){
    for(var idx=0 ; idx < arr.length; idx ++){
        arr[idx]=Math.pow(arr[idx],2)
    }
    console.log(arr);
}
squares([1,-2,5,10]); */
/* Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function nonegatives(arr){
    for(idx=0 ; idx< arr.length;idx++){
    
    if(arr[idx]<0){
        arr[idx]=0
    }
}
console.log(arr);
}
nonegatives([-1,2,-5]); */
/* Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr){
    var sum =0;
    var max = arr[0];
    var min = arr[0];
    for(var idx=0;idx<arr.length;idx++){
sum=sum+arr[idx]
if(arr[idx]>max){
    max=arr[idx];
    }
    else if (arr[idx]<min){
        min=arr[idx];
    }
}
var newArr=[]
newArr.push(max);
newArr.push(min);
var avg= sum/arr.length
newArr.push(avg);
return newArr;
}
console.log(maxMinAvg([2,10,-3,4])) */
/* Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
 */
/* function nonegatives(arr){
    for(idx=0 ; idx< arr.length;idx++){
    
    if(arr[idx]<0){
        arr[idx]="dojo"
    }
}
console.log(arr);
}
nonegatives([-1,2,-5]);  */
/* Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(arr){
    for (var i=0 ; i < arr.length; i++){
        if(arr[i]>0){
            arr[i]="big";
                    }
    }
return arr;
}
console.log(makeItBig([-1,3,5,7,-5])); */
/* Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function printlowreturnhigh(arr){
    var low= arr[0];
    var high=arr[0];
    for (var i=1 ; i < arr.length;i ++){
        if(arr[i]< low){
     low=arr[i];
  }else if (arr[i]>high){
      high=arr[i]
    
        }
     
    }
    console.log(low);
    return high;
}

console.log (printlowreturnhigh([50,-1,20,12])); */
/* Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array. */
/* function print2ndtolastreturnodd(arr){
    console.log(arr[arr.length-2]);
    for (var i=0;i< arr.length;i++){
        if(arr[i] %2 ==1){
            return arr[i];
        }
    }
}
console.log(print2ndtolastreturnodd([0,2,1,4,3]));
Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function doublevision(arr){
    var newarray= []
    for ( var i=0 ; i < arr.length;i ++){
        newarray.push(arr[i]*2);
            }
            return newarray;
}
console.log(doublevision([1,2,4])); */
/* Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countpositives(arr){
    var positives = 0;
    for (var i=0 ; i< arr.length;i++){
        if(arr[i]>0){
        positives++
    }
}
arr[arr.length-1]= positives;
return arr;
}
console.log(countpositives([-1,1,0,0])); */
/* Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!" */
/* function evensodds(arr){
    var odds= 0;
    var evens=0;
    for (var i=0 ; i < arr.length;i++){
        if (arr[i] % 2 == 1 ){
            odds++;
            evens=0 ;
         } else{
    evens++;
    odds=0 ;
      }
     if (odds==3){
     console.log(" that is odd");
    }else if (evens==3){
    console.log("even more so !");
                
            }
    }
}

evensodds([1,1,1,2,2,2,1,1,1]); */
/* Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr */
/* function incrementsecondarray(arr){
    for(var i=1 ; i< arr.length;i+=2 ){
        arr[i]=arr[i]+1
            }
            for (var i=0;i< arr.length;i++){
            console.log(arr[i]);
        }
return arr;
}
console.log(incrementsecondarray([1,2,3,4,5])); */
/* Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward? */
/* function previouslength(arr){
    for ( var i = arr.length-1;i>0 ; i--){
        arr[i]= arr [i-1].length;
    }
    return arr;
}

console.log(previouslength(["hello","dojo","awesome"])); */
/* Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array. */
/* function sevenmore(arr){
    var newarr =[]
    for(var i=0 ; i<arr.length;i++){

    newarr.push(arr[i]+7);
    }
return newarr
}
console.log(sevenmore([0,1,2,3,4,5])); */
/* Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr){
    for (i=0 ; i< arr.length/2;i ++){
    var temp = arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;

}
return arr ;
}
console.log(reverse([3,1,6,4,2,5])); */
/* Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5]. */
/* function negative(arr){
    newarr=[]
    for (i=0; i< arr.length;i ++){
        if(arr[i]>0 ){
            arr[i]=arr[i]*-1 ;
          newarr.push(arr[i]);
        }else{
            newarr.push(arr[i]);
        }

    }
    return newarr;
}
console.log(negative([1,-3,5])); */
/* Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time. */
/* function swaptowardcenter(arr){
    for (var i=0;i< arr.length/2;i+=2){
    var temp = arr[i];
    arr[i]=arr=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;

}
return arr ;
}
console.log(swaptowardcenter([1,2,3,4,5,6])); */
/* Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scalearray(arr,num){
    for (var i=0 ; i < arr.length ; i ++){
        arr[i]=arr[i]*num
    }
return arr
}
console.log(scalearray([1,2,3,4],4)); */

/* var dojo = {};                                 // creates an empty object
dojo = {
  name: 'Coding Dojo',                         // property can store a string
  number_of_students: 25,                      // property can store a number
  instructors: ['Andrew', 'Michael', 'Jay'],   // property can store arrays
  location: {                                  // property can even store another object!
    city: 'San Jose',
    state: 'CA',
    zipcode: 95112
  }
}                                              // access object properties with dot (.) notation
console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
console.log(dojo["name"]);
 */
var users = [{nombre: "Michael", edad:37}, {nombre: "John", edad:30}, {nombre: "David", edad:27}];

// print John's age
console.log(users[1].edad);

// print the name of the second object
console.log(users[2].nombre);

// print the name and age of each user using a for loop
for (var i = 0; i < users.length; i++){
    console.log(users[i].nombre, "-", users[i].edad);
}