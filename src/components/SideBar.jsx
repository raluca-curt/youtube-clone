import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const selectedCategory = "New";

const SideBar = () => (
  <Stack
    direction={{ xs: 'row', md: 'column' }}
    sx={{ overflowY: 'auto', height: { xs: 'auto', md: '90%' } }}
  >
      {categories.map((category) => (
        <button className="category-btn"
          style={{ 
            color: '#fff',
            marginRight: '15px',
            backgroundColor: category.name === selectedCategory && '#FC1503'
          }}
          key={category.name}
        >
          <span 
          style={{ 
            color: category.name === selectedCategory ? '#fff' : '#FC1503',
            marginRight: '15px'
          }}>{category.icon}</span>
          <span 
          style={{ 
            opacity: category.name === selectedCategory ? '1' : '0.8'
          }}>{category.name}</span>
        </button>
      ))}

  </Stack>
)

export default SideBar