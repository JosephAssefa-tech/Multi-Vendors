export type PolicyHandler = (
  user: any,
  resource?: any,
  tenantId?: string,
  
) => boolean | Promise<boolean>;