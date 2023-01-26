import images from "./images";

const crepes = [
  {
    title: 'Fettuccine crepe',
    price: '$32',
    tags: `crepe served with ice creme`,
  },
  {
    title: 'Brownies crepe',
    price: '$25',
    tags: 'crepe topped with 3 chocolate flavors',
  },
  {
    title: 'Speculoos pancakes',
    price: '$20',
    tags: 'pancake, layered with speculoos spread',
  },
  {
    title: 'chocolate fondant',
    price: '$18',
    tags: 'chocolate fondant served with ice creme',
  },
  {
    title: 'Dip N share box',
    price: '$106',
    tags: 'crepe rolls | waffles | brownies',
  },
];

const Beverages = [
  {
    title: "S'mores Milkshake",
    price: '$20',
    tags: 'toasted marshmallows with our signature vanilla and chocolate',
  },
  {
    title: "Strawberry Milkshake",
    price: '$16',
    tags: 'a burst of fresh strawberry and colorful sprinkles',
  },
  {
    title: 'Hot chocolate',
    price: '$12',
    tags: 'choice of dark or milk hot chocolate',
  },
  {
    title: 'Creme brulee latte',
    price: '$10',
    tags: 'add-on flavor',
  },
  {
    title: 'iced cappuccino',
    price: '$8',
    tags: 'add-on flavor',
  },
];

const blogs = [
  {
    title: 'THE RED MENU!',
    date: 'Sep 26, 2021',
    image: images.blog02
  },
  {
    title: 'DIPNDIP BRAND TO BECOME A STAPLE',
    date: 'Sep 26, 2021',
    image: images.blog03
  },
  {
    title: 'TWO TOP-SELLING DESSERTS OUR COOKIES',
    date: 'Sep 26, 2021',
    image: images.blog04

  },
  {
    title: 'MOCHA, COOKIES N CREAM, AND MORE!  ',
    date: 'Sep 26, 2021',
    image: images.blog05
  },
];

export default { crepes, Beverages, blogs };
