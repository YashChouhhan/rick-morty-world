import { Box, TextField } from "@mui/material";
import React from "react";
import { useContextProvider } from "../../Context/ContextProvider";

const Search = () => {
    const { setSearchTerm, setPagination } = useContextProvider();

    const handelChange = (event) => {
        setSearchTerm(event);
        setPagination(1);
    }

    return (
        <Box sx={{ marginBottom: '20px' }}>
            <TextField onChange={(event) => handelChange(event.target.value)} label="Search Character" fullWidth variant="outlined" />
        </Box>
    );
}

export default Search; 