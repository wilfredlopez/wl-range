import * as vue from 'vue';

/**
 * Create a wrapped input component that captures typical wl input events
 * and emits core ones so v-model works.
 *  name: the vue name of the component
 *  coreTag: the actual tag to render (such as wl-range)
 */
export function createInputComponent(name: string, coreTag: string, modelEvent = 'wlChange', valueProperty = 'value') {
  return vue.defineComponent({
    name,
    model: {
      event: modelEvent,
      prop: valueProperty,
    },
    emits: ['wl-change', 'wl-input', 'wl-blur', 'wl-focus'],
    render() {
      //   console.log("renring", createElement);
      // Vue types have a bug accessing member properties:
      // https://github.com/vuejs/vue/issues/8721
      //   const cmp = this;
      //   const cmp: any = this;
      const children = [];
      if (this.$slots.default) {
        children.push(this.$slots.default());
      }
      if (this.$slots.start) {
        const startChildren = this.$slots.start();
        startChildren[0].props = {
          ...startChildren[0].props,
          slot: 'start',
        };
        children.push(startChildren);
      }
      if (this.$slots.end) {
        const endChildren = this.$slots.end();
        endChildren[0].props = {
          ...endChildren[0].props,
          slot: 'end',
        };
        children.push(endChildren);
      }

      const { h } = vue;

      return h(
        coreTag,
        {
          //   onClick: this.handleChange, // this works
          //   onMouseDown: this.handleChange,
          //   onChange: this.handleChange,
          //   onWlChange: this.handleChange,
          onVnodeMounted: node => {
            const el = node.el;
            if (el) {
              // el.color = 'danger';
              el.addEventListener('wlChange', this.handleChange);
              el.addEventListener('wlBlur', this.handleBlur);
              el.addEventListener('wlFocus', this.handleFocus);
              el.addEventListener('wlInput', this.handleInput);
            }
          },
        },

        children,
      );
    },
    methods: {
      handleChange($event: vue.Events['onChange']) {
        if (modelEvent === 'wlChange') {
          // Vue expects the value to be sent as the argument for v-model, not the
          // actual event object
          // eslint-disable-next-line
          // @ts-ignore
          this.$emit('wl-change', $event.target[valueProperty]);
        } else {
          this.$emit('wl-change', $event);
        }
      },
      handleInput($event: vue.Events['onInput']) {
        if (modelEvent === 'wlInput') {
          // Vue expects the value to be sent as the argument for v-model, not the
          // actual event object
          // eslint-disable-next-line
          // @ts-ignore
          this.$emit('wl-input', $event.target[valueProperty]);
        } else {
          this.$emit('wl-input', $event);
        }
      },
      handleBlur($event: vue.Events['onBlur']) {
        this.$emit('wl-blur', $event);
      },
      handleFocus($event: vue.Events['onFocus']) {
        this.$emit('wl-focus', $event);
      },
    },
  });
}
