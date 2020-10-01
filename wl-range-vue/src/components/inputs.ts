import * as vue from 'vue';

/**
 * Create a wrapped input component that captures typical wl input events
 * and emits core ones so v-model works.
 *  name: the vue name of the component
 *  coreTag: the actual tag to render (such as wl-range)
 */
export function createInputComponent(name: string, coreTag: string, modelEvent = 'change', valueProperty = 'value') {
  return vue.defineComponent({
    name,
    model: {
      event: modelEvent,
      prop: valueProperty,
    },
    emits: ['change', 'wlInput', 'blur', 'focus'],
    render() {
      // Vue types have a bug accessing member properties:
      // https://github.com/vuejs/vue/issues/8721
      const cmp = this;
      // const cmp: any = this;
      const { h } = vue;

      const slots: vue.VNodeArrayChildren = [];

      if (this.$slots.default) {
        slots.push(this.$slots.default());
      }
      if (this.$slots.start) {
        slots.push(this.$slots.start());
      }
      if (this.$slots.end) {
        slots.push(this.$slots.end());
      }

      return h(
        coreTag as any,
        {
          attrs: cmp.$attrs,
          on: {
            change: cmp.handleChange,
            wlInput: cmp.handleInput,
            blur: cmp.handleBlur,
            focus: cmp.handleFocus,
          },
        },
        slots,
      );
    },
    methods: {
      handleChange($event: any) {
        if (modelEvent === 'change') {
          // Vue expects the value to be sent as the argument for v-model, not the
          // actual event object
          this.$emit('change', $event.target[valueProperty]);
        } else {
          this.$emit('change', $event);
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
        this.$emit('blur', $event);
      },
      handleFocus($event: any) {
        this.$emit('focus', $event);
      },
    },
  });
}

/**
 * Create a wrapped input component that captures typical wl input events
 * and emits core ones so v-model works.
 *  name: the vue name of the component
 *  coreTag: the actual tag to render (such as wl-range)
 */
export function createInputComponentOld(name: string, coreTag: string, modelEvent = 'change', valueProperty = 'value') {
  return vue.defineComponent({
    name,
    model: {
      event: modelEvent,
      prop: valueProperty,
    },
    inheritAttrs: true,
    emits: ['change', 'wlInput', 'blur', 'focus'],
    render(createElement: any) {
      // Vue types have a bug accessing member properties:
      // https://github.com/vuejs/vue/issues/8721
      // const cmp = this;
      const cmp: any = this;

      return createElement(
        coreTag,
        {
          // attrs: cmp.attrs,
          attrs: { ...this.$attrs, ...cmp.attrs },
          on: {
            change: this.handleChange.bind(cmp),
            wlInput: this.handleInput.bind(cmp),
            blur: this.handleBlur.bind(cmp),
            focus: this.handleFocus.bind(cmp),
          },
        },
        [this.$slots.default, this.$slots.start, this.$slots.end],
      );
    },
    methods: {
      handleChange($event: any) {
        if (modelEvent === 'change') {
          // Vue expects the value to be sent as the argument for v-model, not the
          // actual event object
          this.$emit('change', $event.target[valueProperty]);
        } else {
          this.$emit('change', $event);
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
        this.$emit('blur', $event);
      },
      handleFocus($event: any) {
        this.$emit('focus', $event);
      },
    },
  });
}
