/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
includes at least three people you’d like to invite to dinner. Then use your list to print a message to 
each person, inviting them to dinner.*/


var invitelist:string[]=["Mother","Dadi","Hajan Phopo"];
invitelist.forEach(fun);
function fun(name:string){
    console.log(`Dear,${name} I am Honed to invite you on dinner`);
}