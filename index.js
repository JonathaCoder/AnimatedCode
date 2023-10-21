function typeWrite(elemento) {
  const textArray = elemento.innerHTML.split("");

  elemento.innerHTML = "";
  textArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 75 * i);
  });
}
const text = document.querySelector("h1");
typeWrite(text);

const text_descript = document.querySelector("h2");
typeWrite(text_descript);


function clickLocation(){
  location.href="https://github.com/JonathaCoder?tab=repositories"
}