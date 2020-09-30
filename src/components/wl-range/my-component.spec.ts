import { newSpecPage } from "@stencil/core/testing";
import { MyComponent } from "./WlRange";

describe("wl-range", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: "<wl-range></wl-range>",
    });
    expect(root).toEqualHtml(`
      <wl-range>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </wl-range>
    `);
  });

  it("renders with values", async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<wl-range first="Stencil" last="'Don't call me a framework' JS"></wl-range>`,
    });
    expect(root).toEqualHtml(`
      <wl-range first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </wl-range>
    `);
  });
});
