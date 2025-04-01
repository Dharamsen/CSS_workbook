function calculatedSum(counter)
{
    let sum = 1;
    for (let i = 0; i < counter; i++) {
        sum += i;
        
    }
    return sum;
}

let a = calculatedSum(100)
console.log(a);
