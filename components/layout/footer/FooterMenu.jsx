"use client";
import footerMenu from "@/public/data/footerMenu";
import Link from "next/link";
import React from "react";
import useScreenSize from "@/hooks/useScreenSize";
import { Accordion } from "react-bootstrap";
import { useTranslations } from "next-intl";

const FooterMenu = () => {
  const { screenSize } = useScreenSize();
  const t = useTranslations("footer");

  if (screenSize > 768) {
    return (
      <div className="footer-list">
        {footerMenu.map((item, index) => {
          return (
            <div className="footer-list__item" key={index}>
              <div className="footer-item">
                <h4 className="footer-item__title">{t(item.name)}</h4>
                <ul className="footer-menu">
                  {item.links.map((link, index) => {
                    return (
                      <li className="footer-menu__item" key={index}>
                        <Link
                          href={`/${link?.url}`}
                          className="footer-menu__link"
                        >
                          {t(link.label)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <Accordion defaultActiveKey="0" className="footer-accordion">
      {footerMenu.map((item, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{t(item.name)}</Accordion.Header>
          <Accordion.Body>
            <ul className="footer-menu">
              {item.links.map((link, linkIndex) => (
                <li className="footer-menu__item" key={linkIndex}>
                  <Link href={`/${link?.url}`} className="footer-menu__link">
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FooterMenu;
