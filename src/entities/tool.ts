import { ChildEntity, Column } from "typeorm";
import { Item } from "./item";

@ChildEntity()
export class Tool extends Item {
  @Column()
  toolModel: string;

  @Column()
  toolPower: string;

  @Column()
  producer: string;
}
