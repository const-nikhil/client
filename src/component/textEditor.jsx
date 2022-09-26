import React from "react";

import { jsPDF } from "jspdf";
import { Button } from "@mui/material";
import { DefaultEditor } from "react-simple-wysiwyg";
import DownloadIcon from '@mui/icons-material/Download';

const TextEditor = () => {
    const [html, setHtml] = React.useState("");

    const onChange = (e) => {
        setHtml(e.target.value);
    }

    const generatePdf = () => {
        const doc = new jsPDF();
        doc.html(html).save()
    }
    return (
        <div style={{ margin: "20px 20px 0px 0px" }} >
            <DefaultEditor value={html} onChange={onChange} />
            <div style={{ marginTop: "20px" }}>
                <Button
                    variant="contained"
                    onClick={generatePdf}
                    disabled={!!!html.length}
                    startIcon={<DownloadIcon />}
                >
                    Download
                </Button>
            </div>
        </div>
    )
};

export default TextEditor;
