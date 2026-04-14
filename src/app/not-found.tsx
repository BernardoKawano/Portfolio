import Link from "next/link";

/**
 * 404 global: `href="/"` passa pelo middleware e redireciona para `/{locale}` (cookie / Accept-Language).
 * `Link` integra com o App Router; `<a href="/pt">` podia falhar ou ignorar o locale em inglês.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fg-muted">
        404
      </p>
      <h1 className="mt-4 text-h1 tracking-tight text-fg-primary">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-body text-fg-secondary">
        O endereço que você tentou acessar não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-accent-primary px-6 py-3 text-sm font-semibold text-accent-contrast transition-opacity hover:opacity-90"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
