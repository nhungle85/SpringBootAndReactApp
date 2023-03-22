import React, { useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Worker } from "@react-pdf-viewer/core";

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import pdfFile from './React-Bootstrap-Documentation.pdf';

const PDFViewer = ({file}) => {
    const [defaultFile] = useState(pdfFile);

    // Create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (    
        <div className="pdf-container">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                theme="dark"
                fileUrl={defaultFile}
                plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
        </div>
       
        
    );
}

export default PDFViewer;