/**
 * @jest-environment jsdom
 */
import { render } from "@test";

import FooterLargeNavigationAppstore from "./footer-large-navigation-appstore";
import FooterLargeNavigationLogoCentered from "./footer-large-navigation-logo-centered";
import FooterLargeNavigationLogoLeft from "./footer-large-navigation-logo-left";
import FooterLargeNavigationNewsletter from "./footer-large-navigation-newsletter";
import FooterSimpleLogoSocial from "./footer-simple-logo-social";
import FooterSimpleNavigation from "./footer-simple-navigation";
import FooterSimpleNavigationLogoCentered from "./footer-simple-navigation-logo-centered";
import FooterSimpleSocial from "./footer-simple-social";

describe("src/components/footer component testing with testing-library", () => {
  // Large
  it("FooterLargeNavigationAppstore component should render as expected", () => {
    const component = render(<FooterLargeNavigationAppstore />);
    expect(component).toBeTruthy();
  });

  it("FooterLargeNavigationLogoCentered component should render as expected", () => {
    const component = render(<FooterLargeNavigationLogoCentered />);
    expect(component).toBeTruthy();
  });

  it("FooterLargeNavigationLogoLeft component should render as expected", () => {
    const component = render(<FooterLargeNavigationLogoLeft />);
    expect(component).toBeTruthy();
  });

  it("FooterLargeNavigationNewsletter component should render as expected", () => {
    const component = render(<FooterLargeNavigationNewsletter />);
    expect(component).toBeTruthy();
  });

  // Simple Components
  it("FooterSimpleSocial component should render as expected", () => {
    const component = render(<FooterSimpleSocial />);
    expect(component).toBeTruthy();
  });

  it("FooterSimpleNavigation component should render as expected", () => {
    const component = render(<FooterSimpleNavigation />);
    expect(component).toBeTruthy();
  });

  it("FooterSimpleNavigationLogoCentered component should render as expected", () => {
    const component = render(<FooterSimpleNavigationLogoCentered />);
    expect(component).toBeTruthy();
  });

  it("FooterSimpleNavigation component should render as expected", () => {
    const component = render(<FooterSimpleNavigation />);
    expect(component).toBeTruthy();
  });

  it("FooterSimpleLogoSocial component should render as expected", () => {
    const component = render(<FooterSimpleLogoSocial />);
    expect(component).toBeTruthy();
  });
});
