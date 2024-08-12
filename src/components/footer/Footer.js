import React, {useContext} from 'react'
import { AppContext } from '../../AppContext'
import { Button } from 'reactstrap'
import Typography from '@mui/material/Typography';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { colors } from '@mui/material';
import './footer.css'
export default function Footer() {
  const {count,setCount}=useContext(AppContext);

  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <Button onClick={()=>setCount(count +1)}>Count up</Button>
      Footer */}
      <MDBFooter  bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 bg-blue text-white'>
        <div className='me-5 d-none d-lg-block'>
          <span><Typography
            // variant="h6"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#FFFFF8',
              textDecoration: 'none',
            }}
          >
            Get connected with us on social networks:
          </Typography></span>
          
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='bg-blue-light'>
        <MDBContainer className='text-center text-md-start pt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase text-white fw-bold mb-4'>
                <MDBIcon icon="gem " className="me-3" />
                Company name
              </h6>
              <p className='text-white'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 text-white'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 text-white'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 text-white'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      
      <div className='d-flex justify-content-center p-4 '  style={{ backgroundColor: '#1976D2' }}>
      <Typography
            // variant="h6"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#FFFFF8',
              textDecoration: 'none',
            }}
          >
            © 2024 Copyright: Huynh Huu Loc
          </Typography>
        
        {/* <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a> */}
      </div>
    </MDBFooter>
    </div>
  )
}
