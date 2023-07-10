import { buttonPress } from "../src/modules/button-press";
buttonPress();

test('should handle "click" event on the button and return alert with message', () => {
  const main = document.createElement('main');
  main.className = "selection";
  const button = document.createElement('button');
  button.className = "button-help";
  button.appendChild(main);
  document.body.appendChild(button);

  const clickHandlerMock = jest.fn();
  button.addEventListener('click', clickHandlerMock);

  button.click();

  expect(clickHandlerMock).toHaveBeenCalled();
});
