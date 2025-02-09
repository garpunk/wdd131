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
  console.log(this.cardNumber.value);

  // Clear any previous errors
  displayError('');

  // Check credit card number format (should contain only digits)
  if (!/^\d+$/.test(this.cardNumber.value)) {
    errorMsg += 'Card number must contain only digits.<br>';
  } else if (this.cardNumber.value.length !== 16) {
    errorMsg += 'Card number must be 16 digits long.<br>';
  } else if (!isCardNumberValid(this.cardNumber.value)) {
    errorMsg += 'Card number is not valid.<br>';
  }

  if (errorMsg !== '') {
    // There was an error, stop the form submission and display the errors.
    displayError(errorMsg);
    return false;
  }

  // Success (you can add a success message or form submission logic here)
  alert('Card number accepted!');
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
