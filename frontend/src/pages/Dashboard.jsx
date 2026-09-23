import {
  BarChart3,
  Clock3,
  History,
  Home,
  LogOut,
  Settings,
  Sparkles,
  UserRound,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Interviews",
    value: "0",
    description: "Completed interviews",
    icon: History,
  },
  {
    label: "Average score",
    value: "—",
    description: "No data yet",
    icon: BarChart3,
  },
  {
    label: "Practice time",
    value: "0h",
    description: "Total practice time",
    icon: Clock3,
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-zinc-900 bg-[#090909] px-5 py-6 md:flex md:flex-col">

          {/* Logo */}
          <div className="px-3">
            <p className="text-xl font-bold tracking-tight">
              INTERVIA
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              AI interview practice
            </p>
          </div>

          {/* Navigation */}
          <nav className="mt-10 space-y-1">

            <a
              href="/dashboard"
              className="flex items-center gap-3 rounded-xl bg-zinc-900 px-3 py-2.5 text-sm text-white"
            >
              <Home size={17} />
              Dashboard
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-zinc-900 hover:text-white"
            >
              <History size={17} />
              Interviews
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-zinc-900 hover:text-white"
            >
              <BarChart3 size={17} />
              Progress
            </a>

          </nav>

          {/* Bottom navigation */}
          <div className="mt-auto space-y-1">

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-zinc-900 hover:text-white"
            >
              <Settings size={17} />
              Settings
            </a>

            <a
              href="/"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-zinc-900 hover:text-white"
            >
              <LogOut size={17} />
              Leave dashboard
            </a>

          </div>

        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 px-6 py-8 md:px-10 lg:px-12">

          <div className="mx-auto max-w-6xl">

            {/* Top bar */}
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-zinc-600">
                  Dashboard
                </p>

                <h1 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                  Welcome back, Rudra.
                </h1>

                <p className="mt-2 text-sm text-zinc-500">
                  Ready for your next interview?
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900">
                <UserRound size={18} className="text-zinc-400" />
              </div>

            </div>

            {/* New interview CTA */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-7 md:p-9"
            >

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative max-w-2xl">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                  <Sparkles size={18} className="text-zinc-300" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
                  Ready to practice?
                </h2>

                <p className="mt-3 max-w-lg leading-7 text-zinc-500">
                  Choose a role, configure your interview, and let Intervia
                  simulate the conversation.
                </p>

                <button className="mt-7 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
                  Start an interview
                </button>

              </div>

            </motion.section>

            {/* Stats */}
            <section className="mt-6 grid gap-4 sm:grid-cols-3">

              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
                  >

                    <div className="flex items-center justify-between">

                      <p className="text-sm text-zinc-500">
                        {stat.label}
                      </p>

                      <Icon size={17} className="text-zinc-700" />

                    </div>

                    <p className="mt-5 text-3xl font-semibold">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs text-zinc-600">
                      {stat.description}
                    </p>

                  </motion.div>
                );
              })}

            </section>

            {/* Recent interviews */}
            <section className="mt-8">

              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-medium">
                    Recent interviews
                  </h2>

                  <p className="mt-1 text-sm text-zinc-600">
                    Your latest practice sessions will appear here.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center">

                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900">
                  <History size={18} className="text-zinc-600" />
                </div>

                <p className="mt-4 text-sm font-medium text-zinc-300">
                  No interviews yet
                </p>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-600">
                  Complete your first interview and your history will show up
                  here.
                </p>

              </div>

            </section>

          </div>

        </main>

      </div>
    </div>
  );
}

export default Dashboard;