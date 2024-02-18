import { DeleteResult, Repository } from "typeorm";
import { Accessory } from "../entities";
import { AppDataSource } from "../data-source";

interface IAccessoryRepo {
  save: (accessory: Partial<Accessory>) => Promise<Accessory>;
  all: () => Promise<Accessory[]>;
  findOne: (payload: object) => Promise<Accessory>;
  delete: (id: string) => Promise<DeleteResult>;
}

class AccessoryRepo implements IAccessoryRepo {
  private ormRepo: Repository<Accessory>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Accessory);
  }

  save = async (accessory: Partial<Accessory>) =>
    await this.ormRepo.save(accessory);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new AccessoryRepo();
