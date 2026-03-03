import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ErrorPage() {
  const t = useTranslations("errors");
  return (
    <div
      className="error-page-section"
      style={{ minHeight: "80vh", background: "transparent" }}
    >
      <div className="content-wrapper margin-auto">
        <div className="error-code">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </div>
      </div>
      <h2 className="error-title">{t("404")}</h2>
      <p className="error-desc">{t("somethingWentWrong")}</p>

      <div className="action-buttons d-flex justify-content-center gap-2">

        <Link href="/" className="btn btn btn--dark">
          {t("returnCasino")}
        </Link>
      </div>
    </div>
  );
}
