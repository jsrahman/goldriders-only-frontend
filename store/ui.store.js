import { create } from "zustand";

export const useUiStore = create((set) => ({
  ui: {
    isSidebarOpen: false,
    isCollapsible: false,
    isSearchModalOpen: false,
    isPromotionModalOpen: false,
    isLangModalOpen: false,
    isSupportModalOpen: false,
    isWithdrawRewardsModalOpen: false,
    isBalanceModalOpen: false,
    //
    isSpinModalOpen: false,
    nextSpinIndex: 0,

    // Wallet Handler
    isWalletModalOpen: false,
    walletTabKey: "tab",
    walletTabType: "deposit",

    /*
      Screen Type Case
      1. card
      2. bonus
      3. mobilePay
      4. crypto
      5. others
      */

    /*
      Deposit Type Case
      1. bank
      2. mobile
    */
    depositType: "bank",
    depositView: "card",
    isWalletOfferView: false,

    // Auth Handler
    isAuthModalOpen: false,
    authType: "login",
  },
  setUi: (data) =>
    set((state) => ({
      ui: {
        ...state.ui,
        ...data,
      },
    })),

  clearUi: () =>
    set({
      ui: {},
    }),
}));
