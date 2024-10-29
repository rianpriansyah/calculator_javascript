const tombol = document.querySelector(".container-tombol");
const layar = document.querySelector("#layar");

tombol.addEventListener("click", (e) => {
  const tombolClick = e.target.innerText;

  if (tombolClick == "C") {
    layar.value = "";
  } else if (tombolClick == "<") {
    layar.value = layar.value.slice(0, -1);
  } else if (tombolClick == "=") {
    layar.value = eval(layar.value);
  } else {
    layar.value += tombolClick;
  }
});
