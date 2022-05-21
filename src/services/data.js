import image from "../images/fond.jpg";
const genders = ["Femme", "Homme", "Enfant"];
const articles = [
  {
    id: 1,
    name: "GGGGGg",
    prix: 19,
    categorie: "Robes",
    gender: "Femme",
    image: image,
  },
  {
    id: 2,
    name: "GGGGGg",
    prix: 45,
    categorie: "Sacs",
    gender: "Homme",
    image: image,
  },
  {
    id: 3,
    name: "GGGGGg",
    prix: 19,
    categorie: "Robes",
    gender: "Femme",
    image: image,
  },
  {
    id: 4,
    name: "GGGGGg",
    prix: 19,
    categorie: "Robes",
    gender: "Femme",
    image: image,
  },
  {
    id: 5,
    name: "dfgdfg",
    prix: 19,
    categorie: "Vestes",
    gender: "Femme",
    image: image,
  },
  {
    id: 6,
    name: "GGGGGg",
    prix: 19,
    categorie: "Sacs",
    gender: "Femme",
    image: image,
  },
  {
    id: 7,
    name: "GGGGGg",
    prix: 19,
    categorie: "Robes",
    gender: "Femme",
    image: image,
  },
  {
    id: 8,
    name: "GGGGGg",
    prix: 19,
    categorie: "Robes",
    image: image,
  },
  {
    id: 9,
    name: "GGGGGg",
    prix: 19,
    categorie: "Robes",
    image: image,
  },
  {
    id: 10,
    name: "GGGGGg",
    prix: 19,
    categorie: "Vestes",
    gender: "Homme",
    image: image,
  },
];
// pour le menu mobil
export const getGenders = () => {
  return genders;
};

export const getArticles = (cat, gen) => {
  console.log("cat = ", cat);
  return articles.filter(
    (article) => article.categorie === cat && article.gender === gen
  );
};

export const getArticleById = (id) => {
  console.log("id = ", typeof id);
  return articles.find((article) => article.id == id);
};
const categories = [
  {
    name: "Femme",
    items: ["Robes", "Vestes", "Blouses", "Sacs"],
  },
  {
    name: "Homme",
    items: ["Hauts", "Jeans", "Vestes", "Sacs"],
  },
  {
    name: "Enfant",
    items: ["Hauts", "Bas", "Ensemble"],
  },
];

export const getCategorie = (name) => {
  let tab = categories.find((cat) => cat.name === name);
  return tab.items;
};
