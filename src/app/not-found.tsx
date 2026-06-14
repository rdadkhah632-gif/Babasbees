import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-container grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-5xl text-olive">This page has wandered off.</h1>
        <p className="mt-5 text-sage">The page you were looking for could not be found.</p>
        <Link href="/" className="button-primary mt-8">Back to Baba&apos;s Bees</Link>
      </div>
    </section>
  );
}
