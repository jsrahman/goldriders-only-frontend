import React from "react";
import { useTranslations } from "next-intl";
const aboutData = [
  {
    title: "Better gaming experience",
    desc: "Our Website is a breath of totally fresh gaming experience in the scene, that continues to impress you, over and over again. Apart from this welcome package that will give you the boost you need to start your journey, the casino has a great variety of generous bonuses, impeccable customer service and a wide range of great games powered by the biggest software providers in the industry. Over 4,000 casino games, including live dealers, make up a great unforgettable experience!",
  },
  {
    title: "Fast payouts",
    desc: "For your comfort, we offer a wide variety of payment solutions as well as currencies in which you can make real money transactions on our Website. We make sure our payment systems run as smooth as possible and are always up-to-date, so that transaction times are cut off to the minimum. And yes, you will notice that deposits and payouts through e-wallets are lightning-fast. Credit card transactions might take slightly more time because they are processed by a bank.",
  },
];

const About = () => {
  const t = useTranslations("about");
  return (
    <section className="about-section">
      <div className="about-list">
        {aboutData.map((item, index) => (
          <div className="about-card" key={index}>
            <h2 className="about-card__title">{item.title}</h2>
            <p className="about-card__desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
