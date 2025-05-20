
//array 

var arr : number[] = [1,2,3];
var arr2 : any[] = [1,2,3,"Hello"];

console.log(arr[0]); //same access like the others lang
console.log(arr.pop()); //returns poped data
console.log(arr); //log every elements in arr
console.log(arr.push(8)); //returns the new length of the array
console.log(arr);

//tuple 
let emp : [number, string,boolean] = [1234,"JOJO",true];

// array of tuple 
let emp2 : [number,string][] = [[1,"A"],[2,"B"]];

//enum

enum Status { 
    Done = 2,
    inProgress,
}

console.log(Status.Done); //1
console.log(Status[1]); //Done
console.log(Status.inProgress); //For any subsequent member without its own value, it will be assigned previousMemberValue + 1
console.log(Status[2]); //inProgress