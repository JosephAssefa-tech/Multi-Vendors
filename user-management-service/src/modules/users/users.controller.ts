import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './application/services/users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

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

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req:any) {
    return req.user;
  }
}
