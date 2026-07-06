import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './application/services/users.service';
import { User } from './domain/entities/user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { Permission } from '../permissions/entity/permission';
import { Role } from '../roles/entity/role';
import { IamModule } from '../shared/iam.module';

@Module({
  imports: [TypeOrmModule.forFeature([User,Role,Permission]),IamModule],
  controllers: [UsersController],
  providers: [UsersService,UserRepository],
  exports: [UsersService],
})
export class UsersModule {}
