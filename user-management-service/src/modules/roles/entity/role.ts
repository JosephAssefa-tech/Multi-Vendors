import { Permission } from "src/modules/permissions/entity/permission";
import { Tenant } from "src/modules/tenants/entity/tenant";
import { PrimaryGeneratedColumn, Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";


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

  @ManyToOne(() => Tenant)
  tenant !: Tenant;
}