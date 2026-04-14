import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type FinalCTAProps = {
  dictionary: Record<string, any>;
};

export function FinalCTA({ dictionary }: FinalCTAProps) {
  return (
    <section className="section-shell py-section-md md:py-section-lg">
      <Card className="p-8 md:p-12">
        <h2 className="max-w-3xl text-h1 tracking-tight">
          {dictionary.home.finalCtaTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-body-lg text-fg-secondary">
          {dictionary.home.finalCtaText}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <div>
            <Button href={siteConfig.links.whatsapp} external>
              {dictionary.home.ctaPrimary}
            </Button>
          </div>
          <div>
            <Button href={siteConfig.links.email} variant="secondary">
              {dictionary.home.ctaSecondaryEmail}
            </Button>
          </div>
          <div>
            <Button
              href={siteConfig.links.github}
              variant="secondary"
              external
            >
              {dictionary.home.ctaSecondaryGithub}
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
