let nome = document.querySelector(".name");
let saida1 = document.querySelector(".saida1");
let saida2 = document.querySelector(".saida2");
let saida3 = document.querySelector(".saida3");

const btnExecutar = document.querySelector(".btn-executar");
const resultado = document.querySelector(".resultado");

let nota1 = document.querySelector(".nota1");
let nota2 = document.querySelector(".nota2");
let nota3 = document.querySelector(".nota3");
let nome_Final = document.querySelector(".nameExit");

btnExecutar.addEventListener("click", () => {
    nome_Final.innerHTML = nome.value;
  nota1.innerHTML = Number(saida1.value).toFixed(1);
  nota2.innerHTML = Number(saida1.value).toFixed(1);
  nota3.innerHTML = Number(saida3.value).toFixed(1);

  let media = (Number(saida1.value) + Number(saida3.value) + Number(saida2.value)) / 3;
  resultado.innerHTML = media.toFixed(1);
});
