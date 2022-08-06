/**
 * @jest-environment jsdom
 */
import { render } from "@test";

import PageTitle from "./index";

describe("src/components/page-title component testing with testing-library", () => {
  it("should render as expected without crashing", () => {
    const component = render(<PageTitle title="Title Test" />);
    expect(component).toBeTruthy();
  });

  it("has title and body", () => {
    const { getByTestId } = render(
      <PageTitle title="Title Test!" body="body test..." />,
    );
    const title = getByTestId("PageTitle--title");
    const body = getByTestId("PageTitle--body");
    expect(title.innerHTML).toMatch(/^Title Test!$/);
    expect(body.innerHTML).toMatch(/^body test...$/);
  });

  it("has children", () => {
    const { getByText } = render(
      <PageTitle title="Children Test">
        <>Lorem ipsum</>
      </PageTitle>,
    );
    const children = getByText("Lorem ipsum");
    expect(children).toBeDefined();
  });
});
