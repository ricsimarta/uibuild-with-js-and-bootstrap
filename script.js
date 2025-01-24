const createCard = ({ image, name, species }) => { // 3.
  //const { image, name, species } = characterData; 2.

  /* const image = characterData.image; 1.
  const name = characterData.name;
  const species = characterData.species; */
  
  return `
    <div class="card">
      <img class="card-img-top" src="${image}" alt="character-image">

      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">species: ${species}</p>
      </div>
    </div>
  `;
}

const createCards = (charactersData) => `
  <div class="card-container">
    ${charactersData.map((characterData) => createCard(characterData)).join("")}
  </div>
`;

const createTitle = () => `<h1>Characters of Rick and Morty</h1>`;

const createDom = (data) => `
  ${createTitle()}
  ${createCards(data.results)}
`;

fetch("https://rickandmortyapi.com/api/character")
  .then(res => res.json())
  .then(data => {
    const rootElement = document.querySelector("#root");

    rootElement.insertAdjacentHTML("beforeend", createDom(data));
  });