import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/home/Hero";
import { ValueProposition } from "@/components/sections/home/ValueProposition";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { ImpactMetrics } from "@/components/sections/home/ImpactMetrics";
import { ProcessJourney } from "@/components/sections/home/ProcessJourney";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type HomePageProps = {
  params: { locale: string };
};

export default function HomePage({ params }: HomePageProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <Hero dictionary={dictionary} />
      <ValueProposition dictionary={dictionary} />
      <FeaturedProjects locale={locale} dictionary={dictionary} />
      <ImpactMetrics dictionary={dictionary} />
      <ProcessJourney dictionary={dictionary} />
      <FinalCTA dictionary={dictionary} />
    </>
  );
}
