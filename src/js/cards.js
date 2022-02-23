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
    paymentSistem: 'Visa',
    id: 'visa',
    regexp: '',
    length: [13, 16, 19],
    logo: visa,
  },
  {
    paymentSistem: 'MasterCard',
    id: 'masterCard',
    regexp: '',
    length: [16],
    logo: masterCard,
  },
  {
    paymentSistem: 'American Express',
    id: 'americanExpress',
    regexp: '',
    length: [15],
    logo: americanExpress,
  },
  {
    paymentSistem: 'Discover',
    id: 'discover',
    regexp: '',
    length: [16, 19],
    logo: discover,
  },
  {
    paymentSistem: 'Diners Club',
    id: 'dinersClub',
    regexp: '',
    length: [16, 19],
    logo: dinersClub,
  },
  {
    paymentSistem: 'JCB',
    id: 'jcb',
    regexp: '',
    length: [16, 19],
    logo: jcb,
  },
  {
    paymentSistem: 'Maestro',
    id: 'maestro',
    regexp: '',
    length: [16, 19],
    logo: maestro,
  },
  {
    paymentSistem: 'МИР',
    id: 'mir',
    regexp: '',
    length: [16],
    logo: mir,
  },
];

export default cardsData;
