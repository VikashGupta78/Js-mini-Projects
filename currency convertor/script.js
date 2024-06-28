const BASE_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;

let amount = document.querySelector(".amount input");
let dropdowns = document.querySelectorAll(".select-container select");
let msg = document.querySelector(".msg");
let btn = document.querySelector(".btn");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");

// for(let country in countryList){
//     console.log(country, countryList[country]);
// }

for(let select of dropdowns){
    for(let currCode in countryList){
        let option = document.createElement("option");
        option.innerText = currCode;
        option.value = currCode;
        //console.log(option);
        select.append(option);
        if(select.name === "from" && currCode === "USD"){
            option.selected = "selected"
        }
        else if(select.name === "to" && currCode === "INR"){
            option.selected = "selected"
        }
    }
    select.addEventListener("change", (eve)=>{
        //console.log(eve.target.value);
        updateFlag(eve.target);
    })
}

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    // console.log(element);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}
// Update flags for default selected options
updateFlag(fromCurr);
updateFlag(toCurr);

const updateExchangeRates = async ()=>{
    let inputAmt = amount.value;
    if(inputAmt === "" || inputAmt<0){
        inputAmt = 1;
        amount.value = 1;
    } 

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    //console.log(rate);
    let finalAmt = (rate*inputAmt).toFixed(2);

    msg.innerText = `${inputAmt} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
}

btn.addEventListener("click", async (e)=>{
    e.preventDefault();
    updateExchangeRates();
})

window.addEventListener("load", ()=>{
    updateExchangeRates();
})