import { SetMetadata } from '@nestjs/common';
export const POLICY_KEY = 'policy';

export const Policy = (policy: any) =>
  SetMetadata(POLICY_KEY, policy);