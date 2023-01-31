import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import 

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // Prevent page reload on form (SearchBar) submission
        e.preventDefault();

        // If searchTerm exists, navigate to custom url
        if(searchTerm) {
            navigate(`/search/${searchTerm}`)
        }

        // Reset searchTerm to empty string
        setSearchTerm('');
    }

    // Search bar/form
    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e7e7e7',
                boxShadow: 'none',
                pl: 2,
                mr: { sm: 5}
            }}
        >
            <input 
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}    
            />  

            {/* Submit search form button */}
            <IconButton
                type="submit"
                sx={{ p: '10px', color: 'red'}}
            >
                {/* Search icon */}
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar