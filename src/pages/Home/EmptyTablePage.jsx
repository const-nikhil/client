import React from "react";
import { Box, Typography } from '@mui/material';

import { box, typography } from "./style";

const EmptyTablePage = () => {
    return (
        <Box sx={box}>
            <Typography variant="h5" sx={typography}>Nothing to do for now</Typography>
            <img src="images/nowork.png" alt="default text" />
        </Box>
    )
};

export default EmptyTablePage;
