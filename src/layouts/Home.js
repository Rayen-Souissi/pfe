import { useState } from 'react';
import FileUploading from '../Dropzone/FileUpload/FileUpload.jsx'; 
import FileList from '../Dropzone/FileList/FileList.jsx';
import DropFileInput from '../components/DropFileInput.js';
import { Link } from 'react-router-dom';
import Button from 'antd/es/button';

const Home = () => {
  const [files, setFiles] = useState([{ name: 'myfile.pdf' }]);
  const onFileChange = (files) => {
    console.log(files);
}
  return (
    
    <div className="head">
        <div className="box">
            <h2 className="header">Drop file here </h2>
            <DropFileInput onFileChange={(files) => onFileChange(files)}/>
        </div>

      <p className="title">Or upload file</p>
      <FileUploading files={files} setFiles={setFiles}
        removeFile={name => setFiles(files.filter(file => file.name !== name))}/>
        <FileList files={files} removeFile={name => setFiles(files.filter(file => file.name !== name))}  />

                        <Link to={"/AnalysisResultPage"}>
                            <Button size='large' type="primary" htmlType="submit" className='btn'>
                                Result
                            </Button>
                        </Link>
    </div>
  );
};

export default Home;