import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './application/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post()
  create(@Body() body: { email: string; password: string }) {
    return this.userService.createUser(body.email, body.password);
  }

  @Get()
  findAll() {
    return this.userService.getUsers();
  }
}
