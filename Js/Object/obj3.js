weatherData=[
    {district:'Thrissur',temp:32},
    {district:'Kottayam',temp:29},
    {district:'Palakkad',temp:34},
    {district:'Ernakulam',temp:33},
    {district:'Thrissur',temp:29},
    {district:'Kottayam',temp:30},
    {district:'Palakkad',temp:32},
    {district:'Ernakulam',temp:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

output={}
weatherData.forEach((item)=>{
   district=item.district
   currTemp=item.temp
   if(output.hasOwnProperty('district')){
      oldTemp=output[district]
      if(oldTemp>=currTemp){
        output[district]=oldTemp
      }else{
        output[district]=currTemp
      }
   }else{
       output[district]=currTemp
   }
})

console.log(output);
