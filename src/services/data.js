const genders = ["Femme", "Homme", "Enfant"];

// pour le menu mobil
export const getGenders = () => {
  return genders;
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
