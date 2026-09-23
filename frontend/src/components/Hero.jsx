import { ArrowRight, Mic, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300">
            <Sparkles size={15} />
            AI-powered interview practice
          </div>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Practice interviews.
            <br />

            <span className="text-zinc-500">
              Get better every time.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
            Intervia simulates realistic interviews, adapts to your answers,
            and gives you detailed feedback so you know exactly what to improve.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-black transition hover:scale-[1.02] hover:bg-zinc-200">
              Start an interview
              <ArrowRight size={18} />
            </button>

            <button className="rounded-full border border-zinc-800 px-6 py-3.5 font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-white">
              See how it works
            </button>
          </div>
        </motion.div>

        {/* RIGHT — INTERVIEW CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-4 -top-5 z-10 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 shadow-2xl"
          >
            <p className="text-xs text-zinc-500">Interview status</p>
            <p className="mt-1 text-sm font-medium text-white">
              AI is listening
            </p>
          </motion.div>

          {/* Main card */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 shadow-2xl backdrop-blur-xl">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-5">
              <div>
                <p className="text-xs text-zinc-500">
                  BACKEND DEVELOPER
                </p>

                <p className="mt-1 font-medium">
                  Technical Interview
                </p>
              </div>

              <div className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                LIVE
              </div>
            </div>

            {/* AI question */}
            <div className="py-8">
              <div className="mb-3 flex items-center gap-2 text-sm text-zinc-500">
                <Sparkles size={15} />
                AI Interviewer
              </div>

              <p className="text-xl leading-8 text-zinc-100">
                "Can you explain how you would design a scalable REST API?"
              </p>
            </div>

            {/* User answer */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs text-zinc-500">
                    YOUR RESPONSE
                  </p>

                  <p className="mt-2 text-sm text-zinc-300">
                    Listening to your answer...
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                  <Mic size={20} />
                </div>

              </div>

              {/* Audio bars */}
              <div className="mt-5 flex h-8 items-center gap-1">
                {[12, 20, 30, 16, 26, 34, 18, 28, 14, 22, 32, 18].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      animate={{ height: [height, height + 8, height] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: index * 0.08,
                      }}
                      className="w-1 rounded-full bg-zinc-500"
                    />
                  )
                )}
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-5 flex items-center justify-between text-xs text-zinc-500">
              <span>Question 4 of 10</span>
              <span>02:18</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;