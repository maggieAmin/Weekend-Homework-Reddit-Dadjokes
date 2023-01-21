import { FilterListOutlined } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"
import { positions } from "@mui/system"
import { useState } from "react"

const SearchForm = ({searchText, handleChange}) => {

    return (
            <TextField label="Search" value={searchText} onChange={handleChange}/>
    )
}

export default SearchForm