import { render, fireEvent } from "@test";

import { PricingSimpleCard, PricingSimple, examplePlansData } from "./index";

describe("src/components/pricing testing with testing-library", () => {
  it("should render as expected without crashing", () => {
    const component = render(<PricingSimple plans={examplePlansData} />);
    expect(component).toBeTruthy();
  });

  it("has correct pricing plan", () => {
    const { getByTestId } = render(<PricingSimple plans={examplePlansData} />);
    const plans = getByTestId("PricingSimple--stack");

    expect(plans.children.length).toEqual(examplePlansData.length);
  });

  it("has correct pricing title & description", () => {
    const { getByTestId } = render(
      <PricingSimple
        title="Hello World!"
        description="Simple description..."
        plans={examplePlansData}
      />,
    );
    const title = getByTestId("PricingSimple--title");
    const description = getByTestId("PricingSimple--description");
    expect(title.innerHTML).toMatch(/^Hello World!$/);
    expect(description.innerHTML).toMatch(/^Simple description...$/);
  });

  it("has correct features length", () => {
    const mockFn = jest.fn();

    const testPlan = [
      {
        id: 1,
        title: "Test",
        currency: "t",
        price: 13,
        period: "test",
        buttonText: "Test Button",
        onClickAct: mockFn,
        features: [
          { text: "test 1" },
          { text: "test 2" },
          { text: "test 3" },
          { text: "test 4" },
          { text: "test 5" },
        ],
      },
    ];
    const { getByTestId } = render(<PricingSimple plans={testPlan} />);
    const features = getByTestId("PricingSimple--features");
    expect(features.children.length).toEqual(5);
  });

  it("has clickable button", () => {
    const mockFn = jest.fn();

    const testPlan = [
      {
        id: 1,
        title: "Test",
        currency: "t",
        price: 13,
        period: "test",
        buttonText: "Test Button Mock",
        onClickAct: mockFn,
        features: [{ text: "test" }],
      },
    ];

    const { getByText } = render(<PricingSimple plans={testPlan} />);
    const btn = getByText("Test Button Mock");
    fireEvent.click(btn);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("card should render as expected without crashing", () => {
    const mockFn = jest.fn();
    const component = render(
      <PricingSimpleCard
        type="test"
        title="title test"
        price={10.98}
        annuallyPrice={999.99}
        period="test period"
        description="test description"
        annuallyText="test annuallyText"
        actionText="test button"
        onClick={mockFn}
        features={["features 1", "features 2", "features 3"]}
      />,
    );
    // render
    expect(component).toBeTruthy();
    // Click button
    fireEvent.click(component.getByText("test button"));
    expect(mockFn).toHaveBeenCalledTimes(1);
    // title
    expect(component.getByText("title test")).toBeTruthy();
    // price
    expect(component.getByText("10.98")).toBeTruthy();
    // annuallyPrice
    expect(component.getByText("999.99")).toBeTruthy();
    // annuallyText
    expect(component.getByText("test annuallyText")).toBeTruthy();
    // period
    expect(component.getByText("test period")).toBeTruthy();
    // description
    expect(component.getByText("test description")).toBeTruthy();
    // features
    expect(component.getByText("features 1")).toBeTruthy();
    expect(component.getByText("features 2")).toBeTruthy();
    expect(component.getByText("features 3")).toBeTruthy();
  });
});
