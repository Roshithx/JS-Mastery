const week=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log(week.length);
console.log(week[week.length-1]);

//Insert Item to a array 
week.push("end")
week.unshift("Start")
console.log(week);
//delete an item from array
week.pop()
week.shift()
console.log(week);