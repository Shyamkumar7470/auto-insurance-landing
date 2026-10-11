import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Crumb } from '@/lib/schema';

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-brand-100">
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="font-semibold text-white">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link
                    href={c.href}
                    className="rounded underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {c.name}
                  </Link>
                  <ChevronRight aria-hidden="true" className="h-4 w-4 opacity-70" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
