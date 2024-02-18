import { DeleteResult, Repository } from "typeorm";
import { Item } from "../entities";
import { AppDataSource } from "../data-source";

interface IItemRepo {
  save: (item: Partial<Item>) => Promise<Item>;
  all: () => Promise<Item[]>;
  findOne: (payload: object) => Promise<Item>;
  delete: (id: string) => Promise<DeleteResult>;
}

class ItemRepo implements IItemRepo {
  private ormRepo: Repository<Item>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Item);
  }

  save = async (item: Partial<Item>) => await this.ormRepo.save(item);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new ItemRepo();
