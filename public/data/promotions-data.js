import { useUiStore } from "@/store/ui.store";
import { useTranslations } from "next-intl";

export const promotionData = [
  {
    id: 0,
    isExpired: false,
    img: "/images/promotion/0.png",
    title: "promo.title.newYear",
    subtitle: "promo.subtitle.wagerFree",
    desc: "promo.desc.welcome",
    code: "WB Goldenriders",
  },
  {
    id: 1,
    isExpired: false,
    img: "/images/promotion/1.png",
    title: "promo.title.christmas",
    subtitle: "promo.subtitle.fs",
    desc: "promo.desc.welcome",
    code: "WB Goldenriders",
  },
  {
    id: 2,
    isExpired: true,
    img: "/images/promotion/2.png",
    title: "promo.title.welcome",
    subtitle: "promo.subtitle.fs",
    desc: "promo.desc.welcome",
    code: "WB Goldenriders",
  },
  {
    id: 3,
    isExpired: false,
    img: "/images/promotion/3.png",
    title: "promo.title.welcome",
    subtitle: "promo.subtitle.wagerFree",
    desc: "promo.desc.welcome",
    code: "WB Goldenriders",
  },
  {
    id: 4,
    isExpired: true,
    img: "/images/promotion/4.png",
    title: "promo.title.welcomeCashback",
    subtitle: "promo.subtitle.wagerFree",
    desc: "promo.desc.welcome",
    code: "WB Goldenriders",
  },
  {
    id: 5,
    isExpired: false,
    img: "/images/promotion/5.png",
    title: "promo.title.wheel",
    subtitle: "promo.subtitle.wagerFree",
    desc: "promo.desc.welcome",
    code: "WB Goldenriders",
  },
];

export const availableTabTable = {
  header: [
    { key: "name", label: "Name" },
    { key: "bonusAmount", label: "Bonus Amount" },
    { key: "wagered", label: "Wagered" },
    { key: "requirement", label: "Requirement" },
    { key: "action", label: "Action" },
  ],
  data: [
    [
      "JGUJIR8Z",
      0,
      0,
      "12.12.2025",
      {
        title: "promo.claim",
        action: () => {
          useUiStore.getState().setUi({ isPromotionModalOpen: true });
        },
      },
    ],
    [
      "JGUJIR8Z",
      0,
      0,
      "12.12.2025",
      {
        title: "promo.claim",
        action: () => {
          useUiStore.getState().setUi({ isPromotionModalOpen: true });
        },
      },
    ],
  ],
};

export const availableTabSuccess = {
  header: [
    { key: "name", label: "table.name" },
    { key: "bonusAmount", label: "table.bonusAmount" },
    { key: "claimDate", label: "table.claimDate" },
    { key: "wagered", label: "table.wagered" },
    { key: "action-dark", label: "table.requirement" },
  ],

  data: [
    [
      "JGJUIR8Z",
      0,
      "12.12.2025",
      {
        percent: 47,
        current: 1760,
        total: 3000,
        currency: "€",
      },
      "promo.cancelLower",
    ],
    [
      "JGJUIR8Z",
      0,
      "12.12.2025",
      {
        percent: 12,
        current: 0,
        total: 3000,
        currency: "€",
      },
      "promo.cancelLower",
    ],
  ],
};

export const successTabData = {
  header: [
    { key: "name", label: "table.name" },
    { key: "bonusAmount", label: "table.bonusAmount" },
    { key: "wagered", label: "table.wagered" },
    { key: "claimDate", label: "table.claimDate" },
    { key: "status", label: "table.status" },
  ],

  data: [
    [
      "JGJUIR8Z",
      0,
      {
        percent: 47,
        current: 1760,
        total: 3000,
        currency: "€",
      },
      "12.12.2025",
      "promo.cancel",
    ],
    [
      "JGJUIR8Z",
      0,
      {
        percent: 12,
        current: 0,
        total: 3000,
        currency: "€",
      },
      "12.12.2025",
      "promo.cancel",
    ],
  ],
};

export const mobileInfoData = [
  {
    id: 0,
    img: "/images/promotion/menu1.png",
    text: "promo.creditBonus",
    number: "0",
  },
  {
    id: 1,
    img: "/images/promotion/menu2.png",
    text: "promo.requirement",
    number: "0",
  },
  {
    id: 2,
    img: "/images/promotion/menu3.png",
    text: "promo.wagered",
    number: "0",
  },
  {
    id: 3,
    img: "/images/promotion/menu4.png",
    text: "promo.startAmount",
    number: "0",
  },
  {
    id: 4,
    img: "/images/promotion/menu5.png",
    text: "promo.claimDate",
    number: "07/10/25",
  },
];

export const promoListData = [
  {
    title: "promo_list_bonusPercent",
    value: "50 FS",
  },

  {
    title: "promo_list_minDeposit",
    value: "CA$500",
  },
  {
    title: "promo_list_lifetime",
    value: "7 Days",
  },
  {
    title: "promo_list_maxBonus",
    value: "CA$800",
  },
  {
    title: "promo_list_wager",
    value: "X35 (Bonus)",
  },
];
