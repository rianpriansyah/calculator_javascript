const tombol = document.querySelector(".container-tombol");
const layar = document.querySelector("#layar");
let resetLayar = false;
let bolehHitung = false;
let tmpVal = "";
let operator = "";

tombol.addEventListener("click", (e) => {
  const tombolClick = e.target.innerText;

  if (tombolClick == "C") {
    layar.value = "";
  } else if (tombolClick == "<") {
    layar.value = layar.value.slice(0, -1);
  } else if (tombolClick == "=") {
    if (bolehHitung == true) {
      layar.value = eval(tmpVal + operator + layar.value);
      bolehHitung = false;
    }
  } else if (e.target.classList.contains("operator")) {
    if (bolehHitung == true) {
      layar.value = eval(tmpVal + operator + layar.value);
      bolehHitung = false;
    }

    tmpVal = layar.value;
    operator = tombolClick;
    resetLayar = true;
  } else {
    if (resetLayar == true) {
      layar.value = tombolClick;
      resetLayar = false;
      bolehHitung = true;
    } else {
      layar.value += tombolClick;
    }
  }
});
