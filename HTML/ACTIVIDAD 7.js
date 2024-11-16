const button = document.getElementById('randomColorButton');

button.addEventListener('mouseover', () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  button.style.setProperty('--hover-color', randomColor);
});
