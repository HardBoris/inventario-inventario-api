import { ChildEntity, Column } from "typeorm";
import { Item } from "./item";

@ChildEntity()
export class Midia extends Item {
  @Column({ type: "float" })
  width: number;

  @Column({ type: "float" })
  height: number;

  @Column({ type: "float" })
  thickness: number;
}
