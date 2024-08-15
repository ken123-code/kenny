import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../product/Product';
import { Button, Container, Box, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import AOS from 'aos'; // Import AOS

export default function Products() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('none'); // 'none', 'price-asc', 'price-desc', 'name-asc', 'name-desc'
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items per page

  useEffect(() => {
    fetchData();
    AOS.init(); // Initialize AOS
  }, []);

  const url = "https://66a07be77053166bcabb8fcc.mockapi.io/student";

  const fetchData = () => {
    axios.get(url)
      .then(function (res) {
        setData(res.data);
        // Extract unique categories
        const uniqueCategories = ['All', ...new Set(res.data.map(item => item.category))];
        setCategories(uniqueCategories);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page when search term changes
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    setCurrentPage(1); // Reset to the first page when sorting changes
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to the first page when category changes
  };

  // Filtering and Sorting logic
  const filteredProducts = data
    .filter(product => 
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortOrder) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = sortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Box my={4}>
        {/* Search Bar */}
        <Box mb={4}>
          <TextField
            fullWidth
            label="Search products"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Box>

        {/* Filters and Sorting */}
        <Box mb={4} display="flex" justifyContent="space-between" alignItems="center">
          <FormControl variant="outlined" sx={{ mr: 2, minWidth: 120 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Category"
            >
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel>Sort by</InputLabel>
            <Select
              value={sortOrder}
              onChange={handleSortChange}
              label="Sort by"
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="price-asc">Price: Low to High</MenuItem>
              <MenuItem value="price-desc">Price: High to Low</MenuItem>
              <MenuItem value="name-asc">Name: A to Z</MenuItem>
              <MenuItem value="name-desc">Name: Z to A</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Pagination Controls */}
        <Box mb={4} display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>

        {/* Product Cards */}
        <Box
          display="flex"
          flexWrap="wrap"
          gap={4} // Add space between items
          justifyContent="center"
        >
          {currentItems.map((item) => (
            <Box
              key={item.id}
              width={{ xs: '100%', sm: '48%', md: '30%', lg: '22%' }} // Adjust width for responsive layout
              data-aos="zoom-in" // Add AOS attribute for animation
            >
              <Product product={item} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
