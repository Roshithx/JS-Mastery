let a=[10,11,23,34,30]
let b=[11,20,21,30,31]

for(i=0;i<a.length;i++)
{
    for(j=0;j<b.length;j++)
    {
        if(a[i]==b[j])
        {
            console.log(`Common Number:${a[i]}`)
            break
        }
    }
}