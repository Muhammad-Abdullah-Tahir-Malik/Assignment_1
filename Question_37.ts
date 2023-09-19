/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size
with a different message.*/


function Large_Tshirt( size:number,messege:string){
    console.log( `${size} is the size of your T-Shirt\nThe messege that you ask for print is ${messege}`);
    }
    
    function Medium_Tshirt( size:number,messege:string){
        console.log( `${size} is the size of your T-Shirt\nThe messege that you ask for print is ${messege}`);
        }
    
        function Any_Size_Tshirt( size:string,messege:string){
            console.log( `${size} is the size of your T-Shirt\nThe messege that you ask for print is ${messege}`);
            }
    
    Large_Tshirt(45,"I Love TypeScript");
    Medium_Tshirt(32,"I Love TypeScript");
    Any_Size_Tshirt("Any Size","Any messege");


    export{}