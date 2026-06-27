import Link from "next/link";

type PageStubProps = {
  eyebrow: string;
  title: string;
  description: string;
  phase: string;
  backHref?: string;
  backLabel?: string;
};

export default function PageStub({
  eyebrow,
  title,
  description,
  phase,
  backHref = "/",
  backLabel = "Back to Home",
}: PageStubProps) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 py-24 md:px-12">
      <p className="mb-3 text-xs uppercase tracking-widest text-steel-light">{eyebrow}</p>
      <h1 className="font-display text-5xl leading-none text-text-primary md:text-7xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-text-muted">{description}</p>
      <p className="mt-4 text-xs uppercase tracking-widest text-accent-violet">{phase}</p>
      <Link href={backHref} className="btn-outline mt-10 w-fit">
        {backLabel}
      </Link>
    </section>
  );
}
