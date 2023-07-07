export function initializeSelectorsOverElements() {
    const tableStrobe = document.querySelectorAll('.table') as NodeListOf<HTMLElement>;
    const tableWindow = document.querySelector('.window') as HTMLElement;
  
    tableStrobe.forEach((element) => {
      element.addEventListener('mouseover', (e) => {
        const targetElement = e.target as HTMLElement | null;
        if (targetElement && targetElement.tagName !== 'DIV') {
          if (targetElement.tagName === 'PLATE') {
            tableWindow.textContent = '<plate></plate>';
          }
          if (targetElement.tagName === 'BENTO') {
            tableWindow.textContent = '<bento></bento>';
          }
          if (targetElement.tagName === 'APPLE') {
            tableWindow.textContent = '<apple></apple>';
          }
          if (targetElement.id === 'fancy') {
            tableWindow.textContent = `<plate id="fancy"></plate>`;
          }
          if (targetElement.tagName === 'ORANGE') {
            tableWindow.textContent = '<orange></orange>';
          }
          if (targetElement.tagName === 'PICKLE') {
            tableWindow.textContent = '<pickle></pickle>';
          }
          if (targetElement.tagName === 'APPLE' && targetElement.className === 'small strobe') {
            tableWindow.textContent = `<apple class="small"></apple>`;
          }
          if (targetElement.tagName === 'ORANGE' && targetElement.className === 'small strobe') {
            tableWindow.textContent = `<orange class="small"></orange>`;
          }
        }
      });
  
      element.addEventListener('mouseout', (e) => {
        const targetElement = e.target as HTMLElement | null;
        if (targetElement) {
          tableWindow.textContent = '';
        }
      });
    });
}
  