import { ArrowRight } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <div className="text-2xl font-bold tracking-tight">
        INTERVIA
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
        <a href="#features" className="hover:text-white transition">
          Features
        </a>

        <a href="#how-it-works" className="hover:text-white transition">
          How it works
        </a>

        <a href="#about" className="hover:text-white transition">
          About
        </a>
      </div>

      <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200">
        Get Started
        <ArrowRight size={16} />
      </button>
    </nav>
  );
}

export default Navbar;