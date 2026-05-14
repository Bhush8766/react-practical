import React, { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const clearFile = () => {
    setFile(null);
  };

  return (
    <div>
      <h2>File Upload with Preview</h2>

      <input type="file" onChange={handleChange} />

      {file && (
        <div>
          {file.type.startsWith("image/") ? (
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              width="200"
            />
          ) : (
            <p>{file.name}</p>
          )}

          <br />

          <button onClick={clearFile}>Clear</button>
        </div>
      )}
    </div>
  );
}