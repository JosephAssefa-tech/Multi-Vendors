import { Tenant } from "src/modules/tenants/entity/tenant";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity('permission')
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description?: string;
  @ManyToOne(() => Tenant)
 tenant!: Tenant;
}