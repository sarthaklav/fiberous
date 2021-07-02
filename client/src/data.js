import faker from "faker";

faker.seed(123);

const products = [...Array(20)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.image.image(),
  price: faker.commerce.price(),
  description: faker.commerce.productDescription(),
  category: faker.commerce.department(),
  rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement([
    "Save 20",
    "10% bonanza",
    "Republic Day Sale",
  ]),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
}));

export default products;
