import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ApolloProvider } from '@/components/providers/apollo-provider';
import { QueryProvider } from '@/components/providers/query-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DataMetrics Dashboard',
  description: 'A training project for junior developers to learn Next.js, Apollo Client, and React Query',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <ApolloProvider>{children}</ApolloProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
