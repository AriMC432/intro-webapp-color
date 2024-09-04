// Obtener los elementos
const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');
const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');
const colorPicker = document.getElementById('colorPicker');

// Función para convertir valores RGB a hexadecimal
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// Función para convertir un valor hexadecimal a RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

// Función para actualizar el color desde los sliders
function updateColorFromRange() {
  const red = parseInt(redRange.value);
  const green = parseInt(greenRange.value);
  const blue = parseInt(blueRange.value);

  // Sincronizar los campos de entrada con los sliders
  redInput.value = red;
  greenInput.value = green;
  blueInput.value = blue;

  // Actualizar el color
  updateColor(red, green, blue);
}

// Función para actualizar el color desde los inputs
function updateColorFromInput() {
  const red = parseInt(redInput.value);
  const green = parseInt(greenInput.value);
  const blue = parseInt(blueInput.value);

  // Sincronizar los sliders con los campos de entrada
  redRange.value = red;
  greenRange.value = green;
  blueRange.value = blue;

  // Actualizar el color
  updateColor(red, green, blue);
}

// Función para actualizar el color desde el color picker
function updateColorFromPicker() {
  const hex = colorPicker.value;
  const { r, g, b } = hexToRgb(hex);

  // Actualizar los sliders y los inputs con los valores del color picker
  redRange.value = r;
  greenRange.value = g;
  blueRange.value = b;

  redInput.value = r;
  greenInput.value = g;
  blueInput.value = b;

  // Actualizar el color
  updateColor(r, g, b);
}

// Función para actualizar el cuadro de color y el código hexadecimal
function updateColor(red, green, blue) {
  const hex = rgbToHex(red, green, blue);
  colorBox.style.backgroundColor = hex;
  hexCode.textContent = hex;

  // Sincronizar el color picker con el color actual
  colorPicker.value = hex;
}

// Escuchar los cambios en los sliders
redRange.addEventListener('input', updateColorFromRange);
greenRange.addEventListener('input', updateColorFromRange);
blueRange.addEventListener('input', updateColorFromRange);

// Escuchar los cambios en los campos de entrada
redInput.addEventListener('input', updateColorFromInput);
greenInput.addEventListener('input', updateColorFromInput);
blueInput.addEventListener('input', updateColorFromInput);

// Escuchar los cambios en el color picker
colorPicker.addEventListener('input', updateColorFromPicker);

// Actualizar el color al cargar la página
updateColorFromRange();