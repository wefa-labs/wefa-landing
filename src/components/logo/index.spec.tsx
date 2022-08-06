/**
 * @jest-environment jsdom
 */
import { render } from "@test";

import Logo from "./index";

describe("src/components/logo component testing with testing-library", () => {
  const component = render(<Logo />);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
});
