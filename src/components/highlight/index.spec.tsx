/**
 * @jest-environment jsdom
 */
import { render } from "@test";

import Highlight from "./index";

describe("Highlight component testing with testing-library", () => {
  it("renders without crashing", () => {
    const component = render(<Highlight>Test</Highlight>);

    expect(component).toBeTruthy();
  });

  it("Highlight component have circle svg", () => {
    const { getAllByTestId, getByText } = render(
      <Highlight type="circle">Circle Test</Highlight>,
    );

    const highlightContainer = getAllByTestId("circle-highlight");
    expect(highlightContainer).toHaveLength(1);
    expect(getByText("Circle Test")).toBeDefined();
  });

  it("Highlight component have mark svg", () => {
    const { getAllByTestId, getByText } = render(
      <Highlight type="mark">Mark Test</Highlight>,
    );

    const highlightContainer = getAllByTestId("mark-highlight");
    expect(highlightContainer).toHaveLength(1);
    expect(getByText("Mark Test")).toBeDefined();
  });
});
