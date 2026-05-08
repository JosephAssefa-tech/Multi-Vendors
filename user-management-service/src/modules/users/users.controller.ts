import { Body, Controller, Delete, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './application/services/users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PermissionsGuard } from '../auth/guards/permissions.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { hasPermissions } from '../auth/decorators/permissions.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post()
  create(@Body() body: { email: string; password: string }) {
    return this.userService.createUser(body.email, body.password);
  }

  @UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
  @Roles('admin')
  @hasPermissions('view_users')
  @Get()
  findAll() {
    return this.userService.getUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: any) {
    return req.user;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @hasPermissions('delete_user')
  removeUser() {}
}
