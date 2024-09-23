import { fakerES_MX as faker } from "@faker-js/faker";

export const generateAdoptionMock = (count) => {
  const adoptions = [];
  for (let i = 0; i < count; i++) {
    adoptions.push({
      owner: faker.datatype.uuid(), // Cambia esto según tu esquema
      pet: faker.datatype.uuid(), // Cambia esto según tu esquema
      adoptionDate: faker.date.past(), // Fecha de adopción
    });
  }
  return adoptions;
};
