/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone
has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are
also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print
a message that the person will need to enter a new username. If a username has not been used, print a
message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/



const currentUsers: string[] = ['john', 'alice', 'bob', 'eve', 'mallory'];

 // Make another list of new usernames
 const newUsers: string[] = ['Jane', 'BOB', 'Charlie', 'eve', 'David'];

 const CUL=currentUsers.map(user=>user.toLocaleLowerCase());
 const NUL=newUsers.map(NU=>NU.toLocaleLowerCase());
 for(let i=0;i<newUsers.length;i++){
     for(let j=0;j<currentUsers.length;j++){
         if(CUL[i]==NUL[j]){
             console.log(`The name ${NUL[i]} is already taken\n`);          }
          else {
             console.log(`The name ${NUL[i]} is avaible\n`);
          }
     }
 
 }