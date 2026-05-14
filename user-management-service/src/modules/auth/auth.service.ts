import { Injectable,UnauthorizedException  } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/application/services/users.service';

@Injectable()
export class AuthService {

      constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

    async register(email: string, password: string) {
    const hash = await bcrypt.hash(password, 10);
    const user = await this.usersService.createUser(email, hash);

    return this.generateTokens(user);
  }

    async login(email: string, password: string) {
    const user = await this.usersService.findByEmailWithRoles(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    return this.generateTokens(user);
  }


    async generateTokens(user: any) {
   
    const roles = user.roles.map(
  (role: any) => role.name,
);

const permissions = user.roles.flatMap(
  (role: any) =>
    role.permissions.map(
      (permission: any) => permission.name,
    ),
);

const uniquePermissions = [...new Set(permissions)];
const payload = {
  sub: user.id,
  email: user.email,
  tenantId: user.tenant.id,
  roles,
  permissions: uniquePermissions,
};

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15m',
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });

    await this.usersService.updateRefreshToken(user.id, refreshToken);

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(token: string) {
  try {
    const payload = this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET || 'supersecret',
    });

    const user = await this.usersService.findByEmailWithRoles(payload.email);
    if (!user || !user.hashedRefreshToken) {
      throw new UnauthorizedException();
    }

    const valid = await bcrypt.compare(token, user.hashedRefreshToken);
    if (!valid) throw new UnauthorizedException();

    return this.generateTokens(user);
  } catch {
    throw new UnauthorizedException();
  }
}

  
}
