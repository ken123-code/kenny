import * as React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import axios from "axios";

// Initialize AOS
AOS.init();

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Section3() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const url = "https://66a07be77053166bcabb8fcc.mockapi.io/student";

  const fetchData = () => {
    axios.get(url)
      .then(function (res) {
        // Limit the number of items to 5
        setData(res.data.slice(0, 5));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          height: '88vh',
          overflow: 'hidden',
          backgroundImage: 'url("https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/newletter_bg.jpg")',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          // backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backdropFilter: 'blur(5px)', // Apply frosted glass effect
            backgroundColor: 'rgba(255, 255, 255, 0.3)', // Optional: add a semi-transparent white background to enhance the effect
            zIndex: 1, // Ensure this box is above the background image
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              width: '90%',
              margin: '0 auto',
              position: 'relative',
              zIndex: 2, // Ensure content is above the frosted effect box
              padding: 2, // Add padding for content
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <ImageList
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  width: '100%',
                  rowHeight: 'auto',
                  gap: 4,
                }}
                variant="quilted"
                cols={5}
              >
                {data.map((item) => (
                  <ImageListItem
                    key={item.id}
                    cols={1}
                    rows={1}
                    data-aos="fade-right"
                    sx={{
                      overflow: 'hidden',
                      borderRadius: '30%', // Ensure the container is circular
                      position: 'relative', // Ensure child elements are positioned relative to this container
                      '&:hover img': {
                        transform: 'scale(1.1)', // Scale up image on hover
                      },
                      transition: 'transform 0.3s ease-in-out', // Smooth transition
                    }}
                  >
                    <Link  to={`/detail/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                          borderRadius: '50%', // Make the image round
                          transition: 'transform 0.3s ease-in-out', // Smooth transition
                        }}
                      />
                    </Link>
                    {/* <ImageListItemBar
                      sx={{
                        background: 'transparent', // Remove the gradient effect
                        color: 'white',
                        top: 0,
                        height: '100%',
                        zIndex: 0
                      }}
                      title={item.title}
                      position="top"
                      actionIcon={
                        <IconButton
                          sx={{ color: 'white' }}
                          aria-label={`star ${item.title}`}
                        >
                          <StarBorderIcon />
                        </IconButton>
                      }
                      actionPosition="left"
                    /> */}
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
}
