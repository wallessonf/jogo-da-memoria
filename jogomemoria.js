"use strict";

const cartas = [
  { id: 1, imagem: "maca.png" },
  { id: 2, imagem: "laranja.png" },
  { id: 3, imagem: "pera.png" },
  { id: 4, imagem: "banana.png" },
  { id: 1, imagem: "maca.png" },
  { id: 2, imagem: "laranja.png" },
  { id: 3, imagem: "pera.png" },
  { id: 4, imagem: "banana.png" },
];

let pontuacao = 0;

function embaralharCartas(cartas) {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
}

const embaralhada = embaralharCartas(cartas);

embaralhada.forEach((carta) => {
  const div = document.createElement("div");
  div.classList.add("errou");
  div.classList.add("card");
  div.dataset.card = carta.id;
  div.innerHTML = `
    <div class="front">?</div>
    <div class="back"><img src="${carta.imagem}" alt="carta"></div>
  `;
  document.querySelector(".game-board").appendChild(div);
});

const classCarta = document.querySelectorAll(".card");
const pontos = document.getElementById("pontos")

let cartasAbertas = [];
let bloqueado = false;

function abrir() {
  classCarta.forEach((card) => {
    card.addEventListener("click", () => {
      if (bloqueado || card.classList.contains("flipped")) return;

      card.classList.add("flipped");
      cartasAbertas.push(card);

      if (cartasAbertas.length === 2) {
        bloqueado = true;
        let valor1 = cartasAbertas[0].getAttribute("data-card");
        let valor2 = cartasAbertas[1].getAttribute("data-card");

        if (valor1 === valor2) {
          document.querySelectorAll(".flipped").forEach((card) => {
            card.classList.remove("errou");
          });
          pontuacao += 10;
          pontos.innerHTML = `Pontos: ${pontuacao}`;
          console.log(pontuacao)
        }

        setTimeout(() => {
          document.querySelectorAll(".errou").forEach((card) => {
            card.classList.remove("flipped");
          });
          cartasAbertas = [];
            bloqueado = false;
        }, 1000);
      }
    });
  });
}



abrir();


