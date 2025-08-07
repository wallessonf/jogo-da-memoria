const cartas = [
  { id: 1, imagem: "maca.png" },
  { id: 2, imagem: "laranja.png" },
  { id: 3, imagem: "pera.png" },
  { id: 4, imagem: "banana.png" },
  { id: 1, imagem: "maca.png" }, 
  { id: 2, imagem: "laranja.png" },
  { id: 3, imagem: "pera.png" },
  { id: 4, imagem: "banana.png" }
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
  div.classList.add("card");
  div.dataset.card = carta.id;
  div.innerHTML = `
    <div class="front">?</div>
    <div class="back"><img src="${carta.imagem}" alt="carta"></div>
  `;
  document.querySelector(".game-board").appendChild(div);
});

const classCarta = document.querySelectorAll('.card');

classCarta.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    console.log(classCarta)
  });
});





