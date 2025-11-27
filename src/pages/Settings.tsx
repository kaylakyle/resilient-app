import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { Switch } from '@/components/ui/Switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { KeyRound, EyeOff, Trash2, Download, Languages, SunDim, Text, PowerOff } from 'lucide-react';

export default function Settings() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='text-4xl font-heading font-bold mb-8'>Settings</h1>
      <div className='space-y-8'>
        <Card>
            <CardHeader><CardTitle className='flex items-center'><KeyRound className='w-5 h-5 mr-3' />Privacy & Security</CardTitle></CardHeader>
            <CardContent className='space-y-6'>
                <div className='flex items-center justify-between'>
                    <Label htmlFor='lock-method'>Lock Method</Label>
                    <Select defaultValue='pin'>
                        <SelectTrigger className='w-[180px]'><SelectValue /></SelectTrigger>
                        <SelectContent><SelectItem value='pin'>PIN</SelectItem><SelectItem value='biometric'>Biometric</SelectItem></SelectContent>
                    </Select>
                </div>
                 <div className='flex items-center justify-between'>
                    <Label htmlFor='stealth-mode' className='flex items-center'><EyeOff className='w-4 h-4 mr-2' />Stealth Mode</Label>
                    <Switch id='stealth-mode' />
                </div>
                 <div className='flex items-center justify-between'>
                    <Label htmlFor='auto-lock' className='flex items-center'><PowerOff className='w-4 h-4 mr-2' />Auto-Lock</Label>
                    <Select defaultValue='1'>
                        <SelectTrigger className='w-[180px]'><SelectValue /></SelectTrigger>
                        <SelectContent><SelectItem value='0'>Instantly</SelectItem><SelectItem value='1'>After 1 minute</SelectItem></SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className='flex items-center'><Download className='w-5 h-5 mr-3' />Data Management</CardTitle></CardHeader>
            <CardContent className='space-y-4'>
                 <Button variant='outline' className='w-full justify-start'><Download className='w-4 h-4 mr-2' /> Export Encrypted Backup</Button>
                 <Button variant='destructive' className='w-full justify-start'><Trash2 className='w-4 h-4 mr-2' /> Securely Delete All Data</Button>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className='flex items-center'><SunDim className='w-5 h-5 mr-3' />Appearance</CardTitle></CardHeader>
            <CardContent className='space-y-6'>
                <div className='flex items-center justify-between'>
                    <Label htmlFor='language' className='flex items-center'><Languages className='w-4 h-4 mr-2' />Language</Label>
                    <Select defaultValue='en'>
                        <SelectTrigger className='w-[180px]'><SelectValue /></SelectTrigger>
                        <SelectContent><SelectItem value='en'>English</SelectItem><SelectItem value='sw'>Kiswahili</SelectItem></SelectContent>
                    </Select>
                </div>
                <div className='flex items-center justify-between'>
                    <Label htmlFor='font-size' className='flex items-center'><Text className='w-4 h-4 mr-2' />Font Size</Label>
                    <p className='text-sm'>Normal</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}