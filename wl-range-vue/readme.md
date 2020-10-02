# Wl/vue

Wl Vue.js specific building blocks on top of [wl-range](https://www.npmjs.com/package/wl-range) components.

To get started simply install `wl-range-vue` with npm into your project and then register `wl-range-vue` as a plugin to your vue application.

```ts
import { createApp, defineComponent } from 'vue';

import Wl from 'wl-range-vue';

const Home = defineComponent({
  template: `
        <div>
      <wl-range color="danger" @wl-change="handleSeek" :value="percentPlayed">
        <div slot="start">
          0
        </div>
        <div slot="end">
          100
        </div>
      </wl-range>
    </div>
    `,
  data() {
    return {
      percentPlayed: 0,
    };
  },
  methods: {
    handleSeek(value: number) {
      if (value !== this.percentPlayed) {
        this.percentPlayed = value;
      }
    },
  },
});

const app = createApp(Home);

app.use(Wl);
app.render('#app');
```

## Related

- [wl-range](https://www.npmjs.com/package/wl-range)
- [wl-range-react](https://www.npmjs.com/package/wl-range-react)
- [@wilfredlopez/wl-components](https://www.npmjs.com/package/@wilfredlopez/wl-components)

## License

- MIT
