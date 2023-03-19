import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface props {
  getContent: (data: string) => void;
}

function Editor({ getContent }: props) {
  const [content, setContent] = useState("");

  function handleContentChange(value: string) {
    setContent(value);
  }

  getContent(content);

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "background",
    "list",
    "bullet",
    "script",
    "indent",
    "link",
  ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link"],
      ["clean"],
    ],
  };
  return (
    <ReactQuill
      id="editor"
      value={content}
      onChange={handleContentChange}
      modules={modules}
      formats={formats}
    />
  );
}

export default Editor;
