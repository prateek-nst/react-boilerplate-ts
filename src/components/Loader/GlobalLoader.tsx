import React from 'react';

import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const loaderClassNames = [
    'gel center-gel',
    'gel c1 r1',
    'gel c2 r1',
    'gel c3 r1',
    'gel c4 r1',
    'gel c5 r1',
    'gel c6 r1',
    'gel c7 r2',
    'gel c8 r2',
    'gel c9 r2',
    'gel c10 r2',
    'gel c11 r2',
    'gel c12 r2',
    'gel c13 r2',
    'gel c14 r2',
    'gel c15 r2',
    'gel c16 r2',
    'gel c17 r2',
    'gel c18 r2',
    'gel c19 r3',
    'gel c20 r3',
    'gel c21 r3',
    'gel c22 r3',
    'gel c23 r3',
    'gel c24 r3',
    'gel c25 r3',
    'gel c26 r3',
    'gel c28 r3',
    'gel c29 r3',
    'gel c30 r3',
    'gel c31 r3',
    'gel c32 r3',
    'gel c33 r3',
    'gel c34 r3',
    'gel c35 r3',
    'gel c36 r3',
    'gel c37 r3',
];

const GlobalLoader = () => {
    const theme = useTheme();
    const styles = {
        container: {
            transform: 'scale(0.6)',
            '--color': theme.palette.secondary.main,
        },
    };
    return (
        <>
            <Box className="socket" sx={styles.container}>
                {loaderClassNames?.map((classname, index) => {
                    return (
                        <Box className={classname} key={index + classname}>
                            <Box className="hex-brick h1"></Box>
                            <Box className="hex-brick h2"></Box>
                            <Box className="hex-brick h3"></Box>
                        </Box>
                    );
                })}
            </Box>
        </>
    );
};

export default GlobalLoader;
