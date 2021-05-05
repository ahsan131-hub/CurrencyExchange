const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");
const amount_one = document.getElementById("amount-one");
const amount_two = document.getElementById("amount-two");


const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

//fetch exchange rate and update dom
function calculate() {
    const c_one = currency_one.value;
    const c_two = currency_two.value;
    console.log(c_one);
    fetch(`https://api.exchangerate-api.com/v4/latest/${c_one}`)
        .then((res) => res.json())
        .then((data) => {
            let rates = data.rates[c_two];
            rate.innerText = `1 ${c_one} = ${rates} ${c_two}`;
            amount_two.value = (amount_one.value * rates).toFixed(2);
        });

}
//eveent listeners
currency_one.addEventListener('change', calculate);
currency_two.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate)
amount_two.addEventListener('input', calculate)


swap.addEventListener('click', () => {
    console.log("just clicked")
    let temp = currency_two.value;
    currency_two.value = currency_one.value;
    currency_one.value = temp;
    calculate();
})

calculate();