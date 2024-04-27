import React, { useState } from 'react';
import DropFileInput from './DropFileInput';
import FileList from './FileList';

const ParentComponent = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (droppedFiles) => {
    setFiles(prevFiles => [...prevFiles, ...droppedFiles]);
  };

  const removeFile = (name) => {
    setFiles(prevFiles => prevFiles.filter(file => file.name !== name));
  };

  return (
    <div>
      <DropFileInput onFileChange={handleFileChange} />
      <FileList files={files} removeFile={removeFile} />
    </div>
  );
};

export default ParentComponent;
