import { render, fireEvent } from "@test";

import { RatingDefault } from "./index";

describe("src/components/rating testing with testing-library", () => {
  it("should render as expected without crashing", () => {
    const component = render(<RatingDefault initialRating={3} />);
    expect(component).toBeTruthy();
  });

  it("rating is clickable", () => {
    const mockFn = jest.fn();
    const component = render(
      <RatingDefault initialRating={3} onClick={mockFn} />,
    );
    const btn1 = component.getByRole("button", { name: "Rating 1" });
    const btn2 = component.getByRole("button", { name: "Rating 2" });
    const btn3 = component.getByRole("button", { name: "Rating 3" });
    const btn4 = component.getByRole("button", { name: "Rating 4" });
    const btn5 = component.getByRole("button", { name: "Rating 5" });
    fireEvent.click(btn1);
    fireEvent.click(btn2);
    fireEvent.click(btn3);
    fireEvent.click(btn4);
    fireEvent.click(btn5);

    expect(mockFn).toHaveBeenCalledTimes(5);
  });
});
