/* eslint-disable react/prop-types */
import './Navbar.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const MyOffCanvas = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
    <div className="flex items-center font-bold">{props.title || 'Hava Durumu Sorgulama'}</div>
    <Button
      style={{ backgroundColor: '#16326C', color: 'white' }}
      variant="primary"
      onClick={handleShow}
      className="me-2"
    >
      <svg
        className="horizontal-svg"
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="13"
        height="13"
      >
        <path
          d="M24,3.5c0,.83-.67,1.5-1.5,1.5H1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5H22.5c.83,0,1.5,.67,1.5,1.5ZM6.5,20H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H6.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5ZM14.5,11H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H14.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z"
          fill="white"
        />
      </svg>
    </Button>
      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Weahter App</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         Home
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    

    </nav>
    </>
  )
}

export default MyOffCanvas