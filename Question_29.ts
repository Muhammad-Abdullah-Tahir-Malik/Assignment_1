/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
statements that check for certain fruits in your array.Make a array of your three favorite fruits and
call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/



var ary:string[]=["Banana","Apple","Orange"];
for(var i=0;i<3;i++){
    if(ary[i]=="PineApple"){
        console.log("Its not your favourite fruite\n");
    }
    else if(ary[i]=="Gava"){
        console.log("Its not your favourite food\n");
    }
    else if(ary[i]=="Orange"){
        console.log("Orange is your favourite fruit\n");
    }
    else if(ary[i]=="Apple"){
        console.log("Apple your favourite fruit\n");
    }
    else{
        console.log("Bana is your favourite fruit\n");
    }
}

export{}