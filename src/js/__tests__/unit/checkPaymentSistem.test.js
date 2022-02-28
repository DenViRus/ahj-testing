// eslint-disable-next-line import/no-unresolved
import visa from '../../img/visa.png';
// eslint-disable-next-line import/no-unresolved
import masterCard from '../img/mastercard.png';
// eslint-disable-next-line import/no-unresolved
import americanExpress from '../img/americanexpress.png';
// eslint-disable-next-line import/no-unresolved
import discover from '../img/discover.png';
// eslint-disable-next-line import/no-unresolved
import dinersClub from '../img/dinersclub.png';
// eslint-disable-next-line import/no-unresolved
import jcb from '../img/jcb.png';
// eslint-disable-next-line import/no-unresolved
import maestro from '../img/maestro.png';
// eslint-disable-next-line import/no-unresolved
import mir from '../img/mir.png';
import cardsData from '../../cards.js';
import checkPaymentSistem from '../../checkPaymentSistem.js';

test.each([
  [
    'card Diners Club',
    '30399913419057',
    {
      paymentSistem: 'Diners Club',
      id: 'dinersClub',
      regexp: /^((54[0-9]{14})|(3[06](([0-9]{12})|([0-5][0-9]{11}))))$/,
      numbLength: [14, 16],
      logo: dinersClub,
    },
  ],
  [
    'card Visa',
    '4716864407390075',
    {
      paymentSistem: 'Visa',
      id: 'visa',
      regexp: /^4[0-9]{12}(?:[0-9]{3})(?:[0-9]{3})?$/,
      numbLength: [13, 16, 19],
      logo: visa,
    },
  ],
  [
    'card MasterCard',
    '5302229750623174',
    {
      paymentSistem: 'MasterCard',
      id: 'masterCard',
      regexp: /^((2[2-6][0-9]{14})|(27[1-2]0[0-9]{12})|(5[1-5][0-9]{14}))$/,
      numbLength: [16],
      logo: masterCard,
    },
  ],
  [
    'card American Express',
    '343839162241886',
    {
      paymentSistem: 'American Express',
      id: 'americanExpress',
      regexp: /^3[47][0-9]{13}$/,
      numbLength: [15],
      logo: americanExpress,
    },
  ],
  [
    'card Discover',
    '6011385935325417957',
    {
      paymentSistem: 'Discover',
      id: 'discover',
      regexp:
        /^6((22[1-8][2-9][6-9][0-9]{10})|(229[0-2][0-5][0-9]{10})|(011[0-9]{12})|(4[4-9][0-9]{13})|(5[0-9]{14}))(?:[0-9]{3})?$/,
      numbLength: [16, 19],
      logo: discover,
    },
  ],
  [
    'card JCB',
    '3533302680323517459',
    {
      paymentSistem: 'JCB',
      id: 'jcb',
      regexp: /^35(([2-7][0-9]{13})|(8[1-9][0-9]{12}))(?:[0-9]{3})?$/,
      numbLength: [16, 19],
      logo: jcb,
    },
  ],
  [
    'card Maestro',
    '5893231768881070',
    {
      paymentSistem: 'Maestro',
      id: 'maestro',
      regexp:
        /^(5018|5020|5038|5893|6304|6759|6761|6762|6763)[0-9]{12}(?:[0-9]{3})?$/,
      numbLength: [16, 19],
      logo: maestro,
    },
  ],
  [
    'card МИР',
    '2202474301322987',
    {
      paymentSistem: 'МИР',
      id: 'mir',
      regexp: /^220[0-9]{13}$/,
      numbLength: [16],
      logo: mir,
    },
  ],
  ['card is not determined', '220247430132298', 'not determined'],
  ['card is not determined', '000000000000000', 'not determined'],
  ['card is not determined', 'QWER0000585ty', 'not determined'],
])('it should be %s', (_, value, expected) => {
  const received = checkPaymentSistem(value, cardsData);
  expect(received).toEqual(expected);
});
