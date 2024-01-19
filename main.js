/**
 MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
 */

////////////////////////////DATA//////////////////////////////
// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

const team = [
  {
    fullName: "Wayne Barnett",
    position: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg",
  },
  {
    fullName: "Angela Caroll",
    position: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },
  {
    fullName: "Walter Gordon",
    position: "Office Manager",
    photo: "walter-gordon-office-manager.jpg",
  },
  {
    fullName: "Angela Lopez",
    position: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg",
  },
  {
    fullName: "Scott Estrada",
    position: "Developer",
    photo: "scott-estrada-developer.jpg",
  },
  {
    fullName: "Barbara Ramos",
    position: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg",
  },
];

for (let i = 0; i < team.length; i++) {
  for (let key in team[i]) {
    console.log(`${key} : ${team[i][key]} `);
  }
}

const cards = document.querySelector(".cards");
const card = document.createElement("div");
card.classList.add("card");
for (let i = 0; i < team.length; i++) {
  let teamMember = team[i];
  cards.innerHTML += `<div class="card">
  <div class="card-head">
    <img
      src="./img/${teamMember.photo}"
      alt="photo team member"
    />
  </div>
  <div class="card-foot">
    <span>${teamMember.fullName}</span><br />
    <span>${teamMember.position}</span>
  </div>
</div>`;
}
