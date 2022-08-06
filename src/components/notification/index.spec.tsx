import { render, fireEvent } from "@test";

import { Notification } from "./index";
import { NotificationCTA } from "./notification-cta";

describe("src/components/notification component testing with testing-library", () => {
  it("should render as expected without crashing", () => {
    const mockFn = jest.fn();
    const component = render(
      <Notification title="Notification" message="Notification" />,
    );
    const cta = render(
      <NotificationCTA
        title="Notification"
        message="Notification"
        buttons={
          <button data-testid="button" onClick={mockFn}>
            Button
          </button>
        }
      />,
    );

    const btn = cta.getByTestId("button");
    fireEvent.click(btn);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(component).toBeTruthy();
    expect(cta).toBeTruthy();
  });
});
