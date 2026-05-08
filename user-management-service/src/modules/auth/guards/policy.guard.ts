import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { POLICY_KEY } from "../decorators/policy.decorator";

@Injectable()
export class PolicyGuard implements CanActivate {

  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {

    const policy =
      this.reflector.get(
        POLICY_KEY,
        context.getHandler(),
      );

    if (!policy) return true;

    const request =
      context.switchToHttp().getRequest();

    const user = request.user;
    const resource = request.body; 

    return policy(user, resource);
  }
}