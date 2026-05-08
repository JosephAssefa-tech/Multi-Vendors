import { Permission } from "src/modules/permissions/entity/permission";
import { PrimaryGeneratedColumn, Column, Entity, JoinTable, ManyToMany } from "typeorm";


@Entity('roles')
export class Role{
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToMany(() => Permission)
@JoinTable({
  name: 'role_permissions',
})
permissions!: Permission[];
}