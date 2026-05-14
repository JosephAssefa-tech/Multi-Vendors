import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../domain/entities/user';
import { Permission } from 'src/modules/permissions/entity/permission';
import { Role } from 'src/modules/roles/entity/role';
import { Tenant } from 'src/modules/tenants/entity/tenant';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Admin@1234',
      database: 'users_db',
      entities: [User,Role,Permission,Tenant],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}