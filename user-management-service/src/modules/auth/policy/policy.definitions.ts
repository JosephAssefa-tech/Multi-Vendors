import { PolicyRegistry } from './policy.registry';

export function registerPolicies() {


  PolicyRegistry.register(
    'user:update:own',
    (user, resource) =>
      user.role === 'admin' ||
      user.id === resource.id,
  );


  PolicyRegistry.register(
    'order:update:own',
    (user, order) =>
      user.role === 'admin'
     ||
      order.userId === user.id,
  );


  PolicyRegistry.register(
    'product:delete',
    (user, product) =>
      user.role === 'admin' ||
      product.ownerId === user.id,
  );
}