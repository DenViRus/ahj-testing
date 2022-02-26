export default class CardValidator {
  constructor(container, cards) {
    this.container = container;
    this.cards = cards;
    this.cardValidatorBox = null;
    this.cardsEntries = [];
  }

  drawCardValidator() {
    this.cardValidatorBox = document.createElement('div');
    this.cardValidatorBox.className = 'card-validator-box';
    this.cardValidatorBox.setAttribute('id', 'cardValidatorBox');

    this.validatorLogoContainer = document.createElement('div');
    this.validatorLogoContainer.className = 'validator-container validator-logo-container';

    this.validatorLogoList = document.createElement('ul');
    this.validatorLogoList.className = 'validator-logo-list';

    this.validatorFormContainer = document.createElement('div');
    this.validatorFormContainer.className = 'validator-container validator-form-container';

    this.validatorForm = document.createElement('form');
    this.validatorForm.className = 'validator-form';

    this.validatorFormControl = document.createElement('div');
    this.validatorFormControl.className = 'validator-form-control';

    this.validatorLabel = document.createElement('label');
    this.validatorLabel.className = 'validator-label';
    this.validatorLabel.setAttribute('for', 'validatorInput');

    this.validatorInput = document.createElement('input');
    this.validatorInput.className = 'validator-input';
    this.validatorInput.setAttribute('id', 'validatorInput');
    this.validatorInput.setAttribute('data-id', 'validatorInput');
    this.validatorInput.setAttribute('autocomplete', 'off');
    this.validatorInput.setAttribute('type', 'search');
    this.validatorInput.setAttribute('maxLength', '19');
    this.validatorInput.setAttribute('placeholder', 'Enter card number');

    this.validatorSignControl = document.createElement('div');
    this.validatorSignControl.className = 'validator-sign-control';

    this.validatorSign = document.createElement('img');
    this.validatorSign.className = 'validator-sign';
    this.validatorSign.setAttribute('src', '');

    this.validatorButtonControl = document.createElement('div');
    this.validatorButtonControl.className = 'validator-button-control';

    this.validatorButton = document.createElement('button');
    this.validatorButton.className = 'validator-button';
    this.validatorButton.setAttribute('id', 'validatorButton');
    this.validatorButton.setAttribute('type', 'button');
    this.validatorButton.textContent = 'Click to Validate';

    this.validatorMessageContainer = document.createElement('div');
    this.validatorMessageContainer.className = 'validator-container validator-message-container';

    this.validatorMessage = document.createElement('p');
    this.validatorMessage.className = 'validator-message';
    this.validatorMessage.textContent = '';

    for (let i = 0, len = this.cards.length; i < len; i++) {
      this.validatorLogoItem = document.createElement('li');
      this.validatorLogoItem.className = 'validator-logo-item';

      this.validatorLogoImage = document.createElement('img');
      this.validatorLogoImage.className = 'validator-logo-image';
      this.validatorLogoImage.setAttribute('src', `${this.cards[i].logo}`);
      this.validatorLogoImage.setAttribute('alt', this.cards[i].paymentSistem);
      this.validatorLogoImage.setAttribute('id', this.cards[i].id);

      this.validatorLogoItem.append(this.validatorLogoImage);
      this.validatorLogoList.append(this.validatorLogoItem);
    }

    this.validatorFormControl.append(this.validatorLabel);
    this.validatorFormControl.append(this.validatorInput);

    this.validatorSignControl.append(this.validatorSign);

    this.validatorButtonControl.append(this.validatorButton);

    this.validatorForm.append(this.validatorFormControl);
    this.validatorForm.append(this.validatorSignControl);
    this.validatorForm.append(this.validatorButtonControl);

    this.validatorLogoContainer.append(this.validatorLogoList);
    this.validatorFormContainer.append(this.validatorForm);
    this.validatorMessageContainer.append(this.validatorMessage);

    this.cardValidatorBox.append(this.validatorLogoContainer);
    this.cardValidatorBox.append(this.validatorFormContainer);
    this.cardValidatorBox.append(this.validatorMessageContainer);

    this.container.append(this.cardValidatorBox);
  }
}
