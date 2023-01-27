import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
// import 

const SearchBar = () => (
    // Search bar/form
    <Paper
        component="form"
        onSubmit={() => {}}
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
            value=""
            onChange={() => {}}    
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

export default SearchBar