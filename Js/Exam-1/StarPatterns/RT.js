   string = ""
for(i=1;i<=4;i++) //t1 t2 /t3
{
  
    for(space=3;space>=i;space--) 
        {
           string+=" "        
     }
     for(j=1;j<=i;j++) 
      {
        string+="* "
      }
      string+="\n"
}
console.log(string);


