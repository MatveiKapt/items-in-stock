const INPUT_INVALID_CLASS = 'form__input--invalid';

const isDateFormatCorrect = (dateTimeStr) => {
  const regex = /^(0[1-9]|1[0-9]|2[0-9]|3[0,1])\.(0[1-9]|1[0,2])\.([0-9]{4})\s([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;

  return {regex, testResult: regex.test(dateTimeStr)};
}

const isDateTimeValid = (day, month, year, hours, minutes, seconds) => {
  const arrMonth30Day = [4, 6, 9, 11];
  if (+month === 2 && +day > 29 || arrMonth30Day.includes(+month) && +day > 30) {
    return false;
  }

  const inputDate = new Date(year, month - 1, day, hours, minutes, seconds);
  const now = new Date();

  return inputDate <= now;
}

const validateDateTimeInput = (input) => {
  const datetimeStr = input.value;

  const { regex, testResult } = isDateFormatCorrect(datetimeStr);
  if(!testResult) {
    return false;
  }
  
  const [, day, month, year, hours, minutes, seconds] = regex.exec(datetimeStr);
  
  if(!isDateTimeValid(day, month, year, hours, minutes, seconds)) {
    return false;
  }

  return true;
}

const validatePriceInput = (input) => {
  const priceRegex = /^\d+(\.\d{2})?$/;
  const priceStr = input.value;

  if(!priceRegex.test(priceStr)) {
    return false;
  }

  return true;
}

const validateForm = (dateTimeInput, priceInput) => {
  const isDateValid = validateDateTimeInput(dateTimeInput);
  const isPriceValid = validatePriceInput(priceInput);
  
  if(!isDateValid) {
      dateTimeInput.classList.add(INPUT_INVALID_CLASS);
  }
  if(!isPriceValid) {
      priceInput.classList.add(INPUT_INVALID_CLASS);
  }

  if (isDateValid) {
    dateTimeInput.classList.remove(INPUT_INVALID_CLASS);
  }

  if (isPriceValid) {
    priceInput.classList.remove(INPUT_INVALID_CLASS);
  }

  return isDateValid && isPriceValid;
}


export {validateForm};