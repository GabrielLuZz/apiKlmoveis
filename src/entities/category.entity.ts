import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

import { Property } from "./property.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60, unique: true })
  name: string;

  @OneToMany(() => Property, (property) => property.category, { eager: true })
  properties: Property[];
}

export { Category };
