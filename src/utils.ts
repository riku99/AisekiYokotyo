export const assetsFromConponents = [
  "../../../assets/beer1.jpeg",
  "../../../assets/beer2.jpeg",
  "../../../assets/sawar.jpeg",
  "../../../assets/sawar2.jpeg",
];

export const getRandomImg = () =>
  assetsFromConponents[Math.floor(Math.random() * assetsFromConponents.length)];
