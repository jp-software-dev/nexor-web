import Reveal from './Reveal';
import { stats } from '../data/stats';

export default function TrustBar() {
  return (
    <section className="bg-black text-white px-6 py-14 md:px-12 lg:px-16 border-y border-white/10">
      <div className="mx-auto max-w-6xl grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 100} className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-normal" style={{ letterSpacing: '-0.03em' }}>
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
