import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles, Activity } from 'lucide-react';

function StatPill({ icon: Icon, label, value }) {
  return (
    <div className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md transition hover:bg-white/10">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
        <Icon size={16} className="opacity-90" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wider text-white/60">{label}</span>
        <span className="text-sm font-semibold text-white">{value}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] w-full items-center overflow-hidden bg-black">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette and gradient accents (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-24 md:mt-28"
        >
          {/* Eyebrow badge */}
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md">
            <Sparkles size={14} className="text-cyan-300" />
            <span>Real-time crypto intelligence</span>
          </div>

          <h1 className="mx-auto max-w-4xl bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Real-time crypto intelligence for traders
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            Calm confluence cards, live burst signals, and AI narratives with receipts. Get clarity in seconds with institutional-grade trading intelligence.
          </p>

          {/* CTA Row */}
          <div className="mx-auto mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_6px_30px_-10px_rgba(34,211,238,0.8)] transition hover:brightness-110 focus:outline-none"
            >
              Start free trial
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
            >
              View live signals
            </a>
          </div>

          {/* Floating stat pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <StatPill icon={Activity} label="Latency" value="< 200ms feeds" />
            <StatPill icon={Sparkles} label="Coverage" value="2000+ pairs" />
          </div>
        </motion.div>

        {/* Glass info bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          className="mt-14 w-full"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-white backdrop-blur-md sm:flex-row sm:p-5">
            <div className="max-w-3xl text-sm text-white/80">
              Live market microstructure mapped to narrative. Each signal ships with on-chain receipts and order-flow context.
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_20px_4px_rgba(52,211,153,0.6)]" />
              <span className="text-xs text-white/70">Exchanges synced</span>
            </div>
          </div>
        </motion.div>

        <div className="h-20" />
      </div>
    </section>
  );
}
