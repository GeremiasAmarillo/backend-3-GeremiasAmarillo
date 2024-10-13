import { Router } from "express";
import { generateUsersMock } from "../mocks/user.mock.js";
import { UserServices } from "../services/user.services.js";
import { generatePetsMock } from "../mocks/pet.mock.js";
import { PetServices } from "../services/pet.services.js";

const userServices = new UserServices();
const petsServices = new PetServices();
const router = Router();

router.get("/mockingpets", async (req, res) => {
  try {
    const pets = generatePetsMock(100);
    const response = await petsServices.createMany(pets);
    res.status(201).json({ status: "success", payload: response });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.get("/mockingusers", async (req, res) => {
  try {
    const users = await generateUsersMock(50); // Usar await aquí
    const response = await userServices.createMany(users);

    res.status(201).json({ status: "success", payload: response });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.get("/generateData/:cu/:cp", async (req, res) => {
  const { cu, cp } = req.params;

  try {
    const users = await generateUsersMock(cu);
    const pets = await generatePetsMock(cp);
    const userResponse = await userServices.createMany(users);
    const petsResponse = await petsServices.createMany(pets);

    res
      .status(201)
      .json({ status: "success", payload: { userResponse, petsResponse } });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

export default router;
