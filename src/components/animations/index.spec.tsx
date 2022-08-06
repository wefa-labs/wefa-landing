import { render } from "@test";

import FadeUp, { FadeUpStack, FadeUpGrid } from "./fade-up";

describe("src/components/animations component testing with testing-library", () => {
  it("FadeUp should render as expected without crashing", () => {
    const component = render(<FadeUp>Test</FadeUp>);
    expect(component).toBeTruthy();
  });

  it("FadeUpStack should render as expected without crashing", () => {
    const component = render(
      <FadeUpStack>
        <>Test 1</>
        <>Test 2</>
      </FadeUpStack>,
    );
    expect(component).toBeTruthy();
  });

  it("FadeUpGrid should render as expected without crashing", () => {
    const component = render(
      <FadeUpGrid>
        <>Test 1</>
        <>Test 2</>
      </FadeUpGrid>,
    );
    expect(component).toBeTruthy();
  });
});
