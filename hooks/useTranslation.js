import { useTranslations } from "next-intl";

/**
 * Custom hook to use translations in components
 * Usage: const t = useTranslation('wallet'); // for wallet.* keys
 * Or: const t = useTranslation(); // for common.* keys by default
 */
export function useTranslation(namespace = "common") {
  return useTranslations(namespace);
}

export default useTranslation;
