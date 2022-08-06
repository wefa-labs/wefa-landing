// https://github.com/aboveyunhai/chakra-slatejs-example
import React, { useRef, useCallback, useMemo, useState } from "react";

import { isHotkey } from "is-hotkey";
import debounce from "lodash.debounce";
import { Editor, Transforms, createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import { Editable, withReact, Slate, ReactEditor } from "slate-react";

import { Box, ChakraProps, ThemingProps } from "@chakra-ui/react";

import { Element, Leaf, toggleMark, Toolbar } from "./components";

// import { plainSerialize, HTMLSerialize } from "./serialize";

// @refresh reset
const HOTKEYS: { [hotkey: string]: string } = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RichTextBlockProps {
  // onChange: (value: Descendant[]) => void;
  onChange: (value: string) => void;
  defaultValue?: string;
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

const RichTextBlock: React.FC<
  RichTextBlockProps & ChakraProps & ThemingProps
> = ({ colorScheme, onChange, defaultValue }) => {
  const [
    value,
    setValue, // eslint-disable-line @typescript-eslint/no-unused-vars
  ] = useState<Descendant[]>(
    defaultValue ? JSON.parse(defaultValue) : initialValue,
  );

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withHistory(withReact(createEditor() as ReactEditor)),
    [],
  );

  //focus selection
  const [
    focused, // eslint-disable-line @typescript-eslint/no-unused-vars
    setFocused,
  ] = useState(false);
  const savedSelection = useRef(editor.selection);

  const onFocus = useCallback(() => {
    setFocused(true);
    if (!editor.selection && value?.length) {
      Transforms.select(
        editor,
        savedSelection.current ?? Editor.end(editor, []),
      );
    }
  }, [editor]);

  const onBlur = useCallback(() => {
    setFocused(false);
    savedSelection.current = editor.selection;
  }, [editor]);

  const divRef = useRef<HTMLDivElement>(null);

  const focusEditor = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === divRef.current) {
        ReactEditor.focus(editor);
        e.preventDefault();
      }
    },
    [editor],
  );

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, event as React.KeyboardEvent)) {
        event.preventDefault();
        const mark = HOTKEYS[hotkey];
        toggleMark(editor, mark);
      }
    }
  };

  const onChangeSerialize = (value: Descendant[]) => {
    return onChange(JSON.stringify(value));
  };

  const debouncedChangeHandler = useCallback(
    debounce(onChangeSerialize, 300),
    [],
  );

  return (
    <Box ref={divRef} onMouseDown={focusEditor} borderWidth={"1px"}>
      <Slate
        editor={editor}
        value={value}
        // onChange={(newValue) => setValue(newValue)}
        // onChange={onChange}
        onChange={debouncedChangeHandler}
      >
        <Toolbar colorScheme={colorScheme} />
        <Box p={2}>
          <Editable
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            // placeholder="Enter some rich text…"
            spellCheck
            style={{
              padding: "15px 10px",
              minHeight: "150px",
              resize: "vertical",
              overflow: "auto",
            }}
          />
        </Box>
      </Slate>
    </Box>
  );
};

export default RichTextBlock;
