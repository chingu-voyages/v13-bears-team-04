import React, { useState, useMemo, useCallback } from "react";
import { createEditor, Editor, Transforms, Text, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import SubmitFormBodyContentTitle from "./submitformbodycontenttitle";
import { Code, Default, Leaf, Spoiler } from "../../components/Text/components";

// Define our own custom set of helpers.
const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    });

    return !!match;
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === "code",
    });

    return !!match;
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    );
  },

  toggleSpoilerMark(editor) {
    // const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { spoiler: true },
      { match: n => Text.isText(n), split: true }
    );
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "code" },
      { match: n => Editor.isBlock(editor, n) }
    );
  },
};

const SubmitFormBodyContent = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);

  // Define a rendering function based on the element passed to `props`. We use
  // `useCallback` here to memoize the function for subsequent renders.
  const renderElement = useCallback(props => {
    // console.log("======");
    // console.log("element: ", props);
    switch (props.element.type) {
      case "code":
        return <Code {...props} />;
      default:
        return <Default {...props} />;
    }
  }, []);

  // // Define a leaf rendering function that is memoized with `useCallback`.
  const renderLeaf = useCallback(
    props =>
      props.leaf.spoiler ? <Spoiler {...props} /> : <Leaf {...props} />,
    []
  );

  return (
    <div className="submit__form__body__content">
      <SubmitFormBodyContentTitle />
      <Slate
        editor={editor}
        value={value}
        onChange={val => {
          setValue(val);
          // console.log(serialize(val));
        }}
      >
        <div>
          <button
            type="button"
            onMouseDown={event => {
              event.preventDefault();
              CustomEditor.toggleBoldMark(editor);
            }}
          >
            Bold
          </button>
          <button
            type="button"
            onMouseDown={event => {
              event.preventDefault();
              CustomEditor.toggleCodeBlock(editor);
            }}
          >
            Code Block
          </button>
          <button
            type="button"
            onMouseDown={event => {
              event.preventDefault();
              CustomEditor.toggleSpoilerMark(editor);
            }}
          >
            Spoiler
          </button>
        </div>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={e => {
            if (!e.ctrlKey) return;

            // Replace the `onKeyDown` logic with our new commands.
            switch (e.key) {
              case "`": {
                e.preventDefault();
                CustomEditor.toggleCodeBlock(editor);
                break;
              }

              case "b": {
                e.preventDefault();
                CustomEditor.toggleBoldMark(editor);
                break;
              }
              default:
                break;
            }
          }}
        />
      </Slate>
    </div>
  );
};

export default SubmitFormBodyContent;
