//print pairs whose sum is 6

array=[2,3,4,5]
sum=6
for(i=0;i<array.length;i++)
{
    for(j=i+1;j<=array.length;j++)
    {
        if(array[i]+array[j]===sum)
        {
            console.log(`Sum: ${array[i]} + ${array[j]} `);
        }
    }
}