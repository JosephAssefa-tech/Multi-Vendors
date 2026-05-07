import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './application/services/users.service';
import { User } from './domain/entities/user';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
