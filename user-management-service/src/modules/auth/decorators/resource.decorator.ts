import { SetMetadata } from '@nestjs/common';

export const RESOURCE_KEY = 'resource';

export const UseResource = (entity: any) =>
  SetMetadata(RESOURCE_KEY, entity);