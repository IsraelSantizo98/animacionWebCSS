/*
Sirve para modificar el punto de inicio de la rotacion
*/
body {
  display: flex;
  align - items: center;
  justify - content: center;
  height: 100vh;
  color: white;
  font - family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans - serif;
}
.wrapper {
  border: 1px solid red;
}
.itemCuadrado {
  /* Por default viene centredo, bottom, top, rigth, left */
  /* transform-origin: 50% 50%; */
  transform - origin: right top;
  width: 200px;
  height: 200px;
  background - color: #7cd900;
  margin: 20px;
  transition: 1.5s;
}
.wrapper: hover.itemCuadrado {
  background - color: blue;
  transform: rotateZ(-45deg);
  /* transform: rotateX(45deg); */
  /*transform: rotate3d(x, y, z, 45deg);*/
  /* transform: rotate3d(1, -1, 1, 360deg); */
}
