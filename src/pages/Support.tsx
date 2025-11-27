import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function Support() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-heading font-bold mb-2'>Support a Cause</h1>
      <p className='text-muted-foreground mb-8'>Contribute to vetted funds supporting resilience and recovery.</p>
      <Card>
        <CardHeader>
            <div className='flex justify-between items-start'>
                <div>
                    <CardTitle className='mb-1'>Ushindi Recovery Fund</CardTitle>
                    <Badge variant='secondary' className='border-calm-green border'>Verified Partner</Badge>
                </div>
                <p className='text-sm text-muted-foreground'>Last Audited: Oct 2025</p>
            </div>
        </CardHeader>
        <CardContent>
            <p className='mb-6'>This fund provides direct micro-grants for survivors to access legal aid and temporary housing.</p>
            <div className='flex items-center space-x-4 mb-6'>
                <Button variant='outline' className='text-lg p-6'>KES 100</Button>
                <Button variant='outline' className='text-lg p-6'>KES 500</Button>
                <Button className='text-lg p-6'>KES 1000</Button>
            </div>
            <Button size='lg' className='w-full md:w-auto'>Contribute Securely</Button>
        </CardContent>
      </Card>
    </div>
  );
}