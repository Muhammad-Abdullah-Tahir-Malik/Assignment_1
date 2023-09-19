/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal
numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your utput should
read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/




let ary:number[]=[1,2,3,4,5,6,7,8,9];
let ord:string;
for(let i=0;i<9;i++){
    if(ary[i]==1){
        console.log("1st \n");
    }
    else if(ary[i]==2){
        console.log("2nd \n");
    }
    else if(ary[i]==3){
        console.log("3rd \n");
    }
    else{
        console.log(`${ary[i]}th\n`);
    }
}

ary.forEach(abc);
function abc(val:number){
    if(val==1){
                console.log("1st ");
            }
            else if(val==2){
                console.log("2nd ");
            }
            else if(val==3){
                console.log("3rd ");
            }
            else{
                console.log(`${val}th`);
            }
}

export{}