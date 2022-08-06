/**
 * @jest-environment jsdom
 */
import { render } from "@test";

import Accordion from "./accordion-default";

const exampleData = [
  {
    title: "How can I purchase a membership?",
    body: "Integer legentibus erat a ante historiarum dapibus. Qui ipsorum lingua Celtae, nostra Galli appellantur.",
    // isDisabled: true,
  },
  {
    title: "How do I find my product key?",
    body: "Qui ipsorum lingua Celtae, nostra Galli appellantur. Cum sociis natoque penatibus et magnis dis parturient. Etiam habebis sem dicantur magna mollis euismod.",
    isDisabled: true,
  },
  {
    title: "How long does it take to download?",
    body: "Paullum deliquit, ponderibus modulisque suis ratio utitur. Quid securi etiam tamquam eu fugiat nulla pariatur.",
  },
];

describe("src/components/accordion component testing with testing-library", () => {
  it("should render as expected without crashing", () => {
    const component = render(<Accordion accordions={exampleData} />);
    expect(component).toBeTruthy();
  });
});
