// Función para aplicar colores aleatorios
function randomColor() {
    const colors = ['green', 'red', 'blue']; // Colores aleatorios
    return colors[Math.floor(Math.random() * colors.length)];
}
 
// Función para mostrar la imagen y cambiar el color de la letra
function showImage(element) {
    // Mostrar la imagen correspondiente
    const img = element.nextElementSibling.nextElementSibling; // Selecciona la imagen correspondiente
    img.style.display = 'block'; // Muestra la imagen
 
    // Cambiar el color de la letra seleccionada a un color aleatorio
    element.style.color = randomColor();
 
    // Cambiar el color de las letras no seleccionadas a gris
    const allLetters = document.querySelectorAll('.display-1');
    allLetters.forEach(letter => {
        if (letter !== element) {
            letter.style.color = 'gray'; // Cambia a gris
        }
    });
}
 
// Aplicar estilos iniciales
function applyInitialStyles() {
    document.querySelectorAll('.display-1').forEach(letter => {
        letter.style.color = 'gray'; // Cambiar el color de todas las letras a gris
    });
    document.querySelectorAll('h3').forEach(h3 => {
        h3.style.color = 'purple'; // Cambiar el color de todos los h3 a purpura
    });
}
 
// Llamar a la función para aplicar estilos iniciales
applyInitialStyles();