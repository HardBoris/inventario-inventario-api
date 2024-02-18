import { DeleteResult, Repository } from "typeorm";
import { Material } from "../entities";
import { AppDataSource } from "../data-source";

interface IMaterialRepo {
  save: (material: Partial<Material>) => Promise<Material>;
  all: () => Promise<Material[]>;
  findOne: (payload: object) => Promise<Material>;
  delete: (id: string) => Promise<DeleteResult>;
}

class MaterialRepo implements IMaterialRepo {
  private ormRepo: Repository<Material>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Material);
  }

  save = async (material: Partial<Material>) =>
    await this.ormRepo.save(material);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new MaterialRepo();
