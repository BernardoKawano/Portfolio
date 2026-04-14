import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { WebVitalsReporter } from "@/components/analytics/WebVitalsReporter";

export const metadata: Metadata = {
  title: {
    default: "Bernardo Kawano | AI Engineer",
    template: "%s | Bernardo Kawano",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: "Bernardo Kawano | AI Engineer",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: "Bernardo Kawano",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Bernardo Kawano",
      url: siteConfig.siteUrl,
    },
    {
      "@type": "Person",
      name: "Bernardo Kawano",
      jobTitle: "AI Engineer",
      url: siteConfig.siteUrl,
      sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
        <WebVitalsReporter />
      </body>
    </html>
  );
}
