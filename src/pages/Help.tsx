import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Map, List, ShieldCheck } from 'lucide-react';

export default function Help() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-heading font-bold mb-2'>Find Help</h1>
      <p className='text-muted-foreground mb-8'>Directory of verified, community-rated support services.</p>

      <div className='flex space-x-4 mb-6'>
        <Input placeholder='Search for services...' className='flex-grow' />
        <Button variant='outline'><List className='w-4 h-4 mr-2' />List</Button>
        <Button variant='ghost'><Map className='w-4 h-4 mr-2' />Map</Button>
      </div>

      <Card className='p-6'>
        <div className='flex justify-between items-center'>
            <div>
                <h3 className='font-bold text-lg flex items-center'>Nairobi Women's Hospital <ShieldCheck className='w-5 h-5 text-calm-green ml-2' /></h3>
                <p className='text-sm text-muted-foreground'>Counseling, Shelter &bull; 2.5km away &bull; Open 24 hours</p>
            </div>
            <Button>View Details</Button>
        </div>
      </Card>
    </div>
  );
}