import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Mic, Target } from "lucide-react";

const points = [
  {
    icon: Brain,
    title: "AI-driven practice",
    text: "Intervia evaluates your answers and adapts the interview based on how you respond.",
  },
  {
    icon: Mic,
    title: "Built for conversation",
    text: "Practice through voice instead of rehearsing answers into a text box.",
  },
  {
    icon: Target,
    title: "Focused improvement",
    text: "Understand what you got right, what you missed, and what to work on next.",
  },
];

function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              About Intervia
            </p>

            <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Built to make interview practice feel more like the real thing.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
              Most interview preparation is repetitive. You memorize questions,
              write answers, and practice without meaningful feedback.
              Intervia is designed around a different approach:
              realistic conversations, adaptive questions, and useful feedback
              after every interview.
            </p>

            <a
              href="#features"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              Explore how it works
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                    <Icon size={19} className="text-zinc-200" />
                  </div>

                  <h3 className="text-lg font-medium text-white">
                    {point.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-zinc-500">
                    {point.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;