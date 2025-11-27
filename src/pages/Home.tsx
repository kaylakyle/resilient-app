import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Sun, Shield, Wifi, WifiOff, FileText, Heart } from 'lucide-react';

export default function Home() {
  const isOnline = navigator.onLine;

  return (
    <div className='space-y-12'>
      <section className='text-center'>
          <div className='relative w-48 h-48 mx-auto mb-6'>
              <div className='absolute inset-0 bg-sunrise-gold/20 rounded-full animate-breathing'></div>
              <div className='absolute inset-2 bg-sunrise-gold/30 rounded-full animate-breathing [animation-delay:-2s]'></div>
              <div className='absolute inset-4 bg-sunrise-gold/40 rounded-full animate-breathing [animation-delay:-4s]'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                  <Sun className='w-24 h-24 text-sunrise-gold' />
              </div>
          </div>
        <h1 className='text-3xl md:text-5xl font-heading font-bold'>Good Morning, User</h1>
        <p className='text-muted-foreground text-lg mt-2'>'The sun is a daily reminder that we too can rise again from the darkness.' </p>
      </section>

      <section>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto'>
          <Button variant='outline' className='h-24 flex flex-col space-y-1'><Sun className='w-6 h-6' /><span>Breathing</span></Button>
          <Button variant='outline' className='h-24 flex flex-col space-y-1'><Shield className='w-6 h-6' /><span>Grounding</span></Button>
          <Button variant='outline' className='h-24 flex flex-col space-y-1'><FileText className='w-6 h-6' /><span>Journal</span></Button>
          <Button variant='destructive' className='h-24 flex flex-col space-y-1'><Heart className='w-6 h-6' /><span>Help Me</span></Button>
        </div>
      </section>
      
      <footer className='fixed bottom-4 left-4 flex items-center space-x-4 text-xs text-muted-foreground'>
          <div className='flex items-center space-x-1'>
            <Shield size={14} className='text-calm-green'/>
            <span>Privacy: On-Device</span>
          </div>
           <div className='flex items-center space-x-1'>
            {isOnline ? <Wifi size={14} className='text-calm-green'/> : <WifiOff size={14} className='text-muted-amber'/>}
            <span>{isOnline ? 'Connected' : 'Offline Mode'}</span>
          </div>
      </footer>
    </div>
  );
}