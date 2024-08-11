



function SidebarHeader(props) {
    
   

    function printCv() {
        const printWindow = window.open('', '', 'width=800,height=600');
        printWindow.document.write(`
            <html>
            <head>
                <title>Stampa CV</title>
                <style>
                body {
                margin:0;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                font-family: Arial, sans-serif;
            }

                    .compiledCV {
    
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

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
    font-size: 2.5em;
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
    width: 40%;
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
                </style>
            </head>
            <body>
                <div class="compiledCV">
                    ${document.querySelector('.compiledCV').outerHTML}
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    }

    return (
        <div className="resetPrint">
            <button style={{ backgroundColor: '#c7c7c7' }} onClick={props.resetCV}>Reset</button>
            <button style={{ backgroundColor: '#f5f5f5' }} onClick={printCv}>Save</button>
        </div>
    )
}

export default SidebarHeader;