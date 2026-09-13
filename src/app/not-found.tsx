import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70svh] flex-col items-center justify-center overflow-hidden bg-ink px-gutter py-32 text-center">
      <div className="absolute inset-0 grid-texture opacity-70" aria-hidden="true" />
      <div className="relative">
        <p className="font-display text-eyebrow uppercase text-lime">Error 404</p>
        <h1 className="mt-5 text-h1 text-cloud">Page not found</h1>
        <p className="mx-auto mt-5 max-w-md text-lead text-slate">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" variant="primary">
            Return home
          </ButtonLink>
          <ButtonLink href="/workspaces" variant="secondary" arrow className="group">
            Explore spaces
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
