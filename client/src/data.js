import faker from "faker";

faker.seed(123);

const products = [...Array(20)].map((item) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.image.image(),
  price: faker.commerce.price(),
  description: faker.commerce.productDescription(),
  category: faker.random.arrayElement(["Fruits", "Vegetables"]),
  season: faker.random.arrayElement(["Winter", "Summer"]),
  packetQuantity: faker.random.arrayElement(["250gm", "500gm", "1kg"]),
  // rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  // inOffer: faker.datatype.boolean(),
  // inOffer: true,
  offer: faker.random.arrayElement([5, 10, 15, 20, 25]),
}));

const users = [];

export default products;
