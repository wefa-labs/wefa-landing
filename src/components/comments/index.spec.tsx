import { render } from "@test";

import Comments from "./index";

describe("src/components/comments testing with testing-library", () => {
  it("should render as expected without crashing", () => {
    const component = render(
      <Comments
        comments={[
          {
            id: "1",
            body: "Thanks to this blog post, I learned new things about the scalable web and now I'm wondering where I can learn more. Can you help me with this?",
            avatar: {
              src: "image.jpg",
              width: 100,
              height: 100,
            },
            author: "Patrick Fleming",
            meta: "43 minutes ago",
            badge: "New",
          },
        ]}
      />,
    );
    expect(component).toBeTruthy();
  });
});
