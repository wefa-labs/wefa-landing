import { render } from "@test";

import ColorModeSwitcher from "./index";

describe("src/components/colorModeSwitcher component testing with testing-library", () => {
  it("renders without crashing", () => {
    const component = render(<ColorModeSwitcher />);
    expect(component).toBeTruthy();
  });

  // it("defined colors should be 11", () => {
  //   const { getByTestId } = render(<ColorModeSwitcher />);
  //   const colorBtn = getByTestId("ColorModeSwitcher");
  //   expect(colorBtn.children.length).toEqual(11);
  // });
});
