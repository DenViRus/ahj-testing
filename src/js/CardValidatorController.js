import checkValidity from './checkValidity.js';
import checkPaymentSistem from './checkPaymentSistem.js';
import valid from '../img/valid.png';
import notvalid from '../img/notvalid.png';

export default class CardValidatorController {
  constructor(container, cards) {
    this.container = container;
    this.cards = cards;
    this.logoList = null;
    this.logos = [];
    this.validatorForm = null;
    this.validatorInput = null;
    this.validatorSignControl = null;
    this.validatorSign = null;
    this.validatorButton = null;
    this.validatorMessageContainer = null;
    this.validatorMessageValidity = null;
    this.validatorMessagePaysistem = null;
  }

  getValidatorData() {
    this.logoList = this.container.querySelector('.validator-logo-list');
    this.logos = this.logoList.querySelectorAll('.validator-logo-image');
    this.validatorForm = this.container.querySelector('.validator-form');
    this.validatorInput = this.container.querySelector('.validator-input');
    this.validatorSignControl = this.container.querySelector(
      '.validator-sign-control',
    );
    this.validatorSign = this.validatorSignControl.querySelector('.validator-sign');
    this.validatorButton = this.container.querySelector('.validator-button');
    this.validatorMessageContainer = this.container.querySelector(
      '.validator-message-container',
    );
    this.validatorMessageValidity = this.validatorMessageContainer.querySelector(
      '.validator-message-validity',
    );
    this.validatorMessagePaysistem = this.validatorMessageContainer.querySelector(
      '.validator-message-paysistem',
    );
  }

  checkCard() {
    const validatorListener1 = (event) => {
      event.preventDefault();
      const inputText = this.validatorInput.value;
      const validity = checkValidity(inputText);
      const paymentSistem = checkPaymentSistem(inputText, this.cards);
      if (validity === 'valid' && paymentSistem !== 'not determined') {
        this.logos.forEach((logo) => {
          if (logo.id === paymentSistem.id) {
            logo.classList.add('bright');
          } else {
            logo.classList.remove('bright');
          }
        });
        this.validatorInput.classList.add('valid');
        this.validatorSign.src = valid;
        this.validatorSignControl.classList.add('active');
        this.validatorMessageContainer.classList.add('active');
        this.validatorMessageValidity.classList.add('valid');
        this.validatorMessageValidity.textContent = `Credit card number: is ${validity}.`;
        this.validatorMessagePaysistem.classList.add('valid');
        this.validatorMessagePaysistem.textContent = `Payment system: is ${paymentSistem.paymentSistem}.`;
      } else if (validity === 'valid' && paymentSistem === 'not determined') {
        this.logos.forEach((logo) => {
          logo.classList.remove('bright');
        });
        this.validatorInput.classList.add('valid');
        this.validatorSign.src = valid;
        this.validatorSignControl.classList.add('active');
        this.validatorMessageContainer.classList.add('active');
        this.validatorMessageValidity.classList.add('valid');
        this.validatorMessageValidity.textContent = `Credit card number: is ${validity}.`;
        this.validatorMessagePaysistem.classList.add('not-valid');
        this.validatorMessagePaysistem.textContent = `Payment system: is ${paymentSistem}.`;
      } else {
        this.logos.forEach((logo) => {
          logo.classList.remove('bright');
        });
        this.validatorInput.classList.add('not-valid');
        this.validatorSign.src = notvalid;
        this.validatorSignControl.classList.add('active');
        this.validatorMessageContainer.classList.add('active');
        this.validatorMessageValidity.classList.add('not-valid');
        this.validatorMessageValidity.textContent = `Credit card number: is ${validity}.`;
        this.validatorMessagePaysistem.classList.add('not-valid');
        this.validatorMessagePaysistem.textContent = `Payment system: is ${paymentSistem}.`;
      }
    };
    this.validatorButton.addEventListener('click', validatorListener1);
    this.validatorForm.addEventListener('submit', validatorListener1);
  }

  checkInput() {
    const inputListener1 = (event) => {
      event.preventDefault();
      this.logos.forEach((logo) => {
        logo.classList.remove('bright');
      });
      this.validatorInput.className = 'validator-input';
      this.validatorSignControl.className = 'validator-sign-control';
      this.validatorSign.src = '';
      this.validatorMessageContainer.className = 'validator-container validator-message-container';
      this.validatorMessageValidity.className = 'validator-message-validity';
      this.validatorMessageValidity.textContent = '';
      this.validatorMessagePaysistem.className = 'validator-message-paysistem';
      this.validatorMessagePaysistem.textContent = '';
    };
    this.validatorInput.addEventListener('input', inputListener1);
  }
}
