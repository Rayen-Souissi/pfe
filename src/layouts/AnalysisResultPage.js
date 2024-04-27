import React from 'react';
import './AnalysisResultPage.css'; // Import CSS file for styling

const AnalysisResultPage = ({ analyzingFiles, otherFiles }) => {
    return (
        <div className="analysis-result-container">
            {/* Render the analyzing files section */}
            <div className="section">
                <h2>Analyzing Files</h2>
                {analyzingFiles && analyzingFiles.length > 0 ? (
                    <div className="file-list">
                        {analyzingFiles.map(file => (
                            <div key={file.name} className="file-item">{file.name}</div>
                        ))}
                    </div>
                ) : (
                    <p>No files are currently being analyzed.</p>
                )}
            </div>
            {/* Render the other files section */}
            <div className="section">
                <h2>Other Files</h2>
                {otherFiles && otherFiles.length > 0 ? (
                    <div className="file-list">
                        {otherFiles.map(file => (
                            <div key={file.name} className="file-item">{file.name}</div>
                        ))}
                    </div>
                ) : (
                    <p>No other files uploaded.</p>
                )}
            </div>
        </div>
    );
};

export default AnalysisResultPage;
