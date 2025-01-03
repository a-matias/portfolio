/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Agrega esta línea para manejar los archivos .svg
declare module '*.svg' {
  const content: string;
  export default content;
}
