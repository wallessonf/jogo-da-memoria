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

function embaralharCartas(cartas) {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
}

let embaralhada = embaralharCartas(cartas);

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
        }

        setTimeout(() => {
          document.querySelectorAll(".errou").forEach((card) => {
            card.classList.remove("flipped");
          });
          cartasAbertas = [];
            bloqueado = false;
        }, 5000);
      }
    });
  });
}

abrir();
