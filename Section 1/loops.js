for(let i=1;i<=10;i++)
{
    console.log(i)
}

const num = 61
isprime = true

console.log('--------------------EndofPart--------------------')


for(let i=2; i<num; i++)
{
    if(num%i == 0)
    {
        isprime = false;
        break;
    }
}

if(isprime)
{
    console.log('Prime')
}
else
{
    console.log('Non-Prime')
}

console.log('--------------------EndofPart--------------------')


for(let i=100 ; i<=500;i++)
{
    if(i%7==0 && i%11==0)
    {
        console.log(i)
    }
}

console.log('--------------------EndofPart--------------------')

let k = 0;
let b = 127
for(let temp = b;temp>0;temp= parseInt(temp/10))
{
    let p = temp%10
    k = (k*10)+p
}
console.log(k)

console.log('--------------------EndofPart--------------------')

let k1 = 0
let b1 = 842
while(b1>0)
{
    let temp = b1%10;
    k1 = (k1*10)+temp
    b1 = parseInt(b1/10)
}
console.log(k1)