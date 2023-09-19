/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function
should have one parameter that collects as many items as the function call provides, and it should print
a summary of the sandwich that is being ordered. Call the function three times, using a different number
of arguments each time.*/



let sandwitch:string[]=["Chicken","Egg","Mayo","Cheez"];
for(let i=0;i<4;i++){
    fun(sandwitch[i]);
}

function fun(val:string){
console.log(val+"\n");
}

export{}