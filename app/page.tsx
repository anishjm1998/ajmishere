"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  {
    label: "Blog",
    value: "jacobeanforlife.wordpress.com",
    href: "https://jacobeanforlife.wordpress.com/",
  },
  {
    label: "Chess",
    value: "AJM_1998",
    href: "https://www.chess.com/member/ajm_1998",
  },
  {
    label: "Spotify",
    value: "Playlist",
    href: "https://open.spotify.com/playlist/664oO4IdrsAzGqOhITer3U?si=3bf02a7cf5bd4195",
  },
  {
    label: "GitHub",
    value: "anishjm1998",
    href: "https://github.com/anishjm1998/new-portfolio",
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Plato Technologies Inc.",
    year: "Oct 2025 - Present",
    location: "San Francisco, USA",
    details:
      "AI Systems – Agent automation, reinforcement learning, and synthetic environments.",
    tone: "present",
  },
  {
    role: "Software Developer",
    company: "Semper8 Capital Ltd.",
    year: "Jan 2025 - Aug 2025",
    location: "Toronto, Canada",
    details:
      "Fintech – Financial data pipelines, dashboards, and real-time communication platforms.",
    tone: "recent",
  },
  {
    role: "Application Development Analyst",
    company: "Accenture",
    year: "2021 – 2023",
    location: "Kolkata, India",
    details:
      "Enterprise Software – Backend automation, internal tools, and large-scale systems.",
    tone: "past",
  },
];

const education = [
  {
    program: "Masters in Applied Computing",
    school: "University of Windsor",
    year: "2024 – 2025",
    location: "Windsor, Canada",
  },
  {
    program: "B.Tech in Computer Science and Engineering",
    school: "Karunya University",
    year: "2016 – 2020",
    location: "Coimbatore, India",
  },
  {
    program: "High School (Computer Science)",
    school: "St. James' School",
    year: "2002 – 2016",
    location: "Kolkata, India",
  },
];

const interests = [
  {
    title: "Sports",
    line: "I play almost every sport. Also a complete nerd for trivia, stats, and random sports facts.",
  },

  {
    title: "Gaming",
    line: "Self-proclaimed FIFA god. Challenge me on ",
    linkText: "Chess.com (AJM_1998)",
    href: "https://www.chess.com/member/ajm_1998",
    after: " if you think you can beat me.",
  },

  {
    title: "Reading & Writing",
    line: "I used to read a lot of sci-fi, mystery thrillers, and fantasy fiction. Now I write a lot here - check out my blog:",
    href: "https://jacobeanforlife.wordpress.com/",
    cta: "jacobeanforlife.wordpress.com",
  },

  {
    title: "Music",
    englishLabel: "English Edition",
    englishHref:
      "https://open.spotify.com/playlist/664oO4IdrsAzGqOhITer3U?si=3bf02a7cf5bd4195",
    englishText:
      "100 artists. 100 songs. One favorite from each, for you to listen to on loop.",
    indiaLabel: "Indian Edition",
    indiaHref:
      "https://open.spotify.com/playlist/664oO4IdrsAzGqOhITer3U?si=3bf02a7cf5bd4195",
    indiaText: "100 songs from India you should listen to.",
  },

  {
    title: "Foodie",
    line: "Certified biryani connoisseur. Other weaknesses include fried chicken, crispy masala dosa, and strong-flavoured coffee.",
  },
];

const languages = [
  { name: "English", level: "Native" },
  { name: "Malayalam", level: "Native" },
  { name: "Hindi", level: "Fluent" },
  { name: "Bengali", level: "Fluent" },
  { name: "Tamil", level: "Beginner" },
  { name: "French", level: "Beginner" },
];

function Divider() {
  return <div className="h-px w-full bg-[var(--border)]" />;
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border p-6",
        "bg-[var(--card)] border-[var(--border)]",
        "shadow-[0_1px_0_rgba(0,0,0,0.05)]",
        "transition-all duration-200",
        "hover:bg-[var(--cardHover)] hover:border-[var(--borderStrong)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs text-[var(--muted)]">
      {children}
    </span>
  );
}

/* Better theme icons (minimal + aesthetic) */
function ThemeIcon({ dark }: { dark: boolean }) {
  return (
    <span className="inline-flex items-center justify-center">
      {dark ? (
        <span className="text-[15px] leading-none">◐</span>
      ) : (
        <span className="text-[15px] leading-none">◑</span>
      )}
    </span>
  );
}

function FlipAvatar() {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      onClick={() => setFlipped((v) => !v)}
      className="group relative h-[150px] w-[150px] sm:h-[190px] sm:w-[190px] rounded-full p-[6px] transition-transform duration-300 hover:scale-[1.02]"
      style={{ perspective: "1200px" }}
      aria-label="Flip profile photo"
      title="Click to flip"
    >
      <div className="absolute inset-0 rounded-full border border-[var(--borderStrong)] bg-[var(--ring)] opacity-60" />

      <div
        className="relative h-full w-full rounded-full"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 1100ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src="/images/ajm1.jpeg"
            alt="Anish profile photo"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className="absolute inset-0 overflow-hidden rounded-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Image
            src="/images/ajm2.jpeg"
            alt="Anish alternate profile photo"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] text-[var(--muted)] opacity-0 transition-opacity group-hover:opacity-100">
        click to flip
      </span>
    </button>
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("ajm-theme");
    const isDark = saved === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("ajm-theme", next ? "dark" : "light");
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:py-20">
        {/* TOP BAR */}
        <header className="flex items-center justify-between gap-3 pb-12">
          {/* Aesthetic AJM mark */}
          <div className="flex items-center gap-2">
            <div className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--muted)]">
              AJM
            </div>
          </div>

          <nav className="hidden sm:flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm font-semibold text-[var(--muted)]">
            {[
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Education", href: "#education" },
              { label: "Interests", href: "#interests" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1 hover:bg-[var(--cardHover)] hover:text-[var(--foreground)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="h-10 w-10 rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--cardHover)] hover:border-[var(--borderStrong)] transition-colors"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <ThemeIcon dark={dark} />
          </button>
        </header>

        {/* HERO */}
        <section className="pb-12">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h1 className="text-[44px] font-semibold leading-[1.06] tracking-tight sm:text-[64px]">
                Anish John Moothedam
              </h1>

              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
                Full-stack developer. Recent Master’s grad from the University
                of Windsor.
              </p>

              {/* pills BELOW description */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Pill>Full-stack</Pill>
                <Pill>Windsor</Pill>
                <Pill>Open to work</Pill>
              </div>
            </div>

            <div className="flex shrink-0 justify-start sm:justify-end">
              <FlipAvatar />
            </div>
          </div>
        </section>

        <Divider />

        {/* ABOUT */}
        <section id="about" className="py-14">
          <h2 className="text-lg font-semibold tracking-tight">About</h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Card>
              <p className="text-sm font-medium">What I do</p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                I enjoy building applications from the ground up, working on
                both backend systems and frontend interfaces.
              </p>
            </Card>

            <Card>
              <p className="text-sm font-medium">Outside work</p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Usually deep in trivia rabbit holes, following sports, or
                playing chess. Also into geography, languages, and cultures.
              </p>
            </Card>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm hover:bg-[var(--cardHover)] hover:border-[var(--borderStrong)] transition-colors"
              >
                <p className="text-xs text-[var(--muted)]">{l.label}</p>
                <p className="mt-1 font-medium">{l.value}</p>
              </a>
            ))}
          </div>
        </section>

        <Divider />

        {/* WORK EXPERIENCE (Present → Past) */}
        <section id="experience" className="py-14">
          <h2 className="text-lg font-semibold tracking-tight">
            Work Experience
          </h2>

          <div className="mt-8 relative">
            {/* rail */}
            <div className="absolute left-[11px] top-1 h-[calc(100%-8px)] w-px bg-[var(--border)] opacity-60" />

            <div className="space-y-5">
              {experience.map((e) => {
                const dot =
                  e.tone === "present"
                    ? "bg-[var(--accent)] shadow-[0_0_0_6px_rgba(122,92,71,0.18)]"
                    : e.tone === "recent"
                      ? "bg-[var(--foreground)]/70 shadow-[0_0_0_6px_rgba(24,24,27,0.08)] dark:shadow-[0_0_0_6px_rgba(244,244,245,0.08)]"
                      : "bg-[var(--muted)]/50 shadow-[0_0_0_6px_rgba(0,0,0,0.05)]";

                return (
                  <div key={e.role} className="relative pl-10">
                    {/* dot */}
                    <div className="absolute left-[7px] top-[18px]">
                      <div
                        className={`h-[10px] w-[10px] rounded-full ${dot}`}
                      />
                    </div>

                    {/* card */}
                    <div
                      className={[
                        "rounded-[26px] border border-[var(--border)] bg-[var(--card)]",
                        "px-5 py-4",
                        "shadow-[0_8px_20px_rgba(0,0,0,0.04)]",
                        "transition-all duration-300",
                        "hover:bg-[var(--cardHover)] hover:border-[var(--borderStrong)] hover:-translate-y-[1px]",
                      ].join(" ")}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <p className="text-[14px] font-semibold leading-tight text-[var(--foreground)]">
                            {e.role}
                          </p>

                          <p className="mt-1 text-[13px] text-[var(--muted)]">
                            {e.company}
                            <span className="mx-2 opacity-30">·</span>
                            {e.location}
                          </p>
                        </div>

                        <span className="text-[11px] tracking-wide text-[var(--muted)] sm:text-right">
                          {e.year}
                        </span>
                      </div>

                      <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)]">
                        {e.details}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider />

        {/* EDUCATION (Years only, clean list) */}
        <section id="education" className="py-14">
          <h2 className="text-lg font-semibold tracking-tight">Education</h2>

          <div className="mt-8 mx-auto max-w-3xl space-y-4">
            {education.map((ed, idx) => (
              <div
                key={ed.program}
                className={[
                  "rounded-[26px] border border-[var(--border)] bg-[var(--card)]",
                  "px-5 py-4",
                  "shadow-[0_8px_18px_rgba(0,0,0,0.04)]",
                  "transition-all duration-300",
                  "hover:bg-[var(--cardHover)] hover:border-[var(--borderStrong)] hover:-translate-y-[1px]",
                  idx === 1 ? "rotate-[0.12deg]" : "",
                  idx === 2 ? "-rotate-[0.12deg]" : "",
                ].join(" ")}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-[14px] font-semibold leading-tight text-[var(--foreground)]">
                      {ed.program}
                    </p>

                    <p className="mt-1 text-[13px] text-[var(--muted)]">
                      {ed.school}
                      <span className="mx-2 opacity-30">·</span>
                      {ed.location}
                    </p>
                  </div>

                  <span className="text-[11px] tracking-wide text-[var(--muted)] sm:text-right">
                    {ed.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* INTERESTS (Minimal list rows, inline links) */}
        <section id="interests" className="py-14">
          <h2 className="text-lg font-semibold tracking-tight">Interests</h2>

          <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]">
            {interests.map((i, idx) => (
              <div key={`${i.title}-${idx}`}>
                <div className="px-5 py-4 transition-colors hover:bg-[var(--cardHover)]">
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {i.title}
                  </p>

                  {/* MUSIC (2 lines, both linked) */}
                  {i.title === "Music" ? (
                    <div className="mt-1 space-y-1 text-[13px] leading-relaxed text-[var(--muted)]">
                      <p>
                        <a
                          href={i.englishHref}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-[var(--foreground)] underline decoration-[var(--borderStrong)] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
                        >
                          {i.englishLabel}
                        </a>
                        : <span>{i.englishText}</span>
                      </p>

                      <p>
                        <a
                          href={i.indiaHref}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-[var(--foreground)] underline decoration-[var(--borderStrong)] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
                        >
                          {i.indiaLabel}
                        </a>
                        : <span>{i.indiaText}</span>
                      </p>
                    </div>
                  ) : (
                    <p className="mt-1 text-[13px] leading-relaxed text-[var(--muted)]">
                      {/* Gaming special (only Chess.com text linked) */}
                      {i.title === "Gaming" ? (
                        <>
                          {i.line}
                          <a
                            href={i.href}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-[var(--foreground)] underline decoration-[var(--borderStrong)] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
                          >
                            {i.linkText}
                          </a>
                          {i.after}
                        </>
                      ) : (
                        <>
                          {i.line}{" "}
                          {i.href ? (
                            <a
                              href={i.href}
                              target="_blank"
                              rel="noreferrer"
                              className="font-medium text-[var(--foreground)] underline decoration-[var(--borderStrong)] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
                            >
                              {i.cta}
                            </a>
                          ) : null}
                        </>
                      )}
                    </p>
                  )}
                </div>

                {idx !== interests.length - 1 ? (
                  <div className="h-px w-full bg-[var(--border)] opacity-70" />
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* LANGUAGES (Centered + refined chips) */}
        <section className="py-14 text-center">
          <h2 className="text-lg font-semibold tracking-tight">Languages</h2>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {languages.map((l) => (
              <span
                key={l.name}
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm transition-all hover:bg-[var(--cardHover)] hover:border-[var(--borderStrong)] hover:-translate-y-[1px]"
              >
                <span className="font-semibold text-[var(--foreground)]">
                  {l.name}
                </span>

                <span className="text-[12px] text-[var(--muted)] opacity-80 group-hover:opacity-100 transition-opacity">
                  {l.level}
                </span>
              </span>
            ))}
          </div>
        </section>

        <Divider />

        {/* CONTACT */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-lg font-semibold tracking-tight">Contact</h2>

          <div className="mt-6 mx-auto max-w-md">
            <p className="text-[15px] leading-relaxed text-[var(--foreground)]">
              I’m always open to connecting, so feel free to reach out.
            </p>

            <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">
              Or just drop a hi now that you know me so well{" "}
              <span className="text-[var(--foreground)]">😉</span>
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="mailto:anish@example.com"
                className="
          inline-flex items-center justify-center
          rounded-full
          bg-[var(--accent)]
          px-7 py-2.5
          text-sm font-medium text-white
          transition-all
          hover:bg-[var(--accentHover)]
          hover:-translate-y-[1px]
          shadow-[0_8px_20px_rgba(122,92,71,0.3)]
        "
              >
                Contact me
              </a>
            </div>
          </div>
        </section>

        <Divider />

        {/* FOOTER */}
        <footer className="pb-10 pt-10 text-center">
          <p className="text-xs text-[var(--muted)]">
            © 2026 Anish John Moothedam
          </p>

          {/* Social icons */}
          <div className="mt-5 flex items-center justify-center gap-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anishjohnm19/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.6 4.75 6V24h-4v-7.4c0-1.77-.03-4.05-2.47-4.05-2.48 0-2.86 1.93-2.86 3.93V24h-4V8z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/anishjm1998"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.8 1.09.8 2.2v3.27c0 .31.21.68.8.56A11.52 11.52 0 0023.5 12C23.5 5.74 18.27.5 12 .5z" />
              </svg>
            </a>

            {/* WordPress */}
            <a
              href="https://jacobeanforlife.wordpress.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="WordPress"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12C24 5.37 18.63 0 12 0zm6.16 7.5c.47.88.74 1.89.74 2.97 0 2.57-1.5 6.01-3.09 9.07l-1.9-5.66c.36-.05.69-.11.69-.11.33-.04.29-.52-.04-.5 0 0-1.01.08-1.66.08-.61 0-1.63-.08-1.63-.08-.33-.02-.37.46-.04.5 0 0 .32.04.66.06l.98 2.69-1.38 4.13-2.3-6.82c.36-.02.69-.06.69-.06.33-.04.29-.52-.04-.5 0 0-1.01.08-1.66.08-.11 0-.24 0-.38-.01C9.3 7.13 10.61 6.5 12 6.5c1.45 0 2.8.69 3.75 1.85-.03 0-.06 0-.09 0-.61 0-1.04.53-1.04 1.1 0 .51.29.94.61 1.45.23.41.51.94.51 1.71 0 .53-.2 1.15-.46 2.01l-.6 2.01-2.17-6.45c.36-.02.69-.06.69-.06.33-.04.29-.52-.04-.5 0 0-1.01.08-1.66.08-.61 0-1.63-.08-1.63-.08-.33-.02-.37.46-.04.5 0 0 .32.04.66.06l2.46 6.74-2.08 6.21C6.05 19.77 3.5 16.18 3.5 12c0-.76.08-1.5.23-2.22l4.73 12.97c.09.22.26.35.48.35.21 0 .39-.14.47-.35l1.61-4.69 1.63 4.69c.08.22.26.35.48.35.21 0 .39-.14.47-.35l4.65-13.45c.21.75.32 1.54.32 2.36 0 4.03-2.41 7.5-5.88 9.04l1.81-5.24c.33-.82.44-1.47.44-2.05 0-1.15-.41-1.95-.77-2.58-.29-.47-.57-.87-.57-1.34 0-.53.4-1.02.96-1.02.04 0 .08 0 .12.01z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
