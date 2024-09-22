var balance = 0;
var inc = 1;
var secondInc = 0;

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(formatNumberWithCommas(123456789)); // Outputs: 123,456,789



function addMoney() {
    balance += inc;
    document.getElementById("balance").innerHTML = formatNumberWithCommas(balance);
}

var firstincprice = 100;
var secondincprice = 300;
var thirdincprice = 600;
var fourthincprice = 900;
var fifthincprice = 1500;
var firstSecondincprice = 200;
var secondSecondincprice = 400;
var thirdSecondincprice = 700;
var fourthSecondincprice = 1000;
var fifthSecondincprice = 1600;
var hidden = false; // Initial state: elements are visible
var multiplier = 1.2;

// Function to add 1 to the value every second
setInterval(function() {
    balance += secondInc;
    document.getElementById("balance").innerHTML = formatNumberWithCommas(balance);
}, 1000); // 1000 milliseconds = 1 second


function hideOrShow() {
    var element1 = document.getElementById("FirstButton");
    var element2 = document.getElementById("SecondButton");
    var element3 = document.getElementById("ThirdButton");
    var element4 = document.getElementById("FourthButton");
    var element5 = document.getElementById("FifthButton");

    var buttons = [element1, element2, element3, element4, element5];

    if (hidden === false) {
        buttons.forEach(function(element) {
            element.classList.remove('visible');
            element.classList.add('hidden');
        });
        document.getElementById("hideOrShowButton").innerHTML = "Show";
        hidden = true;
    } else {
        buttons.forEach(function(element) {
            element.classList.remove('hidden');
            element.classList.add('visible');
        });
        document.getElementById("hideOrShowButton").innerHTML = "Hide";
        hidden = false;
    }
}

function hideOrShow2() {
    var element12 = document.getElementById("FirstCButton");
    var element22 = document.getElementById("SecondCButton");
    var element32 = document.getElementById("ThirdCButton");
    var element42 = document.getElementById("FourthCButton");
    var element52 = document.getElementById("FifthCButton");

    var buttons = [element12, element22, element32, element42, element52];

    if (hidden === false) {
        buttons.forEach(function(element) {
            element.classList.remove('visible');
            element.classList.add('hidden');
        });
        document.getElementById("hideOrShowButton2").innerHTML = "Show";
        hidden = true;
    } else {
        buttons.forEach(function(element) {
            element.classList.remove('hidden');
            element.classList.add('visible');
        });
        document.getElementById("hideOrShowButton2").innerHTML = "Hide";
        hidden = false;
    }
}



function addFirstIncMoney() {
    if (balance >= firstincprice) {
        inc += 1;
        balance = balance - firstincprice;
        firstincprice = Math.round(firstincprice * multiplier);
        document.getElementById("increase").innerHTML = formatNumberWithCommas(inc);
        document.getElementById("balance").innerHTML = formatNumberWithCommas(balance);
        document.getElementById("FirstPrice").innerHTML = formatNumberWithCommas(firstincprice);
    }
}

function addSecondIncMoney() {
    if (balance >= secondincprice) {
        inc += 5;
        balance = balance - secondincprice;
        secondincprice = Math.round(secondincprice * multiplier);
        document.getElementById("increase").innerHTML = formatNumberWithCommas(inc);
        document.getElementById("balance").innerHTML = formatNumberWithCommas(balance);
        document.getElementById("SecondPrice").innerHTML = formatNumberWithCommas(secondincprice);
    }
}

function addThirdIncMoney() {
    if (balance >= thirdincprice) {
        inc += 10;
        balance = balance - thirdincprice;
        thirdincprice = Math.round(thirdincprice * multiplier);
        document.getElementById("increase").innerHTML = formatNumberWithCommas(inc);
        document.getElementById("balance").innerHTML = formatNumberWithCommas(balance);
        document.getElementById("ThirdPrice").innerHTML = formatNumberWithCommas(thirdincprice);
    }
}

function addFourthIncMoney() {
    if (balance >= fourthincprice) {
        inc += 50;
        balance = balance - fourthincprice;
        fourthincprice = Math.round(fourthincprice * multiplier);
        document.getElementById("increase").innerHTML = formatNumberWithCommas(inc);
        document.getElementById("balance").innerHTML = formatNumberWithCommas(balance);
        document.getElementById("FourthPrice").innerHTML = formatNumberWithCommas(fourthincprice);
    }
}

function addFifthIncMoney() {
    if (balance >= fifthincprice) {
        inc += 100;
        balance = balance - fifthincprice;
        fifthincprice = Math.round(fifthincprice * multiplier);
        document.getElementById("increase").innerHTML = formatNumberWithCommas(inc);
        document.getElementById("balance").innerHTML = formatNumberWithCommas(balance);
        document.getElementById("FifthPrice").innerHTML = formatNumberWithCommas(fifthincprice);
    }
}

function addFirstSIncMoney() {
    if (balance >= firstSecondincprice) {
        secondInc += 1;
        balance = balance - firstSecondincprice;
        firstSecondincprice = Math.round(firstSecondincprice * multiplier);
        document.getElementById("Sincrease").innerHTML = formatNumberWithCommas(secondInc);
        document.getElementById("balance").innerHTML = formatNumberWithCommas(balance);
        document.getElementById("FirstCPrice").innerHTML = formatNumberWithCommas(firstSecondincprice);
    }
}

function addSecondSIncMoney() {
    if (balance >= secondSecondincprice) {
        secondInc += 5;
        balance = balance - secondSecondincprice;
        secondSecondincprice = Math.round(secondSecondincprice * multiplier);
        document.getElementById("Sincrease").innerHTML = formatNumberWithCommas(secondInc);
        document.getElementById("balance").innerHTML = formatNumberWithCommas(balance);
        document.getElementById("SecondCPrice").innerHTML = formatNumberWithCommas(secondSecondincprice);
    }
}

function addThirdSIncMoney() {
    if (balance >= thirdSecondincprice) {
        secondInc += 10;
        balance = balance - thirdSecondincprice;
        thirdSecondincprice = Math.round(thirdSecondincprice * multiplier);
        document.getElementById("Sincrease").innerHTML = formatNumberWithCommas(secondInc);
        document.getElementById("balance").innerHTML = formatNumberWithCommas(balance);
        document.getElementById("ThirdCPrice").innerHTML = formatNumberWithCommas(thirdSecondincprice);
    }
}

function addFourthSIncMoney() {
    if (balance >= fourthSecondincprice) {
        secondInc += 50;
        balance = balance - fourthSecondincprice;
        fourthSecondincprice = Math.round(fourthSecondincprice * multiplier);
        document.getElementById("Sincrease").innerHTML = formatNumberWithCommas(secondInc);
        document.getElementById("balance").innerHTML = formatNumberWithCommas(balance);
        document.getElementById("FourthCPrice").innerHTML = formatNumberWithCommas(fourthSecondincprice);
    }
}

function addFifthSIncMoney() {
    if (balance >= fifthSecondincprice) {
        secondInc += 100;
        balance = balance - fifthSecondincprice;
        fifthSecondincprice = Math.round(fifthSecondincprice * multiplier);
        document.getElementById("Sincrease").innerHTML = formatNumberWithCommas(secondInc);
        document.getElementById("balance").innerHTML = formatNumberWithCommas(balance);
        document.getElementById("FifthCPrice").innerHTML = formatNumberWithCommas(fifthSecondincprice);
    }
}
