import { Users, TrendingUp, MessageCircle, DollarSign } from 'lucide-react';
import { MetricCard } from '@/components/dashboard/metric-card';
import { Sidebar } from '@/components/layout/sidebar';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </header>
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Total Clients"
                value="128"
                description="+12% from last month"
                icon={<Users className="h-4 w-4 text-muted-foreground" />}
                change="+12%"
                changeType="positive"
              />
              <MetricCard
                title="New Leads"
                value="24"
                description="+3 from yesterday"
                icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
                change="+3"
                changeType="positive"
              />
              <MetricCard
                title="Messages"
                value="1,234"
                description="+124 from yesterday"
                icon={<MessageCircle className="h-4 w-4 text-muted-foreground" />}
                change="+124"
                changeType="positive"
              />
              <MetricCard
                title="Revenue"
                value="$24,569"
                description="+18% from last month"
                icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
                change="+18%"
                changeType="positive"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="lg:col-span-4 rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">John Doe</span> created new lead <span className="font-medium">TechCorp Inc</span>
                      </p>
                      <p className="text-xs text-muted-foreground">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="h-2 w-2 mt-2 rounded-full bg-green-500" />
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">Jane Smith</span> updated campaign <span className="font-medium">Summer Promotion</span>
                      </p>
                      <p className="text-xs text-muted-foreground">15 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="h-2 w-2 mt-2 rounded-full bg-yellow-500" />
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">Mike Johnson</span> completed task <span className="font-medium">Follow up with client</span>
                      </p>
                      <p className="text-xs text-muted-foreground">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-4">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-semibold mb-4">AI Recommendations</h3>
                  <div className="space-y-3">
                    <div className="rounded-md border p-3">
                      <h4 className="text-sm font-medium">Follow Up with Hot Lead</h4>
                      <p className="text-xs text-muted-foreground mt-1">Lead Jane Smith has shown high interest. Schedule a demo call.</p>
                    </div>
                    <div className="rounded-md border p-3">
                      <h4 className="text-sm font-medium">Optimize Campaign</h4>
                      <p className="text-xs text-muted-foreground mt-1">Summer Promotion could improve by adjusting ad spend.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-semibold mb-4">Upcoming Tasks</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm">Demo with TechCorp</span>
                      <span className="ml-auto text-xs text-muted-foreground">Today</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-gray-300" />
                      <span className="text-sm">Follow up with Jane</span>
                      <span className="ml-auto text-xs text-muted-foreground">Tomorrow</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-gray-300" />
                      <span className="text-sm">Quarterly Review</span>
                      <span className="ml-auto text-xs text-muted-foreground">May 28</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
