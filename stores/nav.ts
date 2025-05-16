import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', {
  state: () => ({
    links: [
      { label: 'Home', to: '/#home' },
      { label: 'About', to: '/#about' },
      { label: 'Projects', to: '/#projects' },
      { label: 'Contact', to: '/#contact' }
    ]
  }),

  getters: {
    topNav: (state) => state.links,
    footerNav: (state) => state.links
  }
});
