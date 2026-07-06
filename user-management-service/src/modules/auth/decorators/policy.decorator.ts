import { SetMetadata } from '@nestjs/common';
export const POLICY_KEY = 'policy';

export const Policy = (name: string) =>
  SetMetadata(POLICY_KEY, name);