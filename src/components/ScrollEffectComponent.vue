// src/directives/scroll.ts
import { DirectiveBinding } from 'vue';

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const options = {
      root: null,
      threshold: 0.1,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add(binding.value || 'fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};
