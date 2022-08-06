import { render } from "@test";

import CarouselDefault from "./carousel-default";

describe("src/components/carousel testing with testing-library", () => {
  it("should render as expected without crashing", () => {
    const component = render(
      <CarouselDefault>
        <>1</>
        <>2</>
        <>3</>
        <>4</>
        <>5</>
      </CarouselDefault>,
    );
    expect(component).toBeTruthy();
  });
});
