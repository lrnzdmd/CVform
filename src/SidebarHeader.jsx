import './CompiledCV.css'
import CompiledCV from './CompiledCV';
import React, { useRef } from 'react';
import ReactDOMServer from 'react-dom/server';


function SidebarHeader(props) {
    


    function printCv() {
const printStyles = `
        .compiledCV {
    margin-top: 2em;
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #f5f5f5;
    width:100%;
    height: fit-content;
}

.personalDetails {
    background-color: #20293c;
    color: #f5f5f5;
    display: flex;
    flex-direction: column;
    padding: 2em;
    gap:2em;
}

.personalDetails h2 {
    font-size: 2em;
    align-self: center;
}

.addressPhoneMail {
    align-self: center;
    display: flex;
    gap:1.4em;
}

.infoWithIcon {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 0.4em;
    row-gap: 0.1em;
}

.infoWithIcon img {
    width: 1.6em;
}

.infoWithIcon p {
    font-size: 1.25em;;
}

.section {
    display: flex;
    flex-direction: column;
    gap:2em;
    margin-bottom: 2em;
}

.section h3 {
    margin-top: 2em;
    margin-bottom: 1.4em;
    align-self: center;
    text-align: center;
    background-color: #d8d8d8;
    width:80%;
    font-size: 1.3em;
    font-weight: 600;
    padding-top:0.4em;
    padding-bottom: 0.8em;
}

.experienceElement {
    display:flex;
    justify-content: center;
    gap: 10%;
}

.expRightCol {
    display:flex;
    flex-direction: column;
    gap:0.2em;
    width: 50%;
}

.expLeftCol {
    width:30%;
    display: flex;
    flex-direction: column;
    gap:0.3em;
}

.element {
    width:100%;
}
    `

        const printContent = (
            <div>
                <CompiledCV cv={props.cv} />
            </div>
        );
    
        const printWindow = window.open('', '', 'width=800,height=600');
        const printDocument = printWindow.document;
    
        printDocument.open();
        printDocument.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Stampa CV</title>
                
                <style>${printStyles}
                </style>
            </head>
            <body>
                <div id="print-content">${ReactDOMServer.renderToStaticMarkup(printContent)}</div>
            </body>
            </html>
        `);
        printDocument.close();
    
      
        printWindow.onload = () => {
            printWindow.print();
        };
    }

    return (
        <div className="resetPrint">
            <button style={{ backgroundColor: '#c7c7c7' }} onClick={props.resetCV}>Reset</button>
            <button style={{ backgroundColor: '#f5f5f5' }} onClick={printCv}>Save</button>
           
        </div>
    )
}

export default SidebarHeader;