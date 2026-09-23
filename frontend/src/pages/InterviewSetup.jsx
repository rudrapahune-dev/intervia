import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Database,
  Globe,
  Server,
} from "lucide-react";

const roles = [
  "Backend Developer",
  "Frontend Developer",
  "Full Stack Developer",
  "Data Analyst",
  "AI / ML Engineer",
];

const difficulties = ["Easy", "Medium", "Hard"];

const focusAreas = [
  {
    name: "DSA",
    icon: Brain,
  },
  {
    name: "APIs",
    icon: Globe,
  },
  {
    name: "Databases",
    icon: Database,
  },
  {
    name: "System Design",
    icon: Server,
  },
];

function InterviewSetup() {
  const [role, setRole] = useState("Backend Developer");
  const [difficulty, setDifficulty] = useState("Medium");
  const [selectedFocus, setSelectedFocus] = useState(["DSA", "APIs"]);

  const toggleFocus = (name) => {
    setSelectedFocus((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-8 text-white md:px-10">
      <div className="mx-auto max-w-4xl">

        {/* Back */}
        <a
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to dashboard
        </a>

        {/* Heading */}
        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">
            New interview
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Configure your interview
          </h1>

          <p className="mt-3 max-w-xl leading-7 text-zinc-500">
            Tell Intervia what you want to practice and we'll tailor the
            interview around it.
          </p>
        </div>

        {/* Form */}
        <div className="mt-12 space-y-10">

          {/* Role */}
          <section>
            <label className="text-sm font-medium text-zinc-300">
              Target role
            </label>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {roles.map((item) => (
                <button
                  key={item}
                  onClick={() => setRole(item)}
                  className={`rounded-2xl border p-4 text-left text-sm transition ${
                    role === item
                      ? "border-zinc-500 bg-zinc-900 text-white"
                      : "border-zinc-800 bg-zinc-950 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          {/* Difficulty */}
          <section>
            <label className="text-sm font-medium text-zinc-300">
              Difficulty
            </label>

            <div className="mt-4 flex flex-wrap gap-3">
              {difficulties.map((item) => (
                <button
                  key={item}
                  onClick={() => setDifficulty(item)}
                  className={`rounded-full border px-5 py-2.5 text-sm transition ${
                    difficulty === item
                      ? "border-white bg-white text-black"
                      : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          {/* Focus areas */}
          <section>
            <label className="text-sm font-medium text-zinc-300">
              Focus areas
            </label>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {focusAreas.map((item) => {
                const Icon = item.icon;
                const selected = selectedFocus.includes(item.name);

                return (
                  <button
                    key={item.name}
                    onClick={() => toggleFocus(item.name)}
                    className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                      selected
                        ? "border-zinc-500 bg-zinc-900"
                        : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950">
                      <Icon size={18} className="text-zinc-400" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-zinc-600">
                        {selected ? "Selected" : "Add to interview"}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Interview type */}
          <section>
            <label className="text-sm font-medium text-zinc-300">
              Interview type
            </label>

            <div className="mt-4 rounded-2xl border border-zinc-700 bg-zinc-900 p-5">
              <p className="font-medium">
                Technical Interview
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Questions will focus on technical knowledge, problem solving,
                and practical engineering concepts.
              </p>
            </div>
          </section>

          {/* Summary */}
          <section className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              Interview summary
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              <div>
                <p className="text-xs text-zinc-600">Role</p>
                <p className="mt-1 text-sm">{role}</p>
              </div>

              <div>
                <p className="text-xs text-zinc-600">Difficulty</p>
                <p className="mt-1 text-sm">{difficulty}</p>
              </div>

              <div>
                <p className="text-xs text-zinc-600">Focus</p>
                <p className="mt-1 text-sm">
                  {selectedFocus.length} areas
                </p>
              </div>
            </div>
          </section>

          {/* Start */}
          <div className="flex justify-end pb-12">
            
              <a
  href="/interview/demo"
  className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-zinc-200"
>
  Start interview
  <ArrowRight size={17} />
</a>
            
          </div>

        </div>
      </div>
    </main>
  );
}

export default InterviewSetup;