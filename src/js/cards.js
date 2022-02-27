import visa from '../img/visa.png';
import masterCard from '../img/mastercard.png';
import americanExpress from '../img/americanexpress.png';
import discover from '../img/discover.png';
import dinersClub from '../img/dinersclub.png';
import jcb from '../img/jcb.png';
import maestro from '../img/maestro.png';
import mir from '../img/mir.png';

const cardsData = [
  {
    paymentSistem: 'Diners Club',
    id: 'dinersClub',
    regexp: /^((54[0-9]{14})|(3[06](([0-9]{12})|([0-5][0-9]{11}))))$/,
    numbLength: [14, 16],
    logo: dinersClub,
  },
  {
    paymentSistem: 'Visa',
    id: 'visa',
    regexp: /^4[0-9]{12}(?:[0-9]{3})(?:[0-9]{3})?$/,
    numbLength: [13, 16, 19],
    logo: visa,
  },
  {
    paymentSistem: 'MasterCard',
    id: 'masterCard',
    regexp: /^((2[2-6][0-9]{14})|(27[1-2]0[0-9]{12})|(5[1-5][0-9]{14}))$/,
    numbLength: [16],
    logo: masterCard,
  },
  {
    paymentSistem: 'American Express',
    id: 'americanExpress',
    regexp: /^3[47][0-9]{13}$/,
    numbLength: [15],
    logo: americanExpress,
  },
  {
    paymentSistem: 'Discover',
    id: 'discover',
    regexp:
      /^6((22[1-8][2-9][6-9][0-9]{10})|(229[0-2][0-5][0-9]{10})|(011[0-9]{12})|(4[4-9][0-9]{13})|(5[0-9]{14}))(?:[0-9]{3})?$/,
    numbLength: [16, 19],
    logo: discover,
  },
  {
    paymentSistem: 'JCB',
    id: 'jcb',
    regexp: /^35(([2-7][0-9]{13})|(8[1-9][0-9]{12}))(?:[0-9]{3})?$/,
    numbLength: [16, 19],
    logo: jcb,
  },
  {
    paymentSistem: 'Maestro',
    id: 'maestro',
    regexp:
      /^(5018|5020|5038|5893|6304|6759|6761|6762|6763)[0-9]{12}(?:[0-9]{3})?$/,
    numbLength: [16, 19],
    logo: maestro,
  },
  {
    paymentSistem: 'МИР',
    id: 'mir',
    regexp: /^220[0-9]{13}$/,
    numbLength: [16],
    logo: mir,
  },
];

export default cardsData;
