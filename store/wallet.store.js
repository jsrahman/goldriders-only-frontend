import { create } from "zustand";

export const useWalletStore = create((set) => ({
  depositFrom: "banking",
  bankingChannel: "visa",

  withdrawFrom: "banking",
  withdrawChannel: "visa",

  setDepositFrom: (from) => set({ depositFrom: from }),
  setBankingChannel: (channel) => set({ bankingChannel: channel }),
  setWithdrawFrom: (from) => set({ withdrawFrom: from }),
  setWithdrawChannel: (channel) => set({ withdrawChannel: channel }),

  resetDeposit: () => set({ depositFrom: "banking", bankingChannel: "visa" }),
  resetWithdraw: () =>
    set({ withdrawFrom: "banking", withdrawChannel: "visa" }),

  clearWallet: () =>
    set({
      depositFrom: "banking",
      bankingChannel: "visa",
      withdrawFrom: "banking",
      withdrawChannel: "visa",
    }),
}));
