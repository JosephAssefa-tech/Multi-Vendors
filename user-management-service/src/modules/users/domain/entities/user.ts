import { Role } from 'src/modules/roles/entity/role';
import { Tenant } from 'src/modules/tenants/entity/tenant';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, ManyToOne } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ nullable: true })
  fullName!: string;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({ nullable: true })
  hashedRefreshToken?: string;


  @ManyToMany (() => Role)
  @JoinTable({
    name:'user_roles',
  })
  roles!: Role[];
  
  @ManyToOne(() => Tenant)
  tenant !: Tenant;

}