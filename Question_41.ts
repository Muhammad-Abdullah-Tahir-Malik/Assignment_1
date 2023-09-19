/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which
prints the name of each magician in the array.*/


let ary:string[]=["Harry Houdini","David Copperfield","Penn & Teller"];
func(ary);
function func(val:string[]){
for(let i=0;i<3;i++){
    console.log(`${val[i]}\n`);
}
}


export{}