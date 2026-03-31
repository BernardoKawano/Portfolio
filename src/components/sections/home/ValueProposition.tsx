type ValuePropositionProps = {
  dictionary: Record<string, any>;
};

export function ValueProposition({ dictionary }: ValuePropositionProps) {
  return (
    <section className="section-shell py-12 md:py-16">
      <div className="premium-card p-8 md:p-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {dictionary.home.valueTitle}
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {dictionary.home.valueItems.map((item: string) => (
            <li key={item} className="text-sm leading-7 text-fg-secondary md:text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
