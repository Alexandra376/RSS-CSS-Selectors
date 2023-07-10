export function resetButton() {
  const resetButton = document.querySelector('.menu-left__reset') as HTMLButtonElement | null;

  if (resetButton) {
    resetButton.addEventListener('click', function() {
      location.reload();
    });
  }
}
resetButton();
