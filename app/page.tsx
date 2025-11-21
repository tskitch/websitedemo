import ElectricBorder from "@/app/components/ElectricBorder";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate- to-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="border-b border-white/5 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-700 shadow-red-600/30">
              <span className="text-lg font-black tracking-tight">FLP</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400">
                Fast Lane Precision
              </span>
              <span className="text-sm text-slate-300">Precision CNC Machining</span>
            </div>
          </a>

          {/* Links */}
          <nav className="hidden gap-12 text-sm text-slate-300 md:flex">
            <a href="#capabilities" className="hover:text-white">
              Capabilities
            </a>
            <a href="#quality" className="hover:text-white">
              Quality
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-lg border border-red-600/40
    bg-gradient-to-b from-zinc-900 to-black
    px-4 py-2 text-sm font-semibold text-zinc-200

    /* --- ALWAYS-ON GLOW --- */
    shadow-[0_0_22px_rgba(220,38,38,0.45),0_0_45px_rgba(220,38,38,0.28)]

    /* --- HOVER GLOW (stronger) --- */
    hover:shadow-[0_0_32px_rgba(220,38,38,0.55),0_0_60px_rgba(220,38,38,0.40)]
    hover:border-red-500/60

    transition"
            >
              Request a Quote
            </a>
            {/* EXPEDITE BUTTON WITH ELECTRIC BORDER */}
            <ElectricBorder
              color="#00ffcc"
              speed={1.2}
              chaos={0.6}
              thickness={2}
              style={{ borderRadius: 10, marginLeft: '12px' }}
            >
              <a
                href="#contact"
                className="px-3 py-1 text-sm font-semibold text-emerald-200"
                style={{
                  display: "inline-block",
                }}
              >
                Expedite
              </a>
            </ElectricBorder>

          </div>
        </div>
      </header>

      {/* CONTENT WRAPPER */}
      <div id="top" className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 md:py-16">
        {/* HERO */}
        <section className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/5 px-3 py-1 text-xs font-semibold tracking-wide text-red-300">
               Riverside, CA &bull; CNC Machining
            </span>

            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Precision parts.
              <br />
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                Tight tolerances.
              </span>
            </h1>

            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              Fast Lane Precision delivers production-ready components for aerospace, defense,
              and high-reliability industries. 5-axis milling, mill-turn, Swiss, and lathe work
              with full inspection and traceability.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ElectricBorder
              color="#00ffcc"
              speed={1.2}
              chaos={0.6}
              thickness={2}
              style={{ borderRadius: 10 }}
            >
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-semibold text-emerald-200"
                style={{ display: "inline-block" }}
              >
                Start a Quote
              </a>
</ElectricBorder>

              <a
                href="#capabilities"
                className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-white/30 hover:bg-white/5"
              >
                View Capabilities
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-xs text-slate-400">
              <div>
                <div className="font-semibold text-slate-200">Materials</div>
                <div>Aluminum · Stainless · Titanium · Inconel</div>
              </div>
              <div>
                <div className="font-semibold text-slate-200">Batch Sizes</div>
                <div>Prototype to mid-volume production</div>
              </div>
            </div>
          </div>

          {/* HERO SIDE PANEL */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_40px_rgba(220,38,38,0.18)]">
            <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
              <span>Live Capacity Snapshot</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                ACCEPTING RFQs
              </span>
            </div>

            <div className="space-y-4 text-xs text-slate-200">
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2">
                <span>5-Axis Milling</span>
                <span className="text-emerald-300">Open in 1–2 weeks</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2">
                <span>Mill-Turn / Lathe</span>
                <span className="text-emerald-300">Open in 1 week</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2">
                <span>Swiss Turning</span>
                <span className="text-amber-300">Limited slots</span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-[11px] text-slate-300">
              <div className="mb-1 font-semibold text-slate-100">Typical work</div>
              <p>
                Brackets, housings, manifolds, tooling, pins, bushings, and small-diameter
                aerospace components with GD&amp;T callouts.
              </p>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Core capabilities
              </h2>
              <p className="text-sm text-slate-400">
                Multi-axis CNC machining with a focus on consistency, surface finish, and
                on-time delivery.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-md">
              <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-red-500/15 px-2 py-1 text-[11px] font-semibold text-red-300">
                5-Axis Milling
              </div>
              <p className="text-sm text-slate-300">
                Complex geometry, tight positional tolerances, and reduced setups for aerospace
                and defense components.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-md">
              <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-amber-400/15 px-2 py-1 text-[11px] font-semibold text-amber-200">
                Mill-Turn &amp; Lathe
              </div>
              <p className="text-sm text-slate-300">
                Shafts, bushings, adapters, and high-mix turning supported by live tooling and
                sub-spindle transfer.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-md">
              <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-emerald-400/15 px-2 py-1 text-[11px] font-semibold text-emerald-200">
                Swiss Turning
              </div>
              <p className="text-sm text-slate-300">
                Small-diameter, long-length parts with excellent concentricity and surface
                finish, ideal for aerospace and medical.
              </p>
            </article>
          </div>
        </section>

        {/* QUALITY */}
        <section id="quality" className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Quality and inspection
            </h2>
            <p className="text-sm text-slate-300">
              Inspection isn&apos;t an afterthought. From first article through production,
              every part is run with process in mind.
            </p>

            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Keyence IM / XM / VL systems for fast dimensional checks</li>
              <li>• In-process probing and verification on the machine</li>
              <li>• Material certs, lot control, and documentation upon request</li>
              <li>• Digital inspection reports supplied with critical jobs</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-5 text-sm text-slate-100 shadow-[0_0_40px_rgba(52,211,153,0.35)]">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Sample inspection snapshot
            </div>
            <div className="space-y-2 rounded-2xl bg-slate-950/60 p-3">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Part:</span>
                <span className="font-mono text-emerald-200">FLP-BRKT-2187</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Rev:</span>
                <span>B</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Critical dims:</span>
                <span>12 of 12 in-tolerance</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-300/90">
              Actual reports and formats are tailored to customer requirements and supplied with
              your shipment or via secure email.
            </p>
          </div>
        </section>

        {/* CONTACT / CTA */}
        <section id="contact" className="mb-8 rounded-3xl border border-white/10 bg-gradient-to-r from-red-500/15 via-slate-900 to-amber-400/10 p-6 text-sm shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                Ready to start a project?
              </h2>
              <p className="mt-1 max-w-xl text-slate-200/80">
                Send a print, model, or RFQ. We&apos;ll respond with manufacturability feedback,
                lead time, and pricing.
              </p>
            </div>
            <div className="space-y-1 text-slate-100">
              <div>
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:info@fastlaneprecision.com"
                  className="underline-offset-2 hover:underline"
                >
                  info@fastlaneprecision.com
                </a>
              </div>
              <div>
                <span className="font-semibold">Location: </span>
                Riverside, CA
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5 py-6 text-xs text-slate-500">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <div>© {new Date().getFullYear()} Fast Lane Precision. All rights reserved.</div>
            <div className="flex gap-4">
              <span className="text-slate-500">AS9100-style practices</span>
              <span className="hidden text-slate-500 sm:inline">•</span>
              <span className="text-slate-500">NDA-safe collaboration</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
