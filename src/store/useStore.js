import { create } from 'zustand';

const useStore = create((set) => ({
  // Navigation Menu Toggle
  isNavOpen: false,
  setNavOpen: (isOpen) => set({ isNavOpen: isOpen }),
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),

  // Solutions Active Tab: 'marketing', 'technology', 'dispatch'
  activeDivision: 'marketing',
  setActiveDivision: (division) => set({ activeDivision: division }),

  // Solutions Accordion States: maps category-index to open boolean
  openAccordions: {},
  toggleAccordion: (division, index) =>
    set((state) => {
      const key = `${division}-${index}`;
      return {
        openAccordions: {
          ...state.openAccordions,
          [key]: !state.openAccordions[key],
        },
      };
    }),
  closeAccordionsInDivision: (division) =>
    set((state) => {
      const updated = { ...state.openAccordions };
      Object.keys(updated).forEach((key) => {
        if (key.startsWith(`${division}-`)) {
          updated[key] = false;
        }
      });
      return { openAccordions: updated };
    }),
}));

export default useStore;
