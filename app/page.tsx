import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-peach p-10">
      <div className="mx-auto max-w-5xl rounded-xl bg-card p-10 shadow-soft">
        <h1 className="font-heading text-4xl text-textDark">Bloopa Agency OS</h1>
        <p className="mt-4 text-muted">
          Internal control panel for client delivery, approvals, and operations.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/dashboard"
            className="rounded-full bg-coral px-6 py-3 font-heading text-white shadow-soft transition hover:-translate-y-0.5"
          >
            Enter Dashboard
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-coral px-6 py-3 font-heading text-coral transition hover:-translate-y-0.5"
          >
            Client Login
          </Link>
        </div>
      </div>
    </main>
  );
}