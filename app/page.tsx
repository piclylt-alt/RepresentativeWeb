export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-20 sm:py-24 lg:px-10">
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Salon automation
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Automated booking system for beauty salons
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We build complete appointment systems with reminders, staff schedules and
              online payments.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
              href="#"
            >
              Book a demo
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-blue-100 px-6 py-3 text-base font-semibold text-blue-700 transition hover:border-blue-200 hover:bg-blue-50"
              href="#"
            >
              Get pricing
            </a>
          </div>
        </section>
        <section className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
            <p className="text-sm font-semibold text-blue-700">Smart reminders</p>
            <p className="mt-2 text-sm text-slate-600">
              Automated SMS and email prompts that reduce no-shows.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
            <p className="text-sm font-semibold text-blue-700">Team scheduling</p>
            <p className="mt-2 text-sm text-slate-600">
              Live staff calendars that stay in sync across locations.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
            <p className="text-sm font-semibold text-blue-700">Online payments</p>
            <p className="mt-2 text-sm text-slate-600">
              Secure deposits and pre-payments to lock in bookings.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
