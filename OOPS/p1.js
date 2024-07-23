class Bank{
    accountDetails= {
        1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
        1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
        1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
        1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
    }

    //validate account number function
    validaccount(acno){
      return  this.accountDetails.hasOwnProperty(acno)
    }
    //authenticate account(acno,password)
    autheticate(acno,password){
        if(this.validaccount(acno)){
           if(this.accountDetails[acno].password==password){
            console.log("Authetication Sucessfull");
           }
           else{
            console.log("Unsucessfull");
           }
        }
        else{
            console.log("Invalid Account");
        }
    }
    //balance enquiry function
    // balanceEnq(balance){
    //     if(this.validaccount(acno)){
    //         console.log(`Account no:${acno},Current balance:${this.accountDetails[acno].balance}`);
    //     }
    //     else{
    //         console.log("no such account");
    //     }
    // }
    //function for fund transfer
    fundTransfer(fromacc,toacc,amount){
        if(this.validaccount(fromacc) && this.validaccount(toacc))
         {
             if(this.accountDetails[fromacc].balance>=amount){
                 console.log(`Before fund transfer
                     debit account balance:${this.accountDetails[fromacc].balance} 
                    credit amount balance:${this.accountDetails[toacc].balance}`);
                    this.accountDetails[fromacc].balance -= amount
                    this.accountDetails[toacc].balance +=amount
                    console.log("Transfered");
                    console.log(`After fund transfer
                        debit account balance:${this.accountDetails[fromacc].balance} 
                       credit amount balance:${this.accountDetails[toacc].balance}`);
             }    
           }
        else{
            console.log("Invalid Acc");
        }
}}

const obj1 = new Bank()
console.log(obj1.validaccount(10001)?"Valid Account":"Invalid acccount");

obj1.autheticate(1000,"userone")
// obj1.balanceEnq(1003)
obj1.fundTransfer(1000,1003,70000)
