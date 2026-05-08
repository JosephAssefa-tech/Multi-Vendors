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

@Module({
    imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecret',
      signOptions: { expiresIn: '15m' },
    }),
  ],
  providers: [AuthService,JwtStrategy,RolesGuard,PolicyGuard, PolicyEngine],
  controllers: [AuthController]
})
export class AuthModule implements OnModuleInit {

   onModuleInit() {
    registerPolicies();
  }
}
