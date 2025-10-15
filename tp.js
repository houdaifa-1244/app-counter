// click color 
const cln = document.querySelectorAll(".coln");
let clicked = null; 
cln.forEach(function(clnB) {
    clnB.addEventListener("click", function() {
        if (clicked && clicked !== clnB) {
            clicked.style.backgroundColor = ""; 
        }
        clnB.style.backgroundColor = "#26c0ab"; 
        clicked = clnB;
    });
});

// input chage 
const input1 = document.getElementById("bill");
const input2 = document.getElementById("number");
const label = document.getElementById("warning"); 
input1.addEventListener("keypress", function(){
    if (input1.value.trim() != "" && (input2.value.trim() == "" || parseInt(input2.value.trim()) < 0)){
        input2.style.border = "2px solid red";
        label.style.visibility = "visible";
    }else {
        input2.style.border = "";
        label.style.visibility = "hidden";
    }
})
input2.addEventListener("keypress", function() {
    input2.style.border = ""; 
    label.style.visibility = "";
});

// calculater

document.addEventListener("DOMContentLoaded", function(){
    const billInput = document.getElementById("bill");
    const numberInput = document.getElementById("number");
    const tipButtons = document.querySelectorAll(".coln");
    const buttonCostum = document.getElementById("custom");
    const totalTip_1 = document.getElementById("total-1");
    const totalTip_2 = document.getElementById("total-2");
    const resetButton = document.querySelector(".reset");
    let tip = 0

    function calculate(){
        let billValeu = parseFloat(billInput.value) || 0;
        let namePeople = parseInt(numberInput.value) || 1;
        let tipAmount = (billValeu * tip) / 100;
        totalTip_1.textContent = `$${(tipAmount / namePeople).toFixed(2)}`
        totalTip_2.textContent = `$${((billValeu + tipAmount) / namePeople).toFixed(2)}`
        resetButton.style.backgroundColor = "#26c0ab";
    }
    
    billInput.addEventListener("keyup", calculate);
    numberInput.addEventListener("keyup", calculate);

    tipButtons.forEach(function (btn){
        btn.addEventListener("click", () => {
            tip = parseInt(btn.textContent)
            calculate()
        })
    })

    buttonCostum.addEventListener("keyup", (p) => {
        tip = parseFloat(p.target.value) || 0;
        tipButtons.forEach(function (btn){
            btn.style.backgroundColor = "";
        })
        calculate()
    })

    resetButton.addEventListener("click", function(){
        billInput.value = "";
        numberInput.value = "";
        buttonCostum.value = "";
        tip = 0;
        totalTip_1.textContent = `$0.00`;
        totalTip_2.textContent = `$0.00`;
        tipButtons.forEach(function (btn){
            btn.style.backgroundColor = "";
        })
        resetButton.style.backgroundColor = "";
    })
})