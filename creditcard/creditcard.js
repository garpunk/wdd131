function isCardNumberValid(number) {
  // Normally, we would contact a credit card service, but we don't know how to do that yet.
  // So to keep things simple, we will only accept one number as valid.
  return number === '1234123412341234';
}

function displayError(msg) {
  // Display error message
  document.querySelector('.errorMsg').innerHTML = msg;
}

function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';
  displayError('');

  // Get form reference
  const form = event.target;

  // Card number validation
  if (isNaN(form.cardNumber.value)) {
    errorMsg += 'Card number is not a valid number<br>';
  } else if (!isCardNumberValid(form.cardNumber.value)) {
    errorMsg += 'Card number is not a valid card number<br>';
  }

  // Expiry date validation
  let month = parseInt(form.expMonth.value);
  let year = parseInt(form.expYear.value);
  console.log(`Month: ${month}, Year: ${year}`); // Debugging

  if (!isExpiryValid(month, year)) {
    errorMsg += 'Expiration date must be in the future<br>';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return false;
  }

  return true;
}

function isExpiryValid(month, year) {
  let today = new Date();
  let expiryDate = new Date(year, month - 1); // monthIndex starts at 0

  return expiryDate > today; // Ensures the date is in the future
}

function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';
  displayError('');

  // Card number validation
  if (isNaN(this.cardNumber.value)) {
    errorMsg += 'Card number is not a valid number\n';
  } else if (!isCardNumberValid(this.cardNumber.value)) {
    errorMsg += 'Card number is not a valid card number\n';
  }

  // Expiry date validation
  let month = parseInt(this.expMonth.value);
  let year = parseInt(this.expYear.value);
  if (!isExpiryValid(month, year)) {
    errorMsg += 'Expiration date must be in the future\n';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return false;
  }

  return true;
}

document
  .querySelector('#credit-card')
  .addEventListener('submit', submitHandler);
