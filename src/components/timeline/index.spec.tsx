import { render } from "@test";

import { TimelineGroup, Timeline } from "./index";

describe("src/components/timeline testing with testing-library", () => {
  it("should render as expected without crashing", () => {
    const component = render(
      <TimelineGroup>
        <Timeline heading="Timeline Heading" />
      </TimelineGroup>,
    );
    expect(component).toBeTruthy();
  });
});
