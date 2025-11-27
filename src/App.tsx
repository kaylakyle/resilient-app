import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import Onboarding from './pages/onboarding/Onboarding';
import Header from './components/layout/Header';
import SosButton from './components/ui/SosButton';
import Home from './pages/Home';
import Practice from './pages/Practice';
import Journal from './pages/Journal';
import Help from './pages/Help';
import Support from './pages/Support';
import Settings from './pages/Settings';

export default function App() {
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const location = useLocation();

  if (!onboardingComplete) {
    return <Onboarding onComplete={() => setOnboardingComplete(true)} />;
  }

  const showHeader = location.pathname !== '/';

  return (
    <div className='bg-background text-foreground min-h-screen font-body'>
      <Toaster position='top-center' richColors />
      {showHeader && <Header />}
      <main className='p-4 md:p-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/practice' element={<Practice />} />
          <Route path='/journal' element={<Journal />} />
          <Route path='/help' element={<Help />} />
          <Route path='/support' element={<Support />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </main>
      <SosButton />
    </div>
  );
}