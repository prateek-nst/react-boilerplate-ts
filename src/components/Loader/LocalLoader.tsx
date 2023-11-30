import React from 'react';

import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const LocalLoader = () => {
    const theme = useTheme();

    const styles = {
        container: { '--color': theme.palette.secondary.main },
    };
    return (
        <Box className="honeycomb" sx={styles.container}>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </Box>
    );
};

export default LocalLoader;
