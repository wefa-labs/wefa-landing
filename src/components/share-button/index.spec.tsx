import { render } from "@test";

import ShareButton from "./index";

describe("src/components/share-button component testing with testing-library", () => {
  it("should render as expected without crashing", () => {
    const component = render(
      <ShareButton
        items={[
          {
            icon: null,
            href: "#share",
            color: "red",
            title: "Test",
          },
        ]}
      />,
    );
    expect(component).toBeTruthy();
  });
});
