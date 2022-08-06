import escapeHtml from "escape-html";
import { Node, Descendant, Text } from "slate";

import { CustomText, CustomElement } from "./richtext";

// Plain Serialize
export const plainSerialize = (nodes: Descendant[]) => {
  return nodes.map((n) => Node.string(n)).join("\n");
};

// serializeToHTML
export const HTMLSerialize = (nodes: Descendant[]) => {
  // console.log("serializeToHTML nodes", nodes);
  return nodes.map((n) => serializeHTML(n)).join("\n");
};

// serializeToHTML
export const HTMLDeserialize = (nodes: Descendant[]) => {
  // console.log("HTMLDeserialize nodes", nodes);
  return nodes.map((n) => serializeHTML(n)).join("\n");
};

const serializeHTML = (node: CustomText | CustomElement): string => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
    if (node.underline) {
      string = `<em>${string}</em>`;
    }
    if (node.italic) {
      string = `<u>${string}</u>`;
    }
    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }
    if (node.code) {
      string = `<code>${string}</code>`;
    }
    return string;
  }

  const children = node.children.map((n) => serializeHTML(n)).join("");

  switch (node.type) {
    case "block-quote":
      return `<blockquote><p>${children}</p></blockquote>`;
    case "paragraph":
      return `<p>${children}</p>`;
    case "numbered-list":
      return `<ul>${children}</ul>`;
    case "bulleted-list":
      return `<ol>${children}</ol>`;
    case "list-item":
      return `<li>${children}</li>`;
    case "heading-one":
      return `<h1>${children}</h1>`;
    case "heading-two":
      return `<h2>${children}</h2>`;
    // case "link":
    //   return `<a href="${escapeHtml(node.url)}">${children}</a>`;
    default:
      return children;
  }
};
