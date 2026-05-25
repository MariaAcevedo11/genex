"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();

  const pathname = usePathname();

  const newLocale = locale === "es" ? "en" : "es";

  const redirectedPath = pathname.replace(`/${locale}`, `/${newLocale}`);

  return (
    <Link
      href={redirectedPath}
      className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
    >
      {locale === "es" ? "EN" : "ES"}
    </Link>
  );
}
