import { Module } from '@nestjs/common';
import { PolicyGuard } from '../auth/guards/policy.guard';
import { PolicyEngine } from '../auth/policy/policy.engine';


@Module({
  providers: [
    PolicyEngine,
    PolicyGuard,
  ],
  exports: [
    PolicyEngine,
    PolicyGuard,
  ],
})
export class IamModule {}