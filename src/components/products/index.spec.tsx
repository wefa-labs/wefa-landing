import { render, fireEvent } from "@test";

import ProductButtonCard from "./product-button-card";
import ProductFeaturesCard from "./product-features-card";
import ProductSimpleCard from "./product-simple-card";

describe("src/components/products testing with testing-library", () => {
  it("ProductSimpleCard should render as expected without crashing", () => {
    const component = render(
      <ProductSimpleCard image="dummy.jpg" title="Test Product" price={10} />,
    );
    expect(component).toBeTruthy();
  });

  it("ProductWithButtonCard should render as expected without crashing", () => {
    const component = render(
      <ProductButtonCard
        image="dummy.jpg"
        title="Test Product"
        price={10}
        button={<a>Button</a>}
      />,
    );
    expect(component).toBeTruthy();
  });

  it("ProductWithButtonCard has clickable button as expected", () => {
    const mockFn = jest.fn();
    const component = render(
      <ProductButtonCard
        image="dummy.jpg"
        title="Test Product"
        price={10}
        button={<a onClick={mockFn}>Mock Button</a>}
      />,
    );
    expect(component).toBeTruthy();
    const btn = component.getByText("Mock Button");
    fireEvent.click(btn);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("ProductWithFeaturesCard should render as expected without crashing", () => {
    const component = render(
      <ProductFeaturesCard
        image="dummy.jpg"
        title="Test Product"
        price={10}
        features={["1", "2", "3"]}
      />,
    );

    expect(component).toBeTruthy();
  });
});
