import Chance from "chance";
var chance = new Chance();

export const MIN = 10;
export const MAX = 9999;

const COLORS = [
  "black",
  "red",
  "white",
  "blue",
  "beige",
  "brown",
  "pink",
];

const CATEGORIES = [
  "блузка",
  "футболка",
  "свитшот",
  "рубашка",
  "брюки",
  "джинсы",
  "свитер",
  "пиджак",
  "юбка",
  "шорты",
];
const IMG = [
  "img/1.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
  "img/6.png",
  "img/7.png",
  "img/8.png",
  "img/9.png",
  "img/10.png",
  "img/11.png",
  "img/12.png",
];

export const generateItem = (n) => {
  let items = Array.from({ length: n }, () => ({
    id: chance.hammertime(),
    name: chance.word(),
    description: chance.sentence({ words: 8 }),
    color:
      COLORS[
        chance.integer({
          min: 0,
          max: COLORS.length - 1,
        })
      ],
    category:
      CATEGORIES[
        chance.integer({
          min: 0,
          max: CATEGORIES.length - 1,
        })
      ],
    price: chance.integer({ min: MIN, max: MAX }),
    rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
    imageUrl:
      IMG[chance.integer({ min: 0, max: IMG.length - 1 })],
  }));

  return items;
};
