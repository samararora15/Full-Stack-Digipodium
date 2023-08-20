// WAP to check if number is perfect square or not
let x1 = 36
isperfectsq = false
for(let i=1;i*i<=x1;i++)
{   
    if(i*i==x1)
    {
        isperfectsq = true
        break
    }
}
console.log(isperfectsq)

//WAP to print all perfect squares in range of 100-500
for(let i=100;i<=500;i++)
{
    for(let j=1;j*j<=i;j++)
    {
        if(j*j==i)
        {
            console.log(i);
        }
    }
}

//WAP to print fibonacci series
let a=0
let b=1
console.log(a)
console.log(b);
let sum1 = 0
for(let i=1;i<=8;i++)
{
    sum1 = a+b
    console.log(sum1)
    a = b
    b = sum1
}

//WAP to check if a number is palindrome
let num1 = 5775
let temp = 0
ispalindrome = false
for(let i=num1;i>0;i=parseInt(i/10))
{
    let k = i%10
    temp = (temp*10)+k
}
if(temp==num1)
{
    ispalindrome = true
}
console.log(ispalindrome)

//WAP to print all prime numbers is range of 100-2000
for(let i=100;i<=200;i++)
{
    isprime = true
    for(let j=2;j*j<=i;j++)
    {
        if(i%j==0)
        {
            isprime = false
        }
    }
    if(isprime)
    {
        console.log(i)
    }
}