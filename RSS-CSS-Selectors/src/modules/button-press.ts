const targetElement = document.querySelector('.button-help') as HTMLElement;

export function buttonPress() {
    if (targetElement) {
      targetElement.addEventListener('click', () => {
        alert("I believe in you 🤪");
      });
    }
}
  
