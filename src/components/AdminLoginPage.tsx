import { useState, type FormEvent } from 'react';
import { ArrowLeft, Lock, ShieldCheck } from 'lucide-react';
import { ADMIN_PASSWORD, ADMIN_USERNAME } from '@/lib/constants';
import { cardClass, inputClass, primaryButtonClass, secondaryButtonClass } from '@/lib/ui';

interface AdminLoginPageProps {
  onSuccess: () => void;
  onBack: () => void;
}

export default function AdminLoginPage({ onSuccess, onBack }: AdminLoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setError(null);
      onSuccess();
      return;
    }
    setError('Galat username ya password.');
  };

  return (
    <main className="mx-auto max-w-md px-5 py-12 sm:py-20">
      <section className={`${cardClass} animate-pop-in`}>
        <div className="flex flex-col items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-100 text-secondary-700">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </span>
          <h1 className="mt-5 font-display text-2xl font-bold text-neutral-900">Admin Login</h1>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Sirf owner ke liye. Admin ko payment ki zaroorat nahi.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="adminUser" className="mb-1.5 block text-sm font-semibold text-neutral-800">
              Username
            </label>
            <input
              id="adminUser"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              placeholder="Admin Username"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="adminPass" className="mb-1.5 block text-sm font-semibold text-neutral-800">
              Password
            </label>
            <input
              id="adminPass"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              placeholder="Admin Password"
              className={inputClass}
            />
          </div>

          {error && (
            <p role="alert" className="rounded-xl bg-error-50 px-4 py-3 text-sm font-semibold text-error-700">
              {error}
            </p>
          )}

          <button type="submit" className={primaryButtonClass}>
            <Lock className="h-5 w-5" aria-hidden="true" />
            Login - FREE Access
          </button>
          <button type="button" onClick={onBack} className={`${secondaryButtonClass} w-full`}>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Wapis Jao
          </button>
        </form>
      </section>
    </main>
  );
}
