import { getTranslations } from "next-intl/server";

export async function lang(namespace) {
  const t = await getTranslations(namespace);
  return new Proxy(
    {},
    {
      get: (_, key) => t(key),
    },
  );
}
