import { getMenuItems } from '../src/modules/selectors';

test('getMenuItems returns the correct menu items', () => {
  document.body.innerHTML = `
    <div class="menu-right">
      <h1>Item 1</h1>
      <h1>Item 2</h1>
      <h1>Item 3</h1>
      <h1>Item 4</h1>
      <h1>Item 5</h1>
      <h1>Item 6</h1>
      <h1>Item 7</h1>
      <h1>Item 8</h1>
      <h1>Item 9</h1>
      <h1>Item 10</h1>
    </div>
  `;
  const result = getMenuItems();
  
  expect(result.length).toBe(10);
});
