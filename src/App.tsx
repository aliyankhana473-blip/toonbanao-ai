import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import HomePage from '@/components/HomePage';
import PaymentPage from '@/components/PaymentPage';
import CartoonPage from '@/components/CartoonPage';
import AdminLoginPage from '@/components/AdminLoginPage';
import type { Access, View } from '@/lib/types';

function App() {
  const [view, setView] = useState<View>('home');
  const [access, setAccess] = useState<Access>('guest');

  const unlock = (level: Exclude<Access, 'guest'>) => {
    setAccess(level);
    setView('cartoon');
  };

  const signOut = () => {
    setAccess('guest');
    setView('home');
  };

  const goHome = () => setView('home');

  const renderView = () => {
    if (view === 'admin') {
      return <AdminLoginPage onSuccess={() => unlock('admin')} onBack={goHome} />;
    }

    if (view === 'cartoon' && access !== 'guest') {
      return <CartoonPage access={access} />;
    }

    if (view === 'payment' || view === 'cartoon') {
      return <PaymentPage onApproved={() => unlock('customer')} onBack={goHome} />;
    }

    return (
      <HomePage
        onStart={() => setView('payment')}
        onAdminLogin={() => setView('admin')}
      />
    );
  };

  return (
    <div className="min-h-screen">
      <SiteHeader access={access} onLogoClick={goHome} onSignOut={signOut} />
      {renderView()}
    </div>
  );
}

export default App;
