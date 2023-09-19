/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/



var user:string[]=["Ali","Raza","Aslam","Waleed","Umer"];
for(var i=0;i<5;i++){
    if(user[i]==null){
        console.log("String is empty\n");
    }
    else{
    console.log(user[i]+" Welcome to system\n");}
}

export{}