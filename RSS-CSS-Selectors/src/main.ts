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

getMenuItems();
getTable();
getTableWrapper();
getWindowModal();
getInputWindow();
getInput();
getEditor();
getButton();
getTableStrobe();
getTableWindow();
getTargetElementOne();
getTargetElementTwo();
getTargetElementThree();
getTargetElementFour();
getTargetElementFive();
getTargetElementSix();
getTargetElementSeven();
getTargetElementEight();
getTargetElementNine();
getTargetElementTen();

import { initializeButtonLight } from './modules/button-light';
initializeButtonLight();

import { initializeSelectorsOverElements } from './modules/selectors-over-elements';
initializeSelectorsOverElements();

import { creatingDOMElementsByClick } from './modules/creating-Dom-elements-by-click';
creatingDOMElementsByClick();

import { resetButton } from './modules/reset-button';
resetButton();

import { buttonPress } from './modules/button-press';
buttonPress();
