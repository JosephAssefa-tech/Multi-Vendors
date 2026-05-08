import { PolicyHandler } from './policy.types';

export class PolicyRegistry {
  private static policies = new Map<string, PolicyHandler>();

  static register(name: string, handler: PolicyHandler) {
    this.policies.set(name, handler);
  }

  static get(name: string): PolicyHandler | undefined {
    return this.policies.get(name);
  }
}