import { fakerES_MX as faker } from "@faker-js/faker";

export const generatePetsMock = (amount) => {
  const pets = [];
  for (let i = 0; i < amount; i++) {
    const pet = {
      name: faker.animal.type(),
      specie: faker.animal.cat(),
      adopted: faker.datatype.boolean(),
      birthDate: faker.date.past(5).toISOString().split("T")[0],
      owner: null,
    };
    pets.push(pet);
  }

  return pets;
};
