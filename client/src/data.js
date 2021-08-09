import faker from "faker";

faker.seed(123);

const products = [...Array(20)].map((item) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.image.image(),
  price: faker.commerce.price(),
  description: faker.commerce.productDescription(),
  category: faker.random.arrayElement(["Fruit", "Vegetable"]),
  season: faker.random.arrayElement(["Winter", "Summer"]),

  rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  inOffer: faker.datatype.boolean(),
  // inOffer: true,
  offer: faker.random.arrayElement([5, 10, 15, 20, 25]),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
}));

export default products;
