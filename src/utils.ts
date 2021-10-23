export const assetsFromConponents = [
  "https://bc-bucket-dev.s3.ap-northeast-1.amazonaws.com/beer1.jpeg",
  "https://bc-bucket-dev.s3.ap-northeast-1.amazonaws.com/beer2.jpeg",
  "https://bc-bucket-dev.s3.ap-northeast-1.amazonaws.com/sawar.jpeg",
  "https://bc-bucket-dev.s3.ap-northeast-1.amazonaws.com/sawar2.jpeg",
];

export const getRandomImg = () =>
  assetsFromConponents[Math.floor(Math.random() * assetsFromConponents.length)];
