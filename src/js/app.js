import CardValidator from './CardValidator.js';
import cardsData from './cards.js';
import CardValidatorController from './CardValidatorController.js';

const mainContainer = document.getElementById('mainContainer');
const cardValidator = new CardValidator(mainContainer, cardsData);
cardValidator.drawCardValidator();

const dataContainer = document.getElementById('mainContainer');
const cardValidatorController = new CardValidatorController(
  dataContainer,
  cardsData,
);
cardValidatorController.getValidatorData();
cardValidatorController.checkCard();
cardValidatorController.checkInput();
