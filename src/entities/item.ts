import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from "typeorm";

@Entity("items")
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Item {
  @PrimaryGeneratedColumn("uuid")
  itemId?: string;

  @Column()
  item: string;

  @Column()
  description: string;

  @Column()
  defaultUnit: string;

  @Column({ default: 0 })
  minimumStock?: number;

  @Column({ default: 1 })
  idealStock?: number;
}
