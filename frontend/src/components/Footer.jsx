function Footer() {
  return (
    <footer className="border-t border-zinc-900 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-lg font-semibold tracking-tight">
            INTERVIA
          </p>

          <p className="mt-1 text-sm text-zinc-600">
            AI-powered interviews, built for real practice.
          </p>
        </div>

        <div className="flex gap-5 text-sm text-zinc-500">
          <a href="#" className="transition hover:text-white">
            GitHub
          </a>

          <a href="#" className="transition hover:text-white">
            LinkedIn
          </a>
        </div>

        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Intervia
        </p>

      </div>
    </footer>
  );
}

export default Footer;