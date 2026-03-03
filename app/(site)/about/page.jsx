import React from "react";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About from "@/components/sections/about/About";
import AccordionSection from "@/components/sections/AccordionSection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import { aboutData } from "@/public/data/faqData";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations("breadcrumbs");
  return (
    <div className="content-area">
      <Header />
      <Breadcrumb activePage={t("about")} />
      <About />
      <AccordionSection data={aboutData} />
      <Footer />
    </div>
  );
};

export default AboutPage;
