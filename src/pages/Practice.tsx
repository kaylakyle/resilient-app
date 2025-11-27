import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Sun, Shield, BrainCircuit } from 'lucide-react';

const exercises = [
  {
    title: 'Breathing Exercises',
    description: 'Calm your nervous system with guided breathing techniques.',
    icon: Sun,
    cta: 'Begin Breathing',
  },
  {
    title: 'Grounding AR',
    description: 'Use your camera to connect with your surroundings. No recording, ever.',
    icon: Shield,
    cta: 'Start Grounding',
  },
  {
    title: 'CBT Modules',
    description: 'Short, private exercises to help you reframe your thoughts.',
    icon: BrainCircuit,
    cta: 'Explore Modules',
  },
];

export default function Practice() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-heading font-bold mb-8'>Practice</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {exercises.map((exercise) => (
          <Card key={exercise.title} className='flex flex-col'>
            <CardHeader>
              <div className='flex items-center space-x-4 mb-4'>
                <div className='p-3 bg-primary/10 rounded-full'>
                    <exercise.icon className='w-6 h-6 text-primary' />
                </div>
                <CardTitle>{exercise.title}</CardTitle>
              </div>
              <CardDescription>{exercise.description}</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow flex items-end'>
              <Button className='w-full'>{exercise.cta}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}