import { ArrowRight, Settings2, MessageSquare, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Settings2,
    title: "Set up your interview",
    description:
      "Choose your target role, topics, and difficulty. Intervia creates an interview tailored to your goals.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Have the conversation",
    description:
      "Answer realistic questions from your AI interviewer. Follow-up questions can adapt to your previous answers.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Understand your performance",
    description:
      "Review your answers, feedback, scores, and improvement areas after the interview.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-zinc-900 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            How it works
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            From practice to
            <span className="text-zinc-500"> progress.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            A simple interview loop designed to help you practice,
            understand your mistakes, and improve with every attempt.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-20">

          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-zinc-800 md:block" />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="relative"
                >
                  {/* Number / icon */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-zinc-800 bg-[#0a0a0a]">
                    <Icon size={24} className="text-zinc-300" />
                  </div>

                  <p className="mt-8 text-xs font-medium tracking-[0.2em] text-zinc-600">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-3 text-xl font-medium">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-sm leading-7 text-zinc-500">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="absolute right-4 top-8 hidden text-zinc-700 md:block"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;