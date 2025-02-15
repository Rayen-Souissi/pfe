import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './DropFileInput.css'; // Import the CSS file
import uploadImg from '../assets/cloud-upload-regular-240.png';

const DropFileInput = props => {
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = (e) => {
        e.preventDefault(); 
        const droppedFiles = e.dataTransfer?.files;
        if (droppedFiles && droppedFiles.length > 0) {
            const newFile = droppedFiles[0];
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
        wrapperRef.current.classList.remove('dragover');
    };

    const onFileDrop = (e) => {
        e.preventDefault(); 
        const droppedFiles = e.target?.files;
        if (droppedFiles && droppedFiles.length > 0) {
            const newFile = droppedFiles[0];
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    };

    const fileRemove = (file) => {
        const updatedList = fileList.filter(item => item !== file);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    };

    return (
        <div className="dropfile-container">
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <img src={uploadImg} alt="" />
                    <p>Drag & Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop}/>
            </div>
            {
                fileList.length > 0 && (
                    <div className="drop-file-preview">
                        {fileList.map((item, index) => (
                            <div className="drop-file-preview__item" key={index}>
                                <div className="drop-file-preview__item__info">
                                    <p>{item.name}</p>
                                    <p>{item.size}B</p>
                                </div>
                                <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;
