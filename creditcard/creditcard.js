function isCardNumberValid(number) {
  return number === '1234123412341234';
}

function displayError(msg) {
  document.querySelector('.errorMsg').innerHTML = msg;
}

function isExpiryValid(month, year) {
  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;

  // Convert 2-digit year to full year (assuming 2000s)
  let fullYear = 2000 + year;

  console.log(`Entered Month: ${month}, Entered Year: ${fullYear}`);
  console.log(`Current Month: ${currentMonth}, Current Year: ${currentYear}`);

  if (fullYear < currentYear) {
    return false; // Year is in the past
  }
  if (fullYear === currentYear && month < currentMonth) {
    return false; // Same year but past month
  }
  return true;
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
  if (!isExpiryValid(month, year)) {
    errorMsg += 'Expiration date must be in the future<br>';
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
