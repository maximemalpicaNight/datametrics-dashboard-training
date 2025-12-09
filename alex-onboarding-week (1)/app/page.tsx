import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-600">
            DataMetrics Dashboard
          </CardTitle>
          <CardDescription className="text-base mt-2">
            Welcome to your analytics platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 text-center">
            Track your key metrics, manage your team, and gain insights into your business performance.
          </p>
          <div className="flex flex-col gap-3 pt-4">
            <Link href="/login" className="w-full">
              <Button className="w-full" size="lg">
                Login to Dashboard
              </Button>
            </Link>
            <Link href="/practice" className="w-full">
              <Button className="w-full" size="lg" variant="secondary">
                Practice Exercises
              </Button>
            </Link>
            <p className="text-sm text-gray-500 text-center">
              Built with Next.js, Apollo Client, and React Query
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
