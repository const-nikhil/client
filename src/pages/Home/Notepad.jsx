import React from "react";
import { Typography } from "@mui/material";
import NoteAddIcon from '@mui/icons-material/NoteAdd';

import { TextEditor } from "../../component";
import { notepad_heading, notepad_icon, notepad_parent } from "./style";

const NotePad = () => {
    const RenderHeading = () => (
        <div style={notepad_parent} >
            <NoteAddIcon fontSize="medium" sx={notepad_icon} />
            <Typography variant="h5" sx={notepad_heading}>
                <b>
                    Notepad
                </b>
            </Typography>
        </div>
    );

    return (
        <>
            <RenderHeading />
            <TextEditor />
        </>
    )
};

export default NotePad;
