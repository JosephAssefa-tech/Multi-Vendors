import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: any, res: any, next: () => void) {
    const auth = req.headers.authorization;

    if (!auth) return next();

    const token = auth.split(' ')[1];

    const payload = this.jwtService.verify(token);

    req.tenantId = payload.tenantId;

    next();
  }
}