import { Box, Pagination, Typography } from '@mui/material';
import React from 'react';
import { useContextProvider } from '../../Context/ContextProvider';

const PaginationPage = () => {
    const { setPagination, pagination, characterData } = useContextProvider();
    const totalPages = characterData?.info?.pages;

    const handlePageChange = (event, value) => {
        setPagination(value);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', alignItems: 'center', margin: '50px 0' }}>
            {/* <Box> */}
            <Pagination
                count={totalPages}
                page={pagination}
                onChange={handlePageChange}
            />
            <Typography>Total Character Found :  {characterData?.info?.count}</Typography>
            {/* </Box> */}
        </Box>
    );
};

export default PaginationPage;
