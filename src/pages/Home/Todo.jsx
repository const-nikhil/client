import React, { useState } from "react";
import { Typography } from "@mui/material";
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';


import { Textfield, TodoList } from "../../component";
import EmptyTablePage from "./EmptyTablePage";
import { notepad_heading, todo_header_parent, todo_icon } from "./style";

const Todo = () => {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (e) => setValue(e.target.value);

    const onSubmit = (e) => {
        if (e.key === "Enter" && value) {
            setList([...list, value])
            setValue("")
        }
    }

    const onDelete = (index) => {
        list.splice(index, 1)
        setList([...list]);
    }

    return (
        <>
            <div style={todo_header_parent} >
                <FormatLineSpacingIcon fontSize="medium" sx={todo_icon} />
                <Typography variant="h5" sx={notepad_heading}>
                    <b>
                        My to-do List
                    </b>
                </Typography>
            </div>
            <Textfield
                value={value}
                label="Enter your task"
                onChange={handleChange}
                onKeyPress={onSubmit} />
            {!!list.length ? <TodoList list={list} onDelete={onDelete} /> : <EmptyTablePage />}
        </>
    )
};

export default Todo;
