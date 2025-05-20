for(let i =1; i <= 5; i++){
    console.log(i);
}

let foods = ["Pizza", "Burger", "Pasta"];
for(let i = 0; i < foods.length; i++){
    console.log(foods[i]);
}

for(var item of foods){
    console.log(item);
}

for(let idx in foods){
    console.log(idx);
}

while(true){
    console.log("Hello");
    break;
}
do{
    console.log("Hello");
}
while(false);
