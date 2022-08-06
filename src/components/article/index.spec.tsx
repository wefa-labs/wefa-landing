import { render } from "@test";

import ArticleCard from "./article-card";
import ArticleImageWideCard from "./article-image-wide-card";

describe("src/components/article component testing with testing-library", () => {
  it("should render as expected without crashing", () => {
    const component1 = render(
      <ArticleCard
        meta="meta"
        title="Title"
        href="/demo"
        tag="tag"
        tagHref="#tag"
        body="Body"
        author="John Doe"
        authorHref="#Doe"
        avatar={{
          src: "dummy.jpg",
          width: 100,
          height: 100,
        }}
      />,
    );
    const component2 = render(
      <ArticleImageWideCard
        title="Title"
        href="/demo"
        body="Body"
        image={{
          src: "dummy.jpg",
          width: 100,
          height: 100,
        }}
      />,
    );
    expect(component1).toBeTruthy();
    expect(component2).toBeTruthy();
  });
});
