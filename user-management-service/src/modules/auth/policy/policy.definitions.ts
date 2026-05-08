import { PolicyRegistry } from './policy.registry';

export function registerPolicies() {

  // USER: update own profile
  PolicyRegistry.register(
    'user:update:own',
    (user, resource) =>
      user.role === 'admin' ||
      user.id === resource.id,
  );

  // ORDER: update own order
  PolicyRegistry.register(
    'order:update:own',
    (user, order) =>
      user.role === 'admin' ||
      order.userId === user.id,
  );

  // PRODUCT: delete product
  PolicyRegistry.register(
    'product:delete',
    (user, product) =>
      user.role === 'admin' ||
      product.ownerId === user.id,
  );
}