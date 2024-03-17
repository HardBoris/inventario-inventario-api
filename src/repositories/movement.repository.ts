import { DeleteResult, Repository } from "typeorm";
import { Movement } from "../entities";
import { AppDataSource } from "../data-source";

interface IMovementRepo {
  save: (movement: Partial<Movement>) => Promise<Movement>;
  all: () => Promise<Movement[]>;
  findOne: (payload: object) => Promise<Movement>;
  delete: (id: string) => Promise<DeleteResult>;
}

class MovementRepo implements IMovementRepo {
  private ormRepo: Repository<Movement>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Movement);
  }

  save = async (movement: Partial<Movement>) =>
    await this.ormRepo.save(movement);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new MovementRepo();
