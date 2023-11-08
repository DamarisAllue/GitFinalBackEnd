import { User } from "../dao/factory/factory.js";
import UserDAO from "../dao/users.mongo.dao.js";
import UserRepository from "../repositories/user.repository.js";

export const UserService = new UserRepository(new UserDAO());
