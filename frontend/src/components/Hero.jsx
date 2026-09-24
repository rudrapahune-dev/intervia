import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mic,
  Sparkles,
  Volume2,
} from "lucide-react";

function Waveform() {
  const bars = [10, 18, 28, 16, 35, 22, 30, 14, 26, 38, 20, 30, 16, 24];

  return (
    <div className="flex h-10 items-center gap-1">
      {bars.map((height, index) => (
        <motion.span
          key={index}
          className="w-1 rounded-full bg-white/70"
          animate={{
            height: [height, Math.max(8, height - 8), height + 8, height],
          }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            delay: index * 0.06,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function Hero() {
  const navigate = useNavigate();

const handleStartInterview = () => {
  const token = localStorage.getItem("intervia_token");

  if (token) {
    navigate("/interview/setup");
  } else {
    navigate("/register");
  }
};
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />

        <motion.div
          className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-white/20"
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[15%] top-[35%] h-1.5 w-1.5 rounded-full bg-white/15"
          animate={{
            y: [0, 15, 0],
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3.5 py-2 text-xs text-zinc-400"
            >
              <Sparkles size={14} className="text-zinc-300" />
              AI-powered interview practice
            </motion.div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Practice interviews.
              <br />
              <span className="text-zinc-500">
                Get better every time.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
              Practice realistic technical interviews with an AI interviewer
              that asks follow-up questions, listens to your answers, and
              gives you actionable feedback.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
             <button
  type="button"
  onClick={handleStartInterview}
  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-medium text-black transition hover:bg-zinc-200"
>
  Start your first interview

  <ArrowRight
    size={17}
    className="transition-transform duration-200 group-hover:translate-x-1"
  />
</button>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-800 px-5 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-700 hover:text-white"
              >
                See how it works
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} />
                Adaptive questions
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} />
                Voice interviews
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} />
                Detailed feedback
              </span>
            </div>
          </motion.div>

          {/* RIGHT — INTERACTIVE PREVIEW */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -right-3 -top-5 z-10 hidden rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs text-zinc-300 shadow-2xl sm:flex sm:items-center sm:gap-2"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              AI is listening
            </motion.div>

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-zinc-900 px-3 pb-4">
                <div>
                  <p className="text-sm font-medium text-white">
                    Technical Interview
                  </p>

                  <p className="mt-1 text-xs text-zinc-600">
                    Backend Developer
                  </p>
                </div>

                <div className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[11px] text-emerald-400">
                  LIVE
                </div>
              </div>

              {/* AI message */}
              <div className="px-3 pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                    <Sparkles size={16} className="text-zinc-300" />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-600">AI Interviewer</p>

                    <p className="mt-2 max-w-sm text-sm leading-7 text-zinc-200">
                      Tell me how you would design a scalable REST API for a
                      backend application.
                    </p>
                  </div>
                </div>
              </div>

              {/* Voice activity */}
              <div className="mx-3 mt-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Volume2 size={15} />
                    AI speaking
                  </div>

                  <span className="text-[11px] text-zinc-700">
                    00:18
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <Waveform />

                  <div className="ml-4 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800">
                    <Mic size={15} className="text-zinc-400" />
                  </div>
                </div>
              </div>

              {/* User response */}
              <div className="px-3 pb-2 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-600">
                    Your response
                  </span>

                  <span className="text-xs text-zinc-700">
                    Listening...
                  </span>
                </div>

                <div className="mt-3 rounded-2xl border border-zinc-800 bg-black/30 px-4 py-4">
                  <p className="text-sm leading-6 text-zinc-500">
                    I would start by separating the API into independent
                    services and use caching for frequently requested data...
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;