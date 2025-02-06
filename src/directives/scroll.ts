import { DirectiveBinding } from 'vue';

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // Configuración del Intersection Observer
    const options = {
      root: null, // Usa el viewport como contenedor
      threshold: 0.1, // Ejecuta el callback cuando el 10% del elemento sea visible
    };

    // Callback que se ejecuta cuando cambia la visibilidad
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !el.classList.contains(binding.value)) {
          // Agrega la clase solo si no está ya añadida
          el.classList.add(binding.value || 'fade-in');
        }
      });
    };

    // Crear el observer
    const observer = new IntersectionObserver(callback, options);

    // Observar el elemento
    observer.observe(el);
  },
};
