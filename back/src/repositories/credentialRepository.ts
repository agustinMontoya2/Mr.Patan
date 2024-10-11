import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities";

const credentialRepository = AppDataSource.getRepository(Credential);

export default credentialRepository;
