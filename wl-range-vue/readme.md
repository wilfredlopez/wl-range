# Wl/vue

Wl Vue.js specific building blocks on top of [wl-range](https://www.npmjs.com/package/wl-range) components.

To get started simply install `wl-range-vue` and `wl-range` with npm into your project and then register `wl/vue` as a plugin to your vue application.

```ts
import { createApp } from 'vue';

import Wl from './index';

const app = createApp({
  template: `
        <div>
      <wl-range value="20">
        <div slot="start">
          0
        </div>
        <div slot="end">
          100
        </div>
      </wl-range>
    </div>
    `,
});

app.use(Wl);
```

## Current known limitations

This is an beta release of Wl/vue so please understand that there are some missing pieces but know that many of the components will work.

- The shorthand `v-model` binding is currently not supported
- Stack navigation for deep transitions is under heavy development at this time.

## Related

- [wl-range](https://www.npmjs.com/package/wl-range)
- [@wilfredlopez/wl-components](https://www.npmjs.com/package/@wilfredlopez/wl-components)

## License

- MIT
