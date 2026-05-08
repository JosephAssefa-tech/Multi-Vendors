import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";


@Entity('roles')
export class Role{
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description?: string;
}