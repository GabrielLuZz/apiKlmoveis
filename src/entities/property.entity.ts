import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./category.entity";
import { SchedulesUsersProperties } from "./schedule_user_property.entity";

@Entity("properties")
class Property {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;

  @ManyToOne(() => Category)
  category: Category;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToMany(
    () => SchedulesUsersProperties,
    (schedulesUsersProperties) => schedulesUsersProperties.property
  )
  schedules: SchedulesUsersProperties[];
}

export { Property };
