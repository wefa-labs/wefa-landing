import { render } from "@test";

import Annotation from "./index";

describe("src/components/annotation component testing with testing-library", () => {
  it("should render as expected without crashing", () => {
    const component = render(
      <Annotation>
        <p>Example</p>
      </Annotation>,
    );
    expect(component).toBeTruthy();
  });
});
