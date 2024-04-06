import { create } from 'zustand'

type bankState = {
  deposit: number;
  updateDeposit: (deposit: number) => void
}

export const useBankStore = create<bankState>((set) => ({
  deposit: 0,
  updateDeposit: (deposit: number) => set({ deposit }),
}))