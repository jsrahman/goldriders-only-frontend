"use client";
import { useTranslations } from "next-intl";

export function lang(namespace) {
  const t = useTranslations(namespace);
  return new Proxy(
    {},
    {
      get: (_, key) => t(key),
    },
  );
}
