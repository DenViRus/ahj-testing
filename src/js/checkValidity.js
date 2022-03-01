export default function checkValidity(value) {
  const currentValue = value.trim();
  const currentValueLen = currentValue.length;
  let result = null;
  if (/\D/gi.test(currentValue) || currentValueLen < 12) {
    result = 'not valid';
  } else {
    const numArr = [];

    const ctrlNumb = parseInt(currentValue[currentValueLen - 1], 10);
    const checkNumbs = currentValue.slice(0, currentValueLen - 1);

    for (let i = checkNumbs.length - 1; i >= 0; i--) {
      const num = parseInt(checkNumbs[i], 10);
      numArr.push(num);
    }

    let sum = 0;

    for (let i = 0, len = numArr.length; i < len; i++) {
      let num = numArr[i];
      if (i % 2 === 0) {
        num *= 2;
        if (num > 9) {
          num -= 9;
        }
      }
      sum += num;
    }

    const checkSum = (10 - (sum % 10)) % 10;
    result = checkSum === ctrlNumb && sum !== 0 ? 'valid' : 'not valid';
  }

  return result;
}
