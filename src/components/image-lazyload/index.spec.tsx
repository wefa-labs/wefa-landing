import { render } from "@test";

import ImageLazyload from "./index";

const observe = jest.fn();
const disconnect = jest.fn();
const unobserve = jest.fn();

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe,
    unobserve,
    disconnect,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("src/components/image-lazyload component testing with testing-library", () => {
  it("renders without crashing", () => {
    const component = render(<ImageLazyload src="dummy.jpg" />);
    expect(component).toBeTruthy();
    expect(observe).toHaveBeenCalled();
    // expect(observe).toHaveBeenCalledTimes(1);
  });
});
