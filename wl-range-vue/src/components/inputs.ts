import * as vue from 'vue';

/**
 * Create a wrapped input component that captures typical wl input events
 * and emits core ones so v-model works.
 *  name: the vue name of the component
 *  coreTag: the actual tag to render (such as wl-range)
 */
export function createInputComponent(name: string, coreTag: string, modelEvent = 'wlChange', valueProperty = 'value', ...rest: any[]) {
  return vue.defineComponent({
    name,
    model: {
      event: modelEvent,
      prop: valueProperty,
      ...rest,
    },

    emits: ['wlChange', 'wlInput', 'wlBlur', 'wlFocus'],
    render() {
      // Vue types have a bug accessing member properties:
      // https://github.com/vuejs/vue/issues/8721
      // const cmp = this;
      const cmp: any = this;
      const { h } = vue;

      const slots: vue.VNodeArrayChildren = [];

      if (cmp.$slots.default) {
        slots.push(cmp.$slots.default());
      }
      if (cmp.$slots.start) {
        slots.push(cmp.$slots.start());
      }
      if (cmp.$slots.end) {
        slots.push(cmp.$slots.end());
      }

      return h(
        coreTag as any,
        {
          attrs: cmp.attrs,
          on: {
            wlChange: cmp.handleChange.bind(cmp),
            wlInput: cmp.handleInput.bind(cmp),
            wlBlur: cmp.handleBlur.bind(cmp),
            wlFocus: cmp.handleFocus.bind(cmp),
          },
        },
        slots,
      );
    },
    methods: {
      handleChange($event: any) {
        if (modelEvent === 'wlChange') {
          // Vue expects the value to be sent as the argument for v-model, not the
          // actual event object
          this.$emit('wlChange', $event.target[valueProperty]);
        } else {
          this.$emit('wlChange', $event);
        }
      },
      handleInput($event: any) {
        if (modelEvent === 'wlInput') {
          // Vue expects the value to be sent as the argument for v-model, not the
          // actual event object
          this.$emit('wlInput', $event.target[valueProperty]);
        } else {
          this.$emit('wlInput', $event);
        }
      },
      handleBlur($event: any) {
        this.$emit('wlBlur', $event);
      },
      handleFocus($event: any) {
        this.$emit('wlFocus', $event);
      },
    },
    ...rest,
  });
}
