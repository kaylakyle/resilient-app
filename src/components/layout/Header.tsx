import { NavLink } from 'react-router-dom';
import { Home, Book, FileText, Heart, Settings, Sun, Moon, Languages } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/practice', label: 'Practice', icon: Book },
  { to: '/journal', label: 'Journal', icon: FileText },
  { to: '/help', label: 'Help', icon: Heart },
  { to: '/support', label: 'Support', icon: Heart },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className='bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b border-border'>
      <nav className='container flex items-center justify-between h-16 px-4 md:px-6'>
        <div className='flex items-center space-x-8'>
          <div className='flex items-center space-x-2'>
             <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/2462370a-f191-4e10-a460-3496cc174d2f/resilience-hub-logo-680ruw1-1764279593860.webp' alt='Resilience Hub Logo' className='h-8 w-8' />
            <span className='font-bold text-lg font-heading'>Resilience Hub</span>
          </div>
          <div className='hidden md:flex items-center space-x-6'>
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted/50'
                  }`
                }
              >
                <Icon className='w-4 h-4 mr-2' />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className='flex items-center space-x-4'>
            <Button variant='ghost' size='icon'><Languages className='h-5 w-5' /></Button>
            <Button variant='ghost' size='icon' onClick={toggleTheme}>
                {isDarkMode ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
            </Button>
        </div>
      </nav>
    </header>
  );
}