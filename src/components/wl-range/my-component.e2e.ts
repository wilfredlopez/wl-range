import { newE2EPage } from "@stencil/core/testing";

describe("wl-range", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<wl-range></wl-range>");
    const element = await page.find("wl-range");
    expect(element).toHaveClass("hydrated");
  });

  it("renders changes to the name data", async () => {
    const page = await newE2EPage();

    await page.setContent("<wl-range></wl-range>");
    // const component = await page.find("wl-range");
    // const element = await page.find("wl-range >>> div");
    // expect(element.textContent).toEqual(`Hello, World! I'm `);

    // component.setProperty("value", "20");
    // await page.waitForChanges();
    // expect(component.).toEqual(`Hello, World! I'm James`);
  });
});
