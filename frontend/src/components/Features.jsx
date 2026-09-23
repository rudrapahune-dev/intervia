import {
  Brain,
  MessageCircleQuestion,
  Mic,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI Interviewer",
    description:
      "Practice with an AI interviewer that asks realistic questions based on your chosen role.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Adaptive Questions",
    description:
      "Your next question can adapt to what you said instead of following a fixed script.",
  },
  {
    icon: Mic,
    title: "Voice Interviews",
    description:
      "Answer naturally using your voice and experience an interview closer to the real thing.",
  },
  {
    icon: BarChart3,
    title: "Detailed Feedback",
    description:
      "Understand what went well, what was missing, and where you can improve.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="border-t border-zinc-900 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Built for real practice
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            More than just
            <span className="text-zinc-500"> questions.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Intervia is designed to simulate the parts of an interview that
            actually matter — answering, thinking, adapting, and improving.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-800 md:grid-cols-2">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group bg-[#0a0a0a] p-8 transition-colors hover:bg-zinc-950 md:p-10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition-colors group-hover:border-zinc-600">
                  <Icon size={20} className="text-zinc-300" />
                </div>

                <h3 className="mt-7 text-xl font-medium">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-md leading-7 text-zinc-500">
                  {feature.description}
                </p>

                <div className="mt-8 h-px w-0 bg-white transition-all duration-500 group-hover:w-12" />
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Features;