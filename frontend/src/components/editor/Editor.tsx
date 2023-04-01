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

const options = {
  theme: "bubble",
  modules: {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
    },
  },
};

function Editor({ getContent, placeholder }: props) {
  return (
    <div id="editor">
      <ReactQuill id="editor_cp" placeholder={placeholder} onChange={getContent} {...options} />
    </div>
  );
}

export default Editor;
