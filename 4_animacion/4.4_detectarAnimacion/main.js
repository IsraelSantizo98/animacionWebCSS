//Se trae de HTML por Id
const $cuadrado = document.getElementById("cuadrado");
// $cuadrado.addEventListener('nombre del evento', 'que hacer cuando el elemento ocurra')
//Esta funcion sirve para escuchar el final del envento en la consola del navegador
$cuadrado.addEventListener("animationend", (event) => {
  // console.log(event.animationName);
  if (event.animationName === "rebote") {
    $cuadrado.style.animationName = "cuadrado, escalera";
    $cuadrado.style.animationDuration = "3s";
  }
});
