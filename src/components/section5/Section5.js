import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { AppContext } from "../../AppContext";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

// // Initialize AOS
// React.useEffect(() => {
//   AOS.init({
//     duration: 1000,
//     once: true,
//   });
// }, []);

// Styled components
const CardImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderBottom: '1px solid #ddd', // Optional: adds a border line below the image
  transition: 'transform 0.3s ease-in-out', // Smooth scaling transition
  '&:hover': {
    transform: 'scale(1.05)', // Scale up image slightly on hover
  },
}));

export default function Section5() {
  const { cart, setCart } = React.useContext(AppContext);
  const [categories, setCategories] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortOrder, setSortOrder] = React.useState("asc");
  const [page, setPage] = React.useState(1);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const itemsPerPage = 4;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  React.useEffect(() => {
    axios
      .get("https://66a07be77053166bcabb8fcc.mockapi.io/student")
      .then((res) => {
        setData(res.data);
        const uniqueCategories = [...new Set(res.data.map((item) => item.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    let filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory) {
      filtered = filtered.filter((item) =>
        item.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    filtered = filtered.sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    setFilteredData(filtered);
  }, [searchTerm, sortOrder, data, selectedCategory]);

  React.useEffect(() => {
    AOS.refresh(); // Refresh AOS to apply animations to newly rendered elements
  }, [filteredData, page]);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <Box sx={{ width: '100vw', 
      // maxWidth: 1200, 
      margin: '0 auto', 
      padding: 2 , 
      backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/023/716/381/original/4k-colorful-summer-background-animation-with-space-area-fruits-orange-ice-cream-and-beach-ball-video.jpg")',
    backgroundSize:'fixed',
    backgroundAttachment: 'fixed',
    // backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',}}
    >
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'center',
        mb: 4, 
        gap: 2 
      }}>
        <Box sx={{ width: '100%', maxWidth: 300 }}>
          <TextField
            label="Search by name or type"
            variant="outlined"
            onChange={handleSearch}
            value={searchTerm}
            fullWidth
          />
        </Box>
        <Box sx={{ width: '100%', maxWidth: 300 }}>
          <FormControl fullWidth>
            <InputLabel>Sort by Price</InputLabel>
            <Select
              value={sortOrder}
              onChange={handleSortOrderChange}
              label="Sort by Price"
            >
              <MenuItem value="asc">Ascending</MenuItem>
              <MenuItem value="desc">Descending</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: '100%', maxWidth: 300 }}>
          <TextField
            label="Filter by Category"
            variant="outlined"
            onChange={handleCategoryChange}
            value={selectedCategory}
            fullWidth
          />
        </Box>
      </Box>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
        {paginatedData.map((item) => (
          <Grid xs={12} sm={6} lg={3} key={item.id}>
            <Card variant="outlined" sx={{ maxWidth: 360, mx: 'auto' }} data-aos="fade-down-right">
              <CardImage 
                src={item.img}
                alt={item.name}
                onError={(e) => e.target.src = '/path/to/placeholder/image.jpg'} // Fallback image on error
              />
              <Box sx={{ p: 2 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    ${item.price}
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  {item.des}
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(item)}
                  sx={{ width: '100%' }} // Ensure button takes full width
                >
                  Add to Cart
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination
          count={Math.ceil(filteredData.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}
