import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';
import { Shield, Sun, KeyRound, Users, Languages, Download, CheckCircle } from 'lucide-react';

const WelcomeStep = ({ onNext }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='text-center flex flex-col items-center justify-center h-full'>
    <div className='relative w-64 h-64 mb-8'>
        <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/2462370a-f191-4e10-a460-3496cc174d2f/breathing-sunrise-animation-eqra9r5-1764279601396.webp' alt='Breathing Sunrise' className='w-full h-full object-cover rounded-full animate-breathing' />
    </div>
    <h1 className='text-4xl font-heading mb-2'>Welcome to Resilience Hub</h1>
    <p className='text-lg text-muted-foreground mb-8'>A quiet place to find your strength.</p>
    <p className='italic text-soft-sage mb-12'>'The oak fought the wind and was broken, the willow bent when it must and survived.'</p>
    <Button onClick={onNext} size='lg'>Begin Setup</Button>
  </motion.div>
);

const PrivacyStep = ({ onNext }) => (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className='max-w-md mx-auto'>
        <div className='bg-card p-8 rounded-lg shadow-lg border border-border'>
            <div className='flex items-center mb-6'>
                <Shield className='w-8 h-8 text-primary mr-4' />
                <h2 className='text-2xl font-heading'>Your Privacy is Sacred</h2>
            </div>
            <div className='space-y-4 text-card-foreground'>
                <p>Resilience Hub is designed to be a private sanctuary. Here’s our promise:</p>
                <ul className='list-disc list-inside space-y-2'>
                    <li><span className='font-semibold'>Data stays on your device.</span> We never send your journal entries, mood logs, or personal data to the cloud.</li>
                    <li><span className='font-semibold'>No user accounts.</span> You don’t need to sign up or log in.</li>
                    <li><span className='font-semibold'>Anonymous by design.</span> We can’t see who you are or how you use the app.</li>
                </ul>
                <p className='mt-4'>Your trust is everything. This app is a tool for you, and you are in complete control.</p>
            </div>
            <Button onClick={onNext} className='w-full mt-8'>I Understand</Button>
        </div>
    </motion.div>
);

const SetupStep = ({ onNext }) => (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className='max-w-2xl mx-auto'>
        <h2 className='text-3xl font-heading text-center mb-8'>Create Your Safe Space</h2>
        <div className='space-y-10'>
            <div className='bg-card p-6 rounded-lg border border-border'>
                <h3 className='font-semibold text-lg mb-4 flex items-center'><CheckCircle className='w-5 h-5 mr-2 text-calm-green' /> Consent</h3>
                <div className='flex items-center space-x-2'>
                    <Checkbox id='terms' defaultChecked disabled />
                    <label htmlFor='terms' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>I understand this is not a replacement for professional help.</label>
                </div>
            </div>

            <div className='bg-card p-6 rounded-lg border border-border'>
                <h3 className='font-semibold text-lg mb-4 flex items-center'><Users className='w-5 h-5 mr-2 text-peach' /> Trusted Contacts (Optional)</h3>
                <p className='text-sm text-muted-foreground mb-4'>In an emergency, we can send a message to a trusted contact. This is stored securely on your device.</p>
                <Input placeholder='Enter contact name or number' />
            </div>

            <div className='bg-card p-6 rounded-lg border border-border'>
                <h3 className='font-semibold text-lg mb-4 flex items-center'><KeyRound className='w-5 h-5 mr-2 text-muted-amber' /> Lock Method</h3>
                <RadioGroup defaultValue='pin' className='flex space-x-4'>
                    <div className='flex items-center space-x-2'><RadioGroupItem value='pin' id='pin' /><Label htmlFor='pin'>PIN Code</Label></div>
                    <div className='flex items-center space-x-2'><RadioGroupItem value='biometric' id='biometric' /><Label htmlFor='biometric'>Biometric</Label></div>
                    <div className='flex items-center space-x-2'><RadioGroupItem value='none' id='none' /><Label htmlFor='none'>None</Label></div>
                </RadioGroup>
            </div>
            
            <div className='flex justify-end'>
              <Button onClick={onNext} size='lg'>Continue</Button>
            </div>
        </div>
    </motion.div>
);

const FinalStep = ({ onComplete }) => (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className='text-center'>
        <CheckCircle className='w-24 h-24 text-calm-green mx-auto mb-6' />
        <h1 className='text-4xl font-heading mb-2'>You're safe here.</h1>
        <p className='text-lg text-muted-foreground mb-8'>Your Resilience Hub is ready.</p>
        <Button onClick={onComplete} size='lg'>Enter Your Space</Button>
    </motion.div>
);

export default function Onboarding({ onComplete }) {
    const [step, setStep] = useState(0);

    const steps = [
        <WelcomeStep onNext={() => setStep(1)} />,
        <PrivacyStep onNext={() => setStep(2)} />,
        <SetupStep onNext={() => setStep(3)} />,
        <FinalStep onComplete={onComplete} />
    ];

    return (
        <div className='min-h-screen bg-deep-indigo text-white flex items-center justify-center p-4'>
            <AnimatePresence mode='wait'>
                {steps[step]}
            </AnimatePresence>
        </div>
    );
}