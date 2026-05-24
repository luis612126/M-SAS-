import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  change?: string;
  changeType?: 'positive' | 'negative';
}

export function MetricCard({ title, value, description, icon, change, changeType }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {change && (
          <p className={`text-xs mt-1 ${changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
            {changeType === 'positive' ? '+' : ''}{change}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
