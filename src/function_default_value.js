function defaultDiscountRate()
{
    return .10;
}

function applyDiscount(cost ,discount = defaultDiscountRate()) {
    return cost * (1 -  discount)
}

console.log(applyDiscount(100));
