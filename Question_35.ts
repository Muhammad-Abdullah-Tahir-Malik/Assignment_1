/*Animals: Think of at least three different animals that have a common characteristic. Store the names
of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your
program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the
end of your program stating what these animals have in common. You could print a sentence such as Any of
these animals would make a great pet!*/



let animal:string[]=["Makao","Ring Neck","Cakato"];
for(let i=0;i<3;i++){
    if(animal[i]=="Makao"){
        console.log("Makao can make a good pet because they are very friendly\n");
    }
    else if(animal[i]=="Ring Neck"){
        console.log("Ring are so good in dansing and make a good pet\n");
    }
    else{
        console.log("Cakatoes are beautiful and the most tolkative\nthese all are the species of parrot\n");
    }
}

export{}