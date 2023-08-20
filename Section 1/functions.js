function addnums(a,b)   //method 1
{
    var c = a+b;    //var is blocked scoped keyword
    console.log(c);
}

addnums(5,10)

const calcper = function(m1,m2,m3,m4,m5)
{
    let sum = m1+m2+m3+m4+m5;
    let perc = sum/5;
    console.log(`${perc} is the percentage`);
}

calcper(86,81,92,95,89)

//NaN results when operation is done on undefined value

const fact = (n) =>
{
    let f=1;
    for(let i=n;i>=2;i--)
    {
        f=f*i;
    }
    console.log(`${f} is the factorial of ${n}`);
}

fact(5);

const isperfect = (a)=>
{
    for(let x=2;x*x<=a;x++)
    {
        if(x*x==a)
        {
            return true;
        }
    }
}

for(let i=100;i<=500;i++)
{
    if(isperfect(i))
    {
        console.log(i);
    }
}
