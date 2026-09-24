import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

const handleGetStarted = () => {
  const token = localStorage.getItem("intervia_token");

  if (token) {
    navigate("/interview/setup");
  } else {
    navigate("/register");
  }
};
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="text-lg font-semibold tracking-[-0.03em] text-white"
        >
          INTERVIA
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            How it works
          </a>

          <a
            href="#about"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            About
          </a>
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/login"
            className="rounded-lg px-4 py-2.5 text-sm text-zinc-400 transition hover:text-white"
          >
            Sign in
          </a>

          <button
  type="button"
  onClick={handleGetStarted}
  className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
>
  Get started

  <ArrowRight
    size={15}
    className="transition-transform duration-200 group-hover:translate-x-0.5"
  />
</button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-300 transition hover:border-zinc-700 hover:text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-zinc-900 md:hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto flex max-w-7xl flex-col px-6 py-5"
            >
              <a
                href="#features"
                onClick={closeMenu}
                className="border-b border-zinc-900 py-4 text-sm text-zinc-400 transition hover:text-white"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                onClick={closeMenu}
                className="border-b border-zinc-900 py-4 text-sm text-zinc-400 transition hover:text-white"
              >
                How it works
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="border-b border-zinc-900 py-4 text-sm text-zinc-400 transition hover:text-white"
              >
                About
              </a>

              <a
                href="/login"
                onClick={closeMenu}
                className="py-4 text-sm text-zinc-400 transition hover:text-white"
              >
                Sign in
              </a>

              <a
                href="/register"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Get started
                <ArrowRight size={15} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;