export function initializeButtonLight() {
    const elements = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  
    function handleClickElem(event: MouseEvent) {
      elements.forEach((id) => {
        const element = document.getElementById(id) as HTMLElement;
        element.classList.remove('selected');
      });
  
      const clickedElement = event.currentTarget as HTMLElement;
      clickedElement.classList.add('selected');
    }
  
    elements.forEach((id) => {
      const element = document.getElementById(id) as HTMLElement;
      element.addEventListener('click', handleClickElem);
    });
  }
  