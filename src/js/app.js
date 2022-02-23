import CardValidator from './CardValidator.js';
import cardsData from './cards.js';

const mainContainer = document.getElementById('mainContainer');
const cardValidator = new CardValidator(mainContainer, cardsData);
cardValidator.drawCardValidator();
