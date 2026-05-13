export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-4">
          Financial Planner
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
          Chris Brame
        </h1>
        <p className="max-w-xl text-lg text-slate-500 leading-relaxed">
          Helping individuals and families build clarity, confidence, and lasting financial security.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block bg-slate-900 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-slate-700 transition-colors"
        >
          Get in touch
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">About</h2>
        <p className="text-slate-500 leading-relaxed">
          I&apos;m a financial planner with a straightforward approach: understand where you are,
          define where you want to go, and build a plan to get there. Whether you&apos;re just
          starting out or planning for retirement, I work with you to make sense of your finances
          and make confident decisions for the future.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-2xl mx-auto px-6 py-24 border-t border-slate-100">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">Contact</h2>
        <p className="text-slate-500 mb-4">
          Ready to talk? Reach out and I&apos;ll get back to you.
        </p>
        <a
          href="mailto:cpbrame@gmail.com"
          className="text-slate-900 font-medium underline underline-offset-4 hover:text-slate-600 transition-colors"
        >
          cpbrame@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-300 text-sm py-10 border-t border-slate-100">
        © {new Date().getFullYear()} Chris Brame
      </footer>

    </div>
  );
}
