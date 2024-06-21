 //date
   

  //To create a new Date object
  let mydate=new Date()
  //To convert into string to make in readable format
//   console.log(mydate.toString());
//   //To convert into specific  
//   console.log(mydate.toDateString());
//   console.log(mydate.toISOString());
//   console.log(mydate.toLocaleString());

//   let mycreatedate = new Date(2024,0,23)
//   let mycreatedate = new Date(2024,2,23,5,3,25)
//   console.log(mycreatedate.toLocaleString());

//  //In our standard date mm-dd-yy
//   let mycreatedates = new Date("06-14-2024")
//   console.log(mycreatedates.toLocaleDateString());

  let mycreatedatey = new Date("06-21-2024")
//   console.log(mycreatedatey.toLocaleString());

  //******TIMESTAMP********* */

   let mytimestamp=Date.now()
   console.log(mytimestamp);
   console.log(mycreatedatey.getTime());

 console.log(Math.floor(Date.now()/1000))

let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth() + 1);
console.log(newdate.getDay());
 





 