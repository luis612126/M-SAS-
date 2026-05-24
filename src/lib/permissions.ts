import { UserRole } from '@/types';

export interface Permission {
  resource: string;
  action: string;
  condition?: string;
}

export const PERMISSIONS: Record<UserRole, Permission[]> = {
  [UserRole.ADMIN]: [
    { resource: 'all', action: 'manage' },
  ],
  [UserRole.MANAGER]: [
    { resource: 'users', action: 'read' },
    { resource: 'users', action: 'create' },
    { resource: 'users', action: 'update' },
    { resource: 'users', action: 'delete' },
    { resource: 'clients', action: 'manage' },
    { resource: 'leads', action: 'manage' },
    { resource: 'conversations', action: 'manage' },
    { resource: 'campaigns', action: 'manage' },
    { resource: 'tasks', action: 'manage' },
    { resource: 'reports', action: 'read' },
  ],
  [UserRole.SALES_REP]: [
    { resource: 'clients', action: 'read' },
    { resource: 'clients', action: 'create' },
    { resource: 'clients', action: 'update' },
    { resource: 'leads', action: 'read' },
    { resource: 'leads', action: 'create' },
    { resource: 'leads', action: 'update' },
    { resource: 'conversations', action: 'read' },
    { resource: 'conversations', action: 'create' },
    { resource: 'tasks', action: 'manage' },
  ],
  [UserRole.MARKETER]: [
    { resource: 'campaigns', action: 'read' },
    { resource: 'campaigns', action: 'create' },
    { resource: 'campaigns', action: 'update' },
    { resource: 'content', action: 'manage' },
    { resource: 'analytics', action: 'read' },
  ],
  [UserRole.CUSTOMER_SUPPORT]: [
    { resource: 'conversations', action: 'read' },
    { resource: 'conversations', action: 'create' },
    { resource: 'conversations', action: 'update' },
    { resource: 'tasks', action: 'read' },
    { resource: 'tasks', action: 'create' },
  ],
  [UserRole.GUEST]: [
    { resource: 'dashboard', action: 'read' },
  ],
};

export function checkPermission(
  role: UserRole,
  resource: string,
  action: string
): boolean {
  const permissions = PERMISSIONS[role] || [];
  
  return permissions.some(permission => 
    (permission.resource === resource || permission.resource === 'all') &&
    (permission.action === action || permission.action === 'manage')
  );
}

export function canUser(
  role: UserRole,
  resource: string,
  action: string
): boolean {
  return checkPermission(role, resource, action);
}
