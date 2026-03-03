/** @type {import('next-intl').NextIntlConfig} */
module.exports = {
  locales: ["en", "de", "bn"], // your supported languages
  defaultLocale: "en", // default language
  // path to your translations folder
  // relative to project root
  loadLocale: (locale) =>
    import(`./messages/${locale}.json`).then((m) => m.default),
};
