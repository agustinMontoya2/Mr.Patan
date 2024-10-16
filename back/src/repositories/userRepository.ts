import { AppDataSource } from "../config/data-source";
import { User } from "../entities";

const userRepository = AppDataSource.getRepository(User);

export default userRepository;
