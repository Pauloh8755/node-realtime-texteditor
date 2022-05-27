import JoditEditor from "jodit-react";
import { useState } from "react";

const RealTimeTextEditor = () => {
  const [value, setValue] = useState();

  return (
    <>
      <JoditEditor
        // ref={editor}
        value={value}
        // config={config}
        tabIndex={1} // tabIndex of textarea
        // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => setValue(newContent)}
      />
      {value}
    </>
  );
};

export { RealTimeTextEditor };
