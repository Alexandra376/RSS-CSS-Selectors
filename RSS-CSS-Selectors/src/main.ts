import {
  getMenuItems,
  getTable,
  getTableWrapper,
  getWindowModal,
  getInputWindow,
  getInput,
  getEditor,
  getButton,
  getTableStrobe,
  getTableWindow,
  getTargetElementOne,
  getTargetElementTwo,
  getTargetElementThree,
  getTargetElementFour,
  getTargetElementFive,
  getTargetElementSix,
  getTargetElementSeven,
  getTargetElementEight,
  getTargetElementNine,
  getTargetElementTen,
} from './modules/selectors';

const menuItems = getMenuItems();
const table = getTable();
const tableWrapper = getTableWrapper();
const windowModal = getWindowModal();
const inputWindow = getInputWindow();
const input = getInput();
const editor = getEditor();
const button = getButton();
const tableStrobe = getTableStrobe();
const tableWindow = getTableWindow();
const targetElementOne = getTargetElementOne();
const targetElementTwo = getTargetElementTwo();
const targetElementThree = getTargetElementThree();
const targetElementFour = getTargetElementFour();
const targetElementFive = getTargetElementFive();
const targetElementSix = getTargetElementSix();
const targetElementSeven = getTargetElementSeven();
const targetElementEight = getTargetElementEight();
const targetElementNine = getTargetElementNine();
const targetElementTen = getTargetElementTen();

import { initializeButtonLight } from './modules/button-light';
initializeButtonLight();

import { initializeSelectorsOverElements } from './modules/selectors-over-elements';
initializeSelectorsOverElements();

import { initializeDOMElements } from './modules/dom-elements';
initializeDOMElements();

