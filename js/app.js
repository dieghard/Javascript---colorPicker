const color = document.getElementById('color');
const salida = document.getElementById('salida');
color.addEventListener("input", () => {
   const value = color.value;
   salida.innerHTML = value
   salida.style.backgroundColor = value;
   salida.style.color = "#FFFF";
})