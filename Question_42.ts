/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified.*/


function make_great(val:string){
    let great:string="is a great magician";
    show_magician(val,great);
    }
    
    
    function show_magician(val1:string,val2:string){
    console.log(val1,val2);
    }
    
    make_great("Harry Houdini");
    make_great("David Copperfield");
    make_great("Penn & Teller");

    export{}