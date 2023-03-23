import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface props {
  getContent: (data: string) => void;
  placeholder: string;
}
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

function Editor({ getContent, placeholder }: props) {
  return (
    <div id="editor">
      <ReactQuill
        id="editor_cp"
        onChange={getContent}
        modules={modules}
        formats={formats}
        placeholder= {placeholder}
      />
    </div>
  );
}

export default Editor;
