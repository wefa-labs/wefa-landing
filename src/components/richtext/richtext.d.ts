import { BaseEditor } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";

declare module "slate" {
  interface CustomTypes {
    Editor: EditorProps;
    Element: CustomElement;
    Text: CustomText;
  }
}

export type EditorProps = BaseEditor & ReactEditor & HistoryEditor;
export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  underline?: boolean;
};

export type CustomElementType =
  | "paragraph"
  | "block-quote"
  | "list-item"
  | "numbered-list"
  | "bulleted-list"
  | "heading-one"
  | "heading-two";

export type CustomElement = {
  type: CustomElementType;
  children: CustomText[];
};
