
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var taxServ = document.getElementById("taxServ").value;
    var numOfPeople = document.getElementById("peopleamt").value;


    if (billAmt === "" || taxServ == "") {
        alert("Please enter values");
        return;
    }

    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    var total = (Number(billAmt) + Number(taxServ)) / numOfPeople;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function () {
    calculateTip();

};