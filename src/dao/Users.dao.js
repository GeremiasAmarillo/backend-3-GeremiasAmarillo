import userModel from "./models/User.js";

export default class Users {
  get = (params) => {
    return userModel.find(params);
  };

  getBy = (params) => {
    return userModel.findById(params);
  };

  save = (doc) => {
    return userModel.create(doc);
  };

  saveMany(users) {
    return userModel.insertMany(users);
  }
  update = (id, doc) => {
    return userModel.findByIdAndUpdate(id, { $set: doc });
  };

  delete = (id) => {
    return userModel.findByIdAndDelete(id);
  };
}
