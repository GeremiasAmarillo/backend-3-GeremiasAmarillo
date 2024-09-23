import { generateUsersMock } from "../mocks/user.mock.js";
import { UserServices } from "../services/user.services.js";

export class UserControllers {
  constructor() {
    this.userServices = new UserServices();
  }

  createUserMock = async (req, res) => {
    const users = await this.userServices.createMocks();
    res.status(201).json({ status: "success", users });
  };

  getAllUsers = async (req, res) => {
    try {
      const users = await this.userServices.getAll();
      res.send({ status: "success", payload: users });
    } catch (error) {
      res
        .status(500)
        .send({ status: "error", message: "Error fetching users", error });
    }
  };

  getUser = async (req, res) => {
    try {
      const userId = req.params.uid;
      const user = await this.userServices.getById(userId);
      if (!user)
        return res
          .status(404)
          .send({ status: "error", message: "User not found" });
      res.send({ status: "success", payload: user });
    } catch (error) {
      res
        .status(500)
        .send({ status: "error", message: "Error fetching user", error });
    }
  };

  updateUser = async (req, res) => {
    try {
      const updateBody = req.body;
      const userId = req.params.uid;
      const user = await this.userServices.getById(userId);
      if (!user)
        return res
          .status(404)
          .send({ status: "error", message: "User not found" });
      const result = await this.userServices.update(userId, updateBody);
      res.send({ status: "success", message: "User updated" });
    } catch (error) {
      res
        .status(500)
        .send({ status: "error", message: "Error updating user", error });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const userId = req.params.uid;
      const result = await this.userServices.remove(userId);
      if (!result)
        return res
          .status(404)
          .send({ status: "error", message: "User not found" });
      res.send({ status: "success", message: "User deleted" });
    } catch (error) {
      res
        .status(500)
        .send({ status: "error", message: "Error deleting user", error });
    }
  };
}
