//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]

// 1. district having Highest +ve case 
highestCase=covid_data.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)
console.log(highestCase);
//2. district having Highest 1st dose vaccine
HighestDose=covid_data.reduce((n1,n2)=>n1[5]>n2[5]?n1:n2)
console.log(HighestDose);
//3. district having lowest death rate
LowestDeath=covid_data.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2)
console.log(LowestDeath);
//4. sort data with +ve case in descending order
positiveCase=covid_data.sort((a,b)=>(b[2]-a[2]))
console.log(positiveCase);
//5. is district with +ve cases > 15000
posCase=covid_data.filter((n1)=>n1[2]>15000)
console.log(posCase);
//6. sort data with 1st dose vaccine
SortDose=covid_data.sort((a,b)=>(a[5]- b[5]))
console.log(SortDose);
//7. Print Thrissur details
ThrissurDetails=covid_data.find((n1)=>n1[1]=="Thrissur")
console.log(ThrissurDetails);
//8. Print total number of positive cases
 
 TotalCase=covid_data.map((n1)=>n1[2]).reduce((num1,num2)=>num1+num2)
 console.log(TotalCase);
//9. Print total number of curred cases
TotalCure=covid_data.map((n1)=>n1[4]).reduce((num1,num2)=>num1+num2)
console.log(TotalCure);
//10. Print curred cases in Idukki
CuredCaseIdu=covid_data.find((n1)=>n1[1]=="Idukki")
console.log(CuredCaseIdu);
console.log(CuredCaseIdu[4]);


