import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

import { RESOURCE_KEY } from '../decorators/resource.decorator';

@Injectable()
export class ResourceInterceptor
  implements NestInterceptor {

  constructor(
    private reflector: Reflector,
  ) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {

    const request =
      context.switchToHttp().getRequest();

    const entity =
      this.reflector.get(
        RESOURCE_KEY,
        context.getHandler(),
      );

    if (!entity) {
      return next.handle();
    }

    const id = request.params.id;

    if (!id) {
      return next.handle();
    }


    const repo =
      request.app.get('DataSource')
        .getRepository(entity);

    const resource =
      await repo.findOne({
        where: { id,
          tenant: { id: request.tenantId, }


         },
      });

    request.resource = resource;

    return next.handle();
  }
}