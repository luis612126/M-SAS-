import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">V</span>
            <span className="text-xl font-semibold">Volume CRM</span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </Link>
            <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            AI-Powered Marketing CRM
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Volume CRM helps marketing agencies manage clients, campaigns, and conversations 
            with the power of artificial intelligence. Streamline your workflow and close more deals.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link 
              href="/dashboard"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Go to Dashboard
            </Link>
            <button className="rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold mb-2">Client Management</h3>
            <p className="text-muted-foreground">
              Organize and track all your clients in one place. Manage contacts, notes, and history.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold mb-2">AI Assistant</h3>
            <p className="text-muted-foreground">
              Get intelligent suggestions for responses, lead scoring, and next best actions.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold mb-2">Campaign Tracking</h3>
            <p className="text-muted-foreground">
              Monitor campaign performance and ROI across all your marketing channels.
            </p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-16 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © 2024 Volume CRM. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
