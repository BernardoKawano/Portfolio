import { Card } from "@/components/ui/Card";

type ValuePropositionProps = {
  dictionary: Record<string, any>;
};

export function ValueProposition({ dictionary }: ValuePropositionProps) {
  return (
    <section className="section-shell py-section-sm md:py-section-md">
      <div>
        <h2 className="text-h2 tracking-tight">
          {dictionary.home.valueTitle}
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {dictionary.home.valueItems.map((item: string, i: number) => (
            <li key={i}>
              <Card className="h-full p-6 md:p-7">
                <p className="text-body leading-relaxed text-fg-secondary">
                  {item}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
