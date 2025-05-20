//var function-scoped : visible throughout that entire function
//let block-scoped : only visible within the { … } block

var myName: string = "JOJO";
console.log(typeof(myName));

var money: number = 100;
console.log(typeof(money));

var canVote = true;
var i;

console.log(typeof(canVote)); //boolean
console.log(typeof(i)); ///undefined

//null is not always undefined