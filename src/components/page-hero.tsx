type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-olive/10 bg-parchment">
      <div className="absolute -right-24 -top-36 h-80 w-80 rounded-full border border-honey/20" />
      <div className="absolute -right-8 -top-20 h-52 w-52 rounded-full border border-honey/25" />
      <div className="site-container relative py-16 sm:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.04] text-olive sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-sage">{description}</p>
      </div>
    </section>
  );
}
