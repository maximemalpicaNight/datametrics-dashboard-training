'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const practicePages = [
  { href: '/practice/arrays', label: 'Array Methods' },
  { href: '/practice/typescript', label: 'TypeScript' },
  { href: '/practice/components', label: 'Components' },
  { href: '/practice/state', label: 'useState' },
  { href: '/practice/effects', label: 'useEffect' },
  { href: '/practice/props-state', label: 'Props vs State' },
  { href: '/practice/hooks', label: 'Custom Hooks' },
];

export default function PracticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-xl font-bold text-gray-900">
                DataMetrics
              </Link>
              <span className="text-sm text-gray-500">Practice Exercises</span>
            </div>
            <Link
              href="/login"
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Back to App
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border p-4">
              <h2 className="font-semibold text-gray-900 mb-4">Exercises</h2>
              <nav className="space-y-1">
                {practicePages.map((page) => {
                  const isActive = pathname === page.href;
                  return (
                    <Link
                      key={page.href}
                      href={page.href}
                      className={`block px-3 py-2 rounded-md text-sm ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {page.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-lg border p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
