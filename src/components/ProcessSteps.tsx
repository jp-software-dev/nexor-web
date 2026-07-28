import Reveal from './Reveal';
import type { ProcessStep } from '../data/solutions';

interface ProcessStepsProps {
  steps: ProcessStep[];
  title?: string;
}

export default function ProcessSteps({ steps, title = 'Cómo trabajamos contigo' }: ProcessStepsProps) {
  return (
    <div>
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-medium mb-8" style={{ letterSpacing: '-0.02em' }}>
          {title}
        </h2>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 100}>
            <div className="liquid-glass border border-white/10 rounded-xl p-6 h-full">
              <span className="text-3xl font-light text-gray-500">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="text-base font-medium mt-3 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
