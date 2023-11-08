import { UserPass } from "../dao/factory/factory.js";
import UserPasswordDAO from "../dao/userPass.mongo.dao.js";
import UserPasswordRepository from "../repositories/userPass.repository.js";

export const UserPasswordService = new UserPasswordRepository(new UserPasswordDAO());
