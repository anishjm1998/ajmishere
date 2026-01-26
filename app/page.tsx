export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbf9] text-zinc-900">
      <div className="mx-auto max-w-5xl px-5 py-10">
        {/* Topbar */}
        <header className="flex items-center justify-between gap-4 pb-10">
          <div className="text-sm tracking-wide text-zinc-700">
            <span className="font-medium">AJM</span>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-zinc-600">
            <a className="hover:text-zinc-900" href="#about">About</a>
            <a className="hover:text-zinc-900" href="#experience">Experience</a>
            <a className="hover:text-zinc-900" href="#work">Work</a>
            <a className="hover:text-zinc-900" href="#links">Links</a>
            <a className="hover:text-zinc-900" href="#contact">Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="pb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Personal Portfolio
          </p>

          <h1 className="mt-4 text-5xl font-medium tracking-tight sm:text-6xl">
            Anish John Moothedam
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
            Minimal portfolio. Real work. Real interests. Clean design.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 hover:bg-zinc-50"
            >
              View work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-300 bg-transparent px-4 py-2 text-sm text-zinc-900 hover:bg-zinc-50"
            >
              Contact
            </a>
          </div>
        </section>

        <div className="h-px w-full bg-zinc-200" />

        {/* About */}
        <section id="about" className="py-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-sm font-medium">About</h2>
            <p className="text-sm text-zinc-500">Short, clean, personal.</p>
          </div>

          <div className="mt-5 max-w-3xl space-y-4 text-zinc-700">
            <p>
              I’m AJM, a developer who enjoys building simple, useful things.
              I like clean UI, strong fundamentals, and projects that feel practical.
            </p>
            <p>
              Currently focused on software roles in Canada and building finance-related projects.
            </p>
          </div>
        </section>

        <div className="h-px w-full bg-zinc-200" />

        {/* Experience */}
        <section id="experience" className="py-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-sm font-medium">Experience</h2>
            <p className="text-sm text-zinc-500">Simple timeline format.</p>
          </div>

          <div className="mt-6 space-y-6">
            {[
              {
                title: "Your Job Title",
                company: "Company Name",
                date: "2025 → Present",
                desc: "1–2 lines about what you did, impact, or what you built.",
              },
              {
                title: "Previous Role",
                company: "Another Company",
                date: "2024 → 2025",
                desc: "Mention tools, systems, or outcomes. Keep it minimal.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="grid gap-2 border-b border-zinc-200 pb-6 sm:grid-cols-2"
              >
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-sm text-zinc-500">{item.company}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                    {item.date}
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-zinc-200" />

        {/* Work */}
        <section id="work" className="py-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-sm font-medium">Work</h2>
            <p className="text-sm text-zinc-500">Projects worth showing.</p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              {
                title: "Finance Project",
                tag: "Python",
                desc: "A project showing analysis, automation, or insights.",
                href: "#",
              },
              {
                title: "AI Automation",
                tag: "Agents",
                desc: "Automation build with workflows and business value.",
                href: "#",
              },
              {
                title: "Portfolio Website",
                tag: "UI",
                desc: "Minimal layout inspired by modern portfolios.",
                href: "#",
              },
            ].map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-zinc-200 bg-white/60 p-4 hover:bg-white"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium">{p.title}</p>
                  <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">
                    {p.tag}
                  </span>
                </div>

                <p className="mt-3 text-sm text-zinc-600">{p.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-zinc-200" />

        {/* Links */}
        <section id="links" className="py-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-sm font-medium">Links</h2>
            <p className="text-sm text-zinc-500">Chess. Music. Writing.</p>
          </div>

          <div className="mt-6 space-y-3">
            {[
              { left: "Writing", right: "WordPress Blog →", href: "https://your-wordpress-blog.com" },
              { left: "Chess", right: "Chess.com Profile →", href: "https://www.chess.com/" },
              { left: "Music", right: "Spotify Playlist →", href: "https://open.spotify.com/" },
              { left: "GitHub", right: "anishjm1998 →", href: "https://github.com/anishjm1998" },
              { left: "LinkedIn", right: "Connect →", href: "https://www.linkedin.com/" },
            ].map((l) => (
              <a
                key={l.left}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-white/60 px-4 py-3 text-sm hover:bg-white"
              >
                <span className="text-zinc-800">{l.left}</span>
                <span className="text-zinc-500">{l.right}</span>
              </a>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-zinc-200" />

        {/* Contact */}
        <section id="contact" className="py-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-sm font-medium">Contact</h2>
            <p className="text-sm text-zinc-500">Keep it simple.</p>
          </div>

          <div className="mt-6 space-y-3 text-sm text-zinc-700">
            <p>
              Email:{" "}
              <a className="underline underline-offset-4 hover:text-zinc-900" href="mailto:anish@example.com">
                anish@example.com
              </a>
            </p>

            <p>
              Resume:{" "}
              <a className="underline underline-offset-4 hover:text-zinc-900" href="#" target="_blank" rel="noreferrer">
                Download PDF
              </a>
            </p>
          </div>
        </section>

        <footer className="pt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()} AJM
        </footer>
      </div>
    </main>
  );
}
