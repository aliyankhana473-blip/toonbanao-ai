import { BookOpen, Clapperboard, Sparkles, Utensils, Wand2, ShieldCheck } from 'lucide-react';
import { cardClass, primaryButtonClass } from '@/lib/ui';

interface HomePageProps {
  onStart: () => void;
  onAdminLogin: () => void;
}

const features = [
  {
    icon: BookOpen,
    title: 'Kahani Likho',
    description: 'Apni kahani likho, hum usse ek mazedaar cartoon video bana denge.',
    tone: 'bg-primary-50 text-primary-600',
  },
  {
    icon: Utensils,
    title: 'Khana Likho',
    description: 'Apne favourite khane ko cute cartoon character bana do.',
    tone: 'bg-accent-100 text-warning-700',
  },
  {
    icon: Sparkles,
    title: 'Kayi Styles',
    description: '2D, 3D, Desi aur food cartoon styles me se apni pasand chuno.',
    tone: 'bg-secondary-100 text-secondary-700',
  },
];

export default function HomePage({ onStart, onAdminLogin }: HomePageProps) {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-100/70 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 top-40 h-64 w-64 rounded-full bg-accent-100 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-12 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-success-500" aria-hidden="true" />
            Sirf $10 me cartoon video
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.15] text-neutral-900 sm:text-6xl">
            Kahani likho, <span className="text-primary-600">cartoon video</span> ban jaye
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-neutral-700">
            Apni kahani ya favourite khana likho, aur ToonBanao AI usse ek colorful, funny aur kids ke liye bana hua cartoon video bana dega.
          </p>

          <div className="mx-auto mt-10 max-w-sm">
            <button type="button" onClick={onStart} className={primaryButtonClass}>
              <Wand2 className="h-5 w-5" aria-hidden="true" />
              Cartoon Banao - $10
            </button>
            <p className="mt-3 text-sm text-neutral-600">Ek baar payment, phir apni marzi ke cartoon banao.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description, tone }, index) => (
            <article
              key={title}
              className={`${cardClass} transition hover:-translate-y-1 hover:shadow-2xl animate-fade-up`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone}`}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-xl font-semibold text-neutral-900">{title}</h2>
              <p className="mt-2 leading-relaxed text-neutral-700">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 text-sm text-neutral-600 sm:flex-row">
          <Clapperboard className="h-4 w-4 text-primary-600" aria-hidden="true" />
          <span>Har cartoon colorful, funny aur high quality.</span>
          <span className="hidden sm:inline" aria-hidden="true">|</span>
          <button
            type="button"
            onClick={onAdminLogin}
            className="inline-flex items-center gap-1.5 font-semibold text-secondary-700 underline-offset-4 transition hover:text-secondary-900 hover:underline"
          >
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Admin Login
          </button>
        </div>
      </div>
    </main>
  );
}
