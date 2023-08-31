const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

outputBox.style.display = "none";

function calculateProfitOrLoss(initial, quantity, current) {
  if (initial > current) {
    // write for loss
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / (initial * quantity)) * 100;
    outputBox.style.color = "red";
    displayOutput(
      `Opps!😞, Sorry to say you have made a loss of ${loss} and your loss percentage is ${lossPercentage.toFixed(
        2
      )}%. Better luck next time🤗`
    );
  } else if (current > initial) {
    // write for profit
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / (initial * quantity)) * 100;
    outputBox.style.color = "green";
    displayOutput(
      `Yaay!!🤑 you have made a Profit of ${profit} and your profit percentage, that is a whooping ${profitPercentage.toFixed(
        2
      )}%. Party time!🥳`
    );
  } else {
    // write for no pain no gain
    outputBox.style.color = "white";
    displayOutput(
      `😐No Pain No Gain, and No Gain No Pain. Sounds like a gingle🤣, But you should invest better😃.`
    );
  }
}

function displayOutput(message) {
  outputBox.innerText = message;
}

function clickHandler() {
  var initialInput = Number(initialPrice.value);
  var quantityInput = Number(stocksQuantity.value);
  var currentInput = Number(currentPrice.value);

  console.log(initialInput);

  if (
    initialPrice.value <= 0 ||
    stocksQuantity.value <= 0 ||
    currentPrice.value <= 0
  ) {
    outputBox.style.display = "block";
    outputBox.style.color = "white";
    displayOutput("please enter valid values");
  } else {
    outputBox.style.display = "block";
    calculateProfitOrLoss(initialInput, quantityInput, currentInput);
  }
}

checkButton.addEventListener("click", clickHandler);
