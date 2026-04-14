import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { LOCALE_CODES } from "@/lib/locale-codes";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return LOCALE_CODES.map((locale) => ({ locale }));
}

/** Só `pt` e `en` existem em build estático; outras URLs caem em `notFound()`. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  if (!isLocale(params.locale)) {
    return {};
  }
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);
  return {
    title: {
      default: "Bernardo Kawano | AI Engineer",
      template: "%s | Bernardo Kawano",
    },
    description: dictionary.home.subheadline,
    openGraph: {
      title: "Bernardo Kawano — AI Engineer",
      description: dictionary.home.subheadline,
      locale,
      type: "website",
    },
    alternates: {
      languages: {
        pt: "/pt",
        en: "/en",
      },
    },
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} dictionary={dictionary} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
