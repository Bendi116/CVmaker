import { useState } from "react";
import { Editor } from "./Editor";
import { Viewer } from "./Viewer";

export function App() {
  const [name, setName] = useState("");
  const [viewerVisible, setViewerVisible] = useState(true);

  return (
    <main style={{ gridTemplateColumns: viewerVisible ? "1fr 1fr" : "1fr" }}>
      <Editor
        name={name}
        onChange={(e) => setName(e.target.value)}
        toggleCvViewer={() => setViewerVisible(!viewerVisible)}
      ></Editor>
      <Viewer name={name} isVisible={viewerVisible}></Viewer>
    </main>
  );
}
