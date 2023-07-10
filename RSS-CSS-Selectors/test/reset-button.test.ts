import { resetButton } from '../src/modules/reset-button';
resetButton();

describe('Button functionality', () => {
  test('should handle "click" event on the button', () => {
    const button = document.createElement('button');
    button.classList.add('menu-left__reset');

    const clickHandlerMock = jest.fn();
    button.addEventListener('click', clickHandlerMock);
    resetButton();

    button.dispatchEvent(new Event('click'));
    
    expect(clickHandlerMock).toHaveBeenCalled();
  });
});
