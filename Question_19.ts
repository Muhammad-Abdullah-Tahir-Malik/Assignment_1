/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating
the number of people you are inviting to dinner.*/

var invitelist:string[]=["Mother","Dadi","Hajan Phopo"];
invitelist.forEach(fun);
function fun(name:string,index :number){
    console.log(`${index}: Dear,${name} I am Honed to invite you on dinner`);
}
