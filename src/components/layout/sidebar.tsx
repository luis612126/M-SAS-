'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Mail, Briefcase, MessageCircle, Settings, BarChart3, Bot, Zap, Package, Activity } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/clients', icon: Users, label: 'Clients' },
  { href: '/leads', icon: Briefcase, label: 'Leads' },
  { href: '/inbox', icon: Mail, label: 'Inbox' },
  { href: '/campaigns', icon: BarChart3, label: 'Campaigns' },
  { href: '/tasks', icon: Activity, label: 'Tasks' },
  { href: '/automations', icon: Zap, label: 'Automations' },
  { href: '/integrations', icon: Package, label: 'Integrations' },
  { href: '/ai-brain', icon: Bot, label: 'AI Brain' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <span className="text-xl">V</span>
            <span>Volume CRM</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted',
                    pathname === item.href ? 'bg-muted text-primary' : 'text-muted-foreground'
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="mt-auto p-4 border-t">
          <Link href="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted">
            <Settings className="size-4" />
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
