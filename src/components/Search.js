import React, { useState } from "react";
import {Button, TextField} from "@mui/material";


const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="search">
            <TextField style={{height:50, margin:6.5}} id="outlined-basic" label="Enter the movie name" variant="outlined"
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <Button style={{margin: 10, height:50}} variant="contained" onClick={callSearchFunction} type="submit">Search</Button>
        </form>
    );
}

export default Search;
