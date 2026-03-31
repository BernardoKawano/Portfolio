type ApproachProps = {
  dictionary: Record<string, any>;
};

export function Approach({ dictionary }: ApproachProps) {
  return (
    <section className="section-shell py-12 md:py-16">
      <div className="premium-card p-8 md:p-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {dictionary.home.approachTitle}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-fg-secondary md:text-lg">
          {dictionary.home.approachText}
        </p>
      </div>
    </section>
  );
}
