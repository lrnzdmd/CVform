import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import CompiledCV from './CompiledCV';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';


function SidebarHeader(props) {
    const hiddenContainerRef = useRef(null);


    function savePdf() {
        const printCv = (<CompiledCV cv={props.cv}></CompiledCV>)

        const hiddenContainer = hiddenContainerRef.current;
        const root = ReactDOM.createRoot(hiddenContainer);
        root.render(printCv);

        html2canvas(hiddenContainer).then((canvas) => {
            const imgdata = canvas.toDataURL("image/jpeg");
            const pdf = new jsPDF();
            pdf.addImage(imgdata, "JPEG",0,0);
            pdf.save("CV.pdf");

            root.unmount();
        }).catch((error) => {
            console.error("Errore nella generazione del PDF:", error);
          });
    }


    return (
        <div className="resetPrint">
            <button style={{ backgroundColor: '#c7c7c7' }} onClick={props.resetCV}>Reset</button>
            <button style={{ backgroundColor: '#f5f5f5' }} onClick={savePdf}>Save</button>
            <div ref={hiddenContainerRef} className="pdffriendly" style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}></div>
        </div>
    )
}

export default SidebarHeader;