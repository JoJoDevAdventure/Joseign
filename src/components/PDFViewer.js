// components/PDFViewer.js
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewer = ({ fileUrl }) => {
  return (
    <div className="w-full h-full overflow-auto border border-primary rounded-xl">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl={fileUrl} className="w-full h-full" />
      </Worker>
    </div>
  );
};

export default PDFViewer;