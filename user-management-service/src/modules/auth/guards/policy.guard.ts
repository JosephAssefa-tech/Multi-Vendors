import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';
import { POLICY_KEY } from '../decorators/policy.decorator';
import { PolicyEngine } from '../policy/policy.engine';

@Injectable()
export class PolicyGuard implements CanActivate {

  constructor(
    private reflector: Reflector,
    private policyEngine: PolicyEngine,
  ) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const policyName =
      this.reflector.get(
        POLICY_KEY,
        context.getHandler(),
      );

    if (!policyName) return true;

    const request =
      context.switchToHttp().getRequest();

    const user = request.user;

    // resource MUST be loaded manually
    const resource = request.resource;

    return this.policyEngine.evaluate(
      policyName,
      user,
      resource,
    );
  }
}