import { render } from "@test";

import TextTyping from "./index";

describe("src/components/text-typing component testing with testing-library", () => {
  it("should render as expected without crashing", () => {
    const component = render(<TextTyping items={[]} />);
    expect(component).toBeTruthy();
  });
});
