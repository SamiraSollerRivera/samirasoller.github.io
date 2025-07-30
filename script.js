const escribir = document.querySelector(".escritura");
const palabras = ["Programadora", "Desarrolladora", "Diseñadora Web"];
let i = 0;
let j = 0;
let escribiendo = true;

function efectoEscritura() {
  escribir.textContent = palabras[i].slice(0, j);

  if (escribiendo) {
    if (j < palabras[i].length) {
      j++;
    } else {
      escribiendo = false;
      setTimeout(efectoEscritura, 1000);
      return;
    }
  } else {
    if (j > 0) {
      j--;
    } else {
      escribiendo = true;
      i = (i + 1) % palabras.length;
    }
  }

  setTimeout(efectoEscritura, 120);
}

efectoEscritura();

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("activo");
});

