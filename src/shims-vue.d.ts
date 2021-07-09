/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// with vite-plugin-md, markdowns can be treat as Vue components
declare module '*.md' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
