import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

import { style } from "./style";

const Textfield = (props) => {
    const { value, onChange, onKeyPress, label = "" } = props;
    return (
        <TextField
            fullWidth
            value={value}
            label={label}
            onChange={onChange}
            onKeyPress={onKeyPress}
            style={style}
            InputProps={{
                startAdornment:
                    < InputAdornment position="start" >
                        <PlaylistAddCheckIcon />
                    </InputAdornment >
            }}
        />
    )
};

export default Textfield;


