import { ChildEntity, Column } from "typeorm";
import { Item } from "./item";

@ChildEntity()
export class Material extends Item {
  @Column()
  packet: string;

  @Column()
  unitPerPacket: number;
}
