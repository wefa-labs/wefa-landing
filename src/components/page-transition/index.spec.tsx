import { render } from "@test";

import { PageTransition } from "./index";

describe("src/components/page-transition testing with testing-library", () => {
  it("should render as expected without crashing", () => {
    const component = render(<PageTransition />);
    expect(component).toBeTruthy();
  });
});
