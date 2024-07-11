//3.	Write a for loop that prints numbers from 1 to 20, but skips multiples of 4.

   const skipnum=()=>{

     for(i=1;i<=20;i++)
     {
      if(i%4==0)
      {
        continue
      }
      console.log(i);
     }
   }
   console.log(skipnum());


