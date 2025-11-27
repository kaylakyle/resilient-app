import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FileText, Lock } from 'lucide-react';

export default function Journal() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-4xl font-heading font-bold'>Journal</h1>
        <Button>New Entry</Button>
      </div>
      <Card className='text-center py-24 px-8 border-dashed'>
        <FileText className='w-16 h-16 text-muted-foreground mx-auto mb-4' />
        <h2 className='text-2xl font-semibold mb-2'>This space is yours.</h2>
        <p className='text-muted-foreground'>Nothing you write here ever leaves your device.</p>
        <p className='text-sm text-muted-foreground mt-2 flex items-center justify-center'><Lock className='w-3 h-3 mr-1.5' /> Encrypted locally.</p>
      </Card>
    </div>
  );
}