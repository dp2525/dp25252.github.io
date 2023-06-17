function convertCADtoUSD() {
  let cadInput = document.getElementById("cad-input");
  let usdInput = document.getElementById("usd-input");
  let result = document.getElementById("result");
  
  let cadAmount = parseFloat(cadInput.value);
  if (isNaN(cadAmount) || cadAmount < 0) {
    alert ("Invalid amount, enter valid amount in CAD Dollar.");
    return;
  }
  
  let exchangeRate = 0.8; // Conversion rate: 1 CAD = 0.8 USD
  let usdAmount = cadAmount * exchangeRate;
  result.textContent = "USD: " + usdAmount.toFixed(3);
  
  // Reset USD input field
  usdInput.value = "";
}

function convertUSDtoCAD() {
  let cadInput = document.getElementById("cad-input");
  let usdInput = document.getElementById("usd-input");
  let result = document.getElementById("result");
  
  let usdAmount = parseFloat(usdInput.value);
  if (isNaN(usdAmount) || usdAmount < 0) {
    result.textContent = "Invalid USD amount";
    alert ("Invalid amount, enter valid amount in US Dollar.");
    return;
  }
  
  let exchangeRate = 1.25; // Conversion rate: 1 USD = 1.25 CAD
  let cadAmount = usdAmount * exchangeRate;
  result.textContent = "CAD: " + cadAmount.toFixed(3);
  
  // Reset CAD input field
  cadInput.value = "";
}
