function compute()
{
    principal = parseInt(document.getElementById("principal").value);
    if (principal < 1)  { 
        alert("Enter a positive number");
    } else {
        rate = parseInt(document.getElementById("rate").value);
        years = parseInt(document.getElementById("years").value);
        multiply = principal * years * rate;
        interest = multiply / 100;
        futureyear = 2021 + years;

        document.getElementById("result").innerHTML =
            "If you deposit <span style='color:blue'>" + principal +
             "</span><br/> at an interest rate of <span style='color:blue'>" + rate + 
            "</span> %,<br/> You will receive an amount of <span style='color:blue'>" + interest +
            "</span><br/> in the year <span style='color:blue'>" + futureyear + "</span>";
    }
}

function slider() {
    ratePercent = document.getElementById("rate").value;
    document.getElementById("spanrate").textContent = ratePercent + " %";
}
         
