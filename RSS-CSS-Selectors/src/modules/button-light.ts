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
      console.log(id)
      const element = document.getElementById(id) as HTMLElement;
      element.addEventListener('click', handleClickElem);
      console.log(document.body.children[0])
      
    });
  }
  