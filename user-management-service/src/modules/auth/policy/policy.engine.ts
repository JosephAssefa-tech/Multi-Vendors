import { Injectable } from '@nestjs/common';
import { PolicyRegistry } from './policy.registry';

@Injectable()
export class PolicyEngine {

  async evaluate(
    policyName: string,
    tenantId: string,
    user: any,
    resource?: any,
  ): Promise<boolean> {

    const policy =
      PolicyRegistry.get(policyName);

    if (!policy) {
      return false;
    }

    return await policy(user, resource, tenantId);
  }
}