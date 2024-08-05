accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(accounts.length);
//2. print account number whose ac_type is savings
accounts.filter((item)=>item.ac_type=='savings').forEach((item)=>console.log(item.acno)
)


//3.print the balance of accnount number 1000
bal=accounts.find((item)=>item.acno==1000).balance
console.log(bal);

//4. print all gpay transactions
trans=accounts.map((item)=>item.transaction).flat(Infinity)
// console.log(trans);
gpaytrans=trans.filter((item)=>item.mode=='gpay')
console.log(gpaytrans);


//5. print all transaction whose amount > 5000
trans=accounts.map((item)=>item.transaction).flat(Infinity)
// console.log(trans);
gpaytrans=trans.filter((item)=>item.amount>5000)
console.log(gpaytrans);
//6. print credit transaction of account 1002
trans=accounts.map((item)=>item.transaction).flat(Infinity)
// console.log(trans);
credittrans=trans.filter((item)=>item.to==1002)
console.log(credittrans);

//total credit amount
amounts=credittrans.map((item)=>item.amount)
totalAmount=amounts.reduce((n1,n2)=>n1+n2)
console.log(totalAmount);

//7. print debit transaction of account 1002

//8. print transaction history of 1002
//9. print highest balance account details