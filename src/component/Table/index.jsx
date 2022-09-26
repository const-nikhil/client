import React from "react";

import {
    Table,
    TableBody,
    IconButton,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { StyledTableCell, StyledTableRow } from "./style";

const TodoList = ({ list, onDelete }) => {

    const RenderHeading = () => {
        return (
            <TableHead>
                <TableRow>
                    <StyledTableCell>S.no.</StyledTableCell>
                    <StyledTableCell>Description</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                </TableRow>
            </TableHead>
        )
    }

    const RenderRows = () => {
        return (
            <TableBody>
                {list.map((ele, index) => (
                    <StyledTableRow key={ele}>
                        <StyledTableCell allign="left" component="th" scope="row">
                            <b>
                                {!!(index < 10) ? "0" + (index + 1) : index}
                            </b>
                        </StyledTableCell>
                        <StyledTableCell allign="center" component="th" scope="row">
                            {ele}
                        </StyledTableCell>
                        <StyledTableCell align="right" component="th" scope="row">
                            <IconButton onClick={() => onDelete(index)}>
                                <DeleteOutlineIcon />
                            </IconButton>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        )
    }

    return (
        list.length && (
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <RenderHeading />
                    <RenderRows />
                </Table>
            </TableContainer>
        ))
};

export default TodoList;
