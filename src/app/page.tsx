import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";

/** Fallback quando o middleware não estiver ativo (dev/proxy): envia para locale padrão. */
export default function Home() {
  redirect(`/${defaultLocale}`);
}
