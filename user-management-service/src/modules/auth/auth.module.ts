import { Module, OnModuleInit } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { registerPolicies } from './policy/policy.definitions';
import { PolicyEngine } from './policy/policy.engine';
import { RolesGuard } from './guards/roles.guard';
import { PolicyGuard } from './guards/policy.guard';
import { ResourceInterceptor } from './interceptor/resource.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { IamModule } from '../shared/iam.module';

@Module({
    imports: [
    UsersModule,
    PassportModule,
    IamModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecret',
      signOptions: { expiresIn: '15m' },
    }),
  ],
  providers: [AuthService,JwtStrategy,    {
      provide: APP_INTERCEPTOR,
      useClass: ResourceInterceptor,
    },],
  controllers: [AuthController]
})
export class AuthModule implements OnModuleInit {

   onModuleInit() {
    registerPolicies();
  }
}
