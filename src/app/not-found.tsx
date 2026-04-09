import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="pt" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-[#f7f7f6] text-[#121212]">
        <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#707070]">
            404
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Página não encontrada
          </h1>
          <p className="mt-4 max-w-md text-base text-[#4b4b4b]">
            O endereço que você tentou acessar não existe ou foi movido.
          </p>
          <Link
            href="/pt"
            className="mt-8 inline-block rounded-lg bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Voltar ao início
          </Link>
        </main>
      </body>
    </html>
  );
}
