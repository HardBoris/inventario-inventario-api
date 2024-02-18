import { ChildEntity, Column } from "typeorm";
import { Item } from "./item";

@ChildEntity()
export class Midia extends Item {
  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  thickness: number;
}
