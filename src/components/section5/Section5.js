import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./section5.css";
import Link from "@mui/material/Link";
import axios from "axios";
import NotFound from "../notFound/NotFound";
const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  //   color: theme.palette.text.secondary,
}));
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }
// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };
// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }
// Define a TabPanel component for consistency
function TabPanel(props) {
  const { children, value, index, dir } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      dir={dir}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

// Function to generate accessibility props
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Section5() {
  const [categories, setCategories] = React.useState([]);

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [data, setData] = React.useState([]);
  // React.useEffect(()=>{
  //   fetchData();
  // },[])
  const renderLinks = (category) => {
    return data
      .filter((item) => item.category === category)
      .map((item) => (
        <Link key={item.id} href="#" underline="none">
          {item.name}
        </Link>
      ));
  };
  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        // Extract unique categories from data
        const uniqueCategories = [
          ...new Set(res.data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const url = "https://66a07be77053166bcabb8fcc.mockapi.io/student";
  const fetchData = () => {
    axios
      .get(url)
      .then(function (res) {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box
      sx={{ width: "90%", marginBottom: "40px", marginLeft: "80px" }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((item, index) =>
          index < 4 ? (
            <Grid xs={12} sm={6} lg={2}>
              <Card variant="outlined" sx={{ maxWidth: 360 }}>
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
                  <Typography gutterBottom variant="body2">
                    Select type
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Chip color="primary" label="Soft" size="small" />
                    <Chip label="Medium" size="small" />
                    <Chip label="Hard" size="small" />
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ) : (
            <></>
          )
        )}
      </Grid>
      <Grid xs={4}>
        <Typography variant="h5" textAlign={"center"}>
          Loai sach
        </Typography>
        <Box
          sx={{
            bgcolor: "background.paper",
            width: 400,
            textAlign: "center",
          }}
        >
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              {categories.map((category, index) => (
                <Tab label={category} {...a11yProps(index)} key={index} />
              ))}
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            {categories.map((category, index) => (
              <TabPanel
                value={value}
                index={index}
                dir={theme.direction}
                key={index}
              >
                {renderLinks(category)}
              </TabPanel>
            ))}
          </SwipeableViews>
        </Box>
      </Grid>
    </Box>

    // {/* <Grid xs={12} sm={6} lg={2}>
    //   <Card variant="outlined" sx={{ maxWidth: 360 }}>
    //     <Box sx={{ p: 2 }}>
    //       <Stack
    //         direction="row"
    //         justifyContent="space-between"
    //         alignItems="center"
    //       >
    //         <Typography gutterBottom variant="h5" component="div">
    //           Toothbrush
    //         </Typography>
    //         <Typography gutterBottom variant="h6" component="div">
    //           $4.50
    //         </Typography>
    //       </Stack>
    //       <Typography color="text.secondary" variant="body2">
    //         Pinstriped cornflower blue cotton blouse takes you on a walk to
    //         the park or just down the hall.
    //       </Typography>
    //     </Box>
    //     <Divider />
    //     <Box sx={{ p: 2 }}>
    //       <Typography gutterBottom variant="body2">
    //         Select type
    //       </Typography>
    //       <Stack direction="row" spacing={1}>
    //         <Chip color="primary" label="Soft" size="small" />
    //         <Chip label="Medium" size="small" />
    //         <Chip label="Hard" size="small" />
    //       </Stack>
    //     </Box>
    //   </Card>
    // </Grid>
    // <Grid xs={12} sm={6} lg={2}>
    //   <Card variant="outlined" sx={{ maxWidth: 360 }}>
    //     <Box sx={{ p: 2 }}>
    //       <Stack
    //         direction="row"
    //         justifyContent="space-between"
    //         alignItems="center"
    //       >
    //         <Typography gutterBottom variant="h5" component="div">
    //           Toothbrush
    //         </Typography>
    //         <Typography gutterBottom variant="h6" component="div">
    //           $4.50
    //         </Typography>
    //       </Stack>
    //       <Typography color="text.secondary" variant="body2">
    //         Pinstriped cornflower blue cotton blouse takes you on a walk to
    //         the park or just down the hall.
    //       </Typography>
    //     </Box>
    //     <Divider />
    //     <Box sx={{ p: 2 }}>
    //       <Typography gutterBottom variant="body2">
    //         Select type
    //       </Typography>
    //       <Stack direction="row" spacing={1}>
    //         <Chip color="primary" label="Soft" size="small" />
    //         <Chip label="Medium" size="small" />
    //         <Chip label="Hard" size="small" />
    //       </Stack>
    //     </Box>
    //   </Card>
    // </Grid>
    // <Grid xs={12} sm={6} lg={2}>
    //   <Card variant="outlined" sx={{ maxWidth: 360 }}>
    //     <Box sx={{ p: 2 }}>
    //       <Stack
    //         direction="row"
    //         justifyContent="space-between"
    //         alignItems="center"
    //       >
    //         <Typography gutterBottom variant="h5" component="div">
    //           Toothbrush
    //         </Typography>
    //         <Typography gutterBottom variant="h6" component="div">
    //           $4.50
    //         </Typography>
    //       </Stack>
    //       <Typography color="text.secondary" variant="body2">
    //         Pinstriped cornflower blue cotton blouse takes you on a walk to
    //         the park or just down the hall.
    //       </Typography>
    //     </Box>
    //     <Divider />
    //     <Box sx={{ p: 2 }}>
    //       <Typography gutterBottom variant="body2">
    //         Select type
    //       </Typography>
    //       <Stack direction="row" spacing={1}>
    //         <Chip color="primary" label="Soft" size="small" />
    //         <Chip label="Medium" size="small" />
    //         <Chip label="Hard" size="small" />
    //       </Stack>
    //     </Box>
    //   </Card>
    // </Grid> */}
    //     <Grid xs={4}>
    //       <Typography variant="h5" textAlign={"center"}>
    //         Loai sach
    //       </Typography>
    //       <Box
    //         sx={{
    //           bgcolor: "background.paper",
    //           width: 400,
    //           textAlign: "center",
    //         }}
    //       >
    //         <AppBar position="static">
    //           <Tabs
    //             value={value}
    //             onChange={handleChange}
    //             indicatorColor="secondary"
    //             textColor="inherit"
    //             variant="fullWidth"
    //             aria-label="full width tabs example"
    //           >
    //             <Tab label="Item One" {...a11yProps(0)} />
    //             <Tab label="Item Two" {...a11yProps(1)} />
    //             <Tab label="Item Three" {...a11yProps(2)} />
    //           </Tabs>
    //         </AppBar>
    //         <SwipeableViews
    //           axis={theme.direction === "rtl" ? "x-reverse" : "x"}
    //           index={value}
    //           onChangeIndex={handleChangeIndex}
    //         >
    //           <TabPanel value={value} index={0} dir={theme.direction}>
    //             <Link href="#" underline="none">
    //               {"Sách1"}
    //             </Link>
    //             <Link href="#" underline="none">
    //               {"Sách1"}
    //             </Link>
    //             <Link href="#" underline="none">
    //               {"Sách1"}
    //             </Link>
    //           </TabPanel>
    //           <TabPanel value={value} index={1} dir={theme.direction}>
    //           <Link href="#" underline="none">
    //               {"Sách1"}
    //             </Link>
    //             <Link href="#" underline="none">
    //               {"Sách1"}
    //             </Link>
    //             <Link href="#" underline="none">
    //               {"Sách1"}
    //             </Link>
    //           </TabPanel>
    //           <TabPanel value={value} index={2} dir={theme.direction}>
    //           <Link href="#" underline="none">
    //               {"Sách1"}
    //             </Link>
    //             <Link href="#" underline="none">
    //               {"Sách1"}
    //             </Link>
    //             <Link href="#" underline="none">
    //               {"Sách1"}
    //             </Link>
    //           </TabPanel>
    //         </SwipeableViews>
    //       </Box>
    //     </Grid>
    //     {/* <Grid xs={6}>
    //       <Item>3</Item>
    //     </Grid>
    //     <Grid xs={6}>
    //       <Item>4</Item>
    //     </Grid> */}
    //   </Grid>
    // </Box>
  );
}
