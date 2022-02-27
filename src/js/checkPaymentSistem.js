export default function checkPaymentSistem(value, data) {
  const currentValue = value.trim();
  const currentValueLen = currentValue.length;

  const currentData = data;

  let result = null;

  currentData.forEach((item) => {
    const itemRegexp = item.regexp;
    const itemNumbLength = item.numbLength;

    if (
      itemRegexp.test(currentValue)
      && currentValueLen > 12
      && itemNumbLength.includes(currentValueLen)
    ) {
      result = item;
    }
  });

  result = result === null ? 'not determined' : result;

  return result;
}
