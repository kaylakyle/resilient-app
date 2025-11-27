import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Phone, MessageCircle, AlertTriangle, X } from 'lucide-react';
import { Button } from './Button';

export default function SosButton() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleLongPress = () => {
    setIsPanelOpen(true);
    toast.warning('SOS Panel Activated', { description: 'Long-press on the button to open the SOS panel.' });
  };

  const handleAction = (action) => {
    toast.info(`Executing action: ${action}`)
    setIsPanelOpen(false);
  }

  return (
    <>
      <motion.button
        onLongPress={handleLongPress}
        whileTap={{ scale: 0.95 }}
        className='fixed bottom-6 right-6 bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
        aria-label='Help Me SOS Button'
      >
        <span className='font-bold text-lg'>SOS</span>
      </motion.button>

      {isPanelOpen && (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
        >
            <div className='bg-card rounded-lg p-8 w-full max-w-sm text-center shadow-xl'>
                <AlertTriangle className='w-16 h-16 text-red-500 mx-auto mb-4' />
                <h2 className='text-2xl font-bold mb-2'>Emergency Actions</h2>
                <p className='text-muted-foreground mb-6'>Choose an option below. Your safety is the priority.</p>
                <div className='space-y-4'>
                    <Button className='w-full bg-red-600 hover:bg-red-700' onClick={() => handleAction('Call Emergency')}>
                        <Phone className='mr-2 h-4 w-4' /> Call Emergency Services
                    </Button>
                    <Button className='w-full' variant='secondary' onClick={() => handleAction('Send Trusted Contact Message')}>
                        <MessageCircle className='mr-2 h-4 w-4' /> Message Trusted Contact
                    </Button>
                    <Button className='w-full' variant='secondary' onClick={() => handleAction('USSD Alert')}>
                        <span className='font-mono mr-2'>*123#</span> Send USSD Alert
                    </Button>
                     <Button className='w-full' variant='ghost' onClick={() => handleAction('Silent SOS')}>
                        Silent SOS (Sends location discreetly)
                    </Button>
                </div>
                <Button variant='link' className='mt-6 text-muted-foreground' onClick={() => setIsPanelOpen(false)}>
                    <X className='mr-2 h-4 w-4' /> Cancel
                </Button>
            </div>
        </motion.div>
      )}
    </>
  );
}