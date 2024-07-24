const prompt=require('prompt-sync')({sigint:true})
let month = parseInt(prompt("Enter the month count 1-12:"));
let year = parseInt(prompt("Enter the year:"));
let days;
if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    days = 31;
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
} else if (month === 2) {
    if ((year%4 === 0 && year%100 !== 0) || (year % 400 === 0)) {
        days = 29;
    } else {
        days = 28;
    }
} else {
     days = "Invalid month";
}
console.log(`Number of days in month${month} of year ${year} is ${days} days.`)

