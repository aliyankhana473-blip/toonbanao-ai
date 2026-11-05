import { Clapperboard, LogOut } from 'lucide-react';
import type { Access } from '@/lib/types';

interface SiteHeaderProps {
  access: Access;
  onLogoClick: () => void;
  onSignOut: () => void;
}

const accessLabel: Record<Access, string | null> = {
  guest: null,
  customer: 'Paid Access',
  admin: 'Admin Access',
};

export default function SiteHeader({ access, onLogoClick, onSignOut }: SiteHeaderProps) {
  const label = accessLabel[access];

  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <button
          type="button"
          onClick={onLogoClick}
          className="group flex items-center gap-3 rounded-xl transition focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-100"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white shadow-md shadow-primary-600/30 transition group-hover:-rotate-6">
            <Clapperboard className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-semibold text-neutral-900">ToonBanao AI</span>
        </button>

        {label && (
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-success-100 px-3 py-1 text-sm font-semibold text-success-900 sm:inline-block">
              {label}
            </span>
            <button
              type="button"
              onClick={onSignOut}
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Bahar Jao
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
