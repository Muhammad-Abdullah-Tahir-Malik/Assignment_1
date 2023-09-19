/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
the array of magicians’ names. Because the original array will be unchanged, return the new array and store
it in a separate array. Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/



function make_great(val:string){
    let great:string="is a great macisian"
   
        show_magician(val,great);
   
}

function show_magician(val2:string,gr:string){
console.log(val2,gr);
}

let ary:string[]=["Harry Houdini","David Copperfield","Penn & Teller"];
for(let i=0;i<3;i++){
    make_great(ary[i])
}


export{}