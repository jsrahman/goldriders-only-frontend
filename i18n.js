import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

// Convert flat keys like "wallet_depositNow" to nested structure
function unflattenMessages(flat) {
  const nested = {};

  for (const key in flat) {
    const parts = key.split("_");
    let current = nested;

    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) {
        current[parts[i]] = {};
      }
      current = current[parts[i]];
    }

    current[parts[parts.length - 1]] = flat[key];
  }

  return nested;
}

export default getRequestConfig(async () => {
  // Read locale from cookie, fallback to 'en'
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";

  const flatMessages = (await import(`./messages/${locale}.json`)).default;
  const messages = unflattenMessages(flatMessages);

  return {
    locale,
    messages,
  };
});
