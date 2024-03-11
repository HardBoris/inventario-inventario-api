import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Item } from "./item";

@Entity()
export class Movement {
  @PrimaryGeneratedColumn("uuid")
  moveId?: string;

  @Column()
  moveData: string;

  @Column()
  reference: string;

  @Column()
  move: string;

  @ManyToOne(() => Item)
  @JoinColumn({ name: "itemId" })
  item: Item;

  @Column({ type: "float", default: 0.0 })
  quantity: number;

  @Column()
  unit: string;
}
