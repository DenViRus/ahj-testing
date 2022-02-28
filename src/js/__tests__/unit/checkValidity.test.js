import checkValidity from '../../checkValidity.js';

test.each([
  ['valid card', '4716864407390075', 'valid'],
  ['valid card', '6304537970891520', 'valid'],
  ['valid card', '5370280759829269', 'valid'],
  ['valid card', '4356526549234236415', 'valid'],
  ['valid card', '6011885063199437152', 'valid'],
  ['not valid card', '332211', 'not valid'],
  ['not valid card', '', 'not valid'],
  ['not valid card', '1810280515829361', 'not valid'],
  ['not valid card', '000000000000000', 'not valid'],
  ['not valid card', '536DIY656qwer11', 'not valid'],
])('it should be %s', (_, value, expected) => {
  expect(checkValidity(value)).toBe(expected);
});
