"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import { useTranslations } from "next-intl";

const AccordionSection = ({ data, header }) => {
  const t = useTranslations("common");
  const faqT = useTranslations("faq");
  const title = header || t("faq");
  return (
    <section className="about-accordion custom--accordion">
      <h1
        className="section-text"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Accordion defaultActiveKey="0">
        {data.map((item, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>{faqT(item.title)}</Accordion.Header>
            <Accordion.Body>{faqT(item.desc)}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};

export default AccordionSection;
