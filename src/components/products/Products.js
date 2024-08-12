import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../product/Product';
import { Button, Col, Container, Row,Pagination,  PaginationItem, PaginationLink  } from 'reactstrap';

export default function Products() {
  const [data,setData]=useState([])
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items per page
useEffect(()=>{
  fetchData();
},[])
const url="https://66a07be77053166bcabb8fcc.mockapi.io/student"
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
useEffect(() => {
  fetchData();
}, []);

const handleCategoryChange = (category) => {
  setSelectedCategory(category);
};

const filteredProducts = selectedCategory === 'All' 
  ? data 
  : data.filter(product => product.category === selectedCategory);
 // Pagination logic
 const totalItems = filteredProducts.length;
 const totalPages = Math.ceil(totalItems / itemsPerPage);
 const startIndex = (currentPage - 1) * itemsPerPage;
 const endIndex = startIndex + itemsPerPage;
 const currentItems = filteredProducts.slice(startIndex, endIndex);

 const handlePageChange = (pageNumber) => {
   setCurrentPage(pageNumber);
 };

  return (
    // <div>
    //   <Container>
    //   <Row>
    //    {
    //       data.map((item,index)=>(
    //         <Product key={index} product={item} />
    //       ))
    //    }
    //     </Row>
    //     </Container>
    // </div>
    // <div>
    //   <Container>
    //     <Row>
    //       <Col md={12}>
    //         {/* Render category buttons */}
    //         <div className="category-buttons">
    //           {categories.map(category => (
    //             <Button 
    //               key={category} 
    //               onClick={() => handleCategoryChange(category)} 
    //               color={selectedCategory === category ? 'primary' : 'secondary'}
    //               className="m-1"
    //             >
    //               {category}
    //             </Button>
    //           ))}
    //         </div>
    //       </Col>
    //     </Row>
    //     <Row>
    //       {filteredProducts.map((item) => (
    //         <Col key={item.id} md={3} className="mb-4">
    //           <Product product={item} />
    //         </Col>
    //       ))}
    //     </Row>
    //   </Container>
    // </div>
    <div>
      <Container>
        
        <Row>
          <Col md={12}>
            {/* Render category buttons */}
            <div className="category-buttons">
              {categories.map(category => (
                <Button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  color={selectedCategory === category ? 'primary' : 'secondary'}
                  className="m-1"
                >
                  {category}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
        {/* Pagination Controls */}
        <Row>
          <Col md={12} className="text-center">
            <Pagination color="primary">
              <PaginationItem disabled={currentPage === 1}>
                <PaginationLink previous onClick={() => handlePageChange(currentPage - 1)} />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem active={currentPage === index + 1} key={index}>
                  <PaginationLink onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem disabled={currentPage === totalPages}>
                <PaginationLink next onClick={() => handlePageChange(currentPage + 1)} />
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
        <Row>
          {currentItems.map((item) => (
            <Col key={item.id} md={3} className="mb-4">
              <Product product={item} />
            </Col>
          ))}
        </Row>
        
      </Container>
    </div>
  )
}
