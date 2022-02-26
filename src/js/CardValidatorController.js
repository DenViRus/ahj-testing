import checkValidity from './checkValidity.js';
import checkPaymentSistem from './checkPaymentSistem.js';
import valid from '../img/valid.png';
import invalid from '../img/invalid.png';

export default class CardValidatorController {
  constructor(container, cards) {
    this.container = container;
    this.cards = cards;
    this.logoList = null;
    this.logos = [];
    this.validatorForm = null;
    this.input = null;
    this.validatorSignControl = null;
    this.validatorSign = null;
    this.validatorButton = null;
    this.validatorMessageContainer = null;
    this.validatorMessage = null;
  }

  getValidatorData() {
    this.logoList = this.container.querySelector('.validator-logo-list');
    this.logos = this.logoList.querySelectorAll('.validator-logo-image');
    this.validatorForm = this.container.querySelector('.validator-form');
    this.input = this.container.querySelector('.validator-input');
    this.validatorSignControl = this.container.querySelector(
      '.validator-sign-control',
    );
    this.validatorSign = this.validatorSignControl.querySelector('.validator-sign');
    this.validatorButton = this.container.querySelector('.validator-button');
    this.validatorMessageContainer = this.container.querySelector(
      '.validator-message-container',
    );
    this.validatorMessage = this.validatorMessageContainer.querySelector('.validator-message');
  }

  checkCard() {
    const validatorListener1 = (event) => {
      event.preventDefault();
      const inputText = this.input.value;
      const validity = checkValidity(inputText);
      const paymentSistem = checkPaymentSistem(inputText, this.cards);

      console.log(validity, paymentSistem);

      if (validity === 'valid' && paymentSistem !== 'not determined') {
        this.logos.forEach((logo) => {
          if (logo.id === paymentSistem) {
            logo.classList.add('bright');
          } else {
            logo.classList.remove('bright');
          }
        });

        this.validatorSign.src = valid;
        this.validatorSignControl.classList.add('active');

        this.validatorMessageContainer.classList.add('active');
      }
    };
    this.validatorButton.addEventListener('click', validatorListener1);
    this.validatorForm.addEventListener('submit', validatorListener1);
  }
}
