import { Request } from "express";
import { materialRepository } from "../repositories";
import { Material } from "../entities";
import { ErrorHandler } from "../errors";

class MaterialService {
  materialCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const material = await materialRepository.save({ ...body });
    return material;
  };

  materialsList = async (req: Request) => {
    const materials: Material[] = await materialRepository.all();
    return {
      status: 200,
      materials: materials,
    };
  };

  materialLoader = async (req: Request) => {
    const material: Material = await materialRepository.findOne({
      materialId: req.params.materialId,
    });
    return {
      status: 200,
      material: material,
    };
  };

  materialDeletor = async (req: Request) => {
    const material: Material = await materialRepository.findOne({
      materialId: req.params.materialId,
    });

    if (!material) {
      throw new ErrorHandler(404, "Material not Found");
    }

    await materialRepository.delete(req.params.materialId);

    return {
      status: 200,
      message: "Material Deleted",
    };
  };
}

export default new MaterialService();
