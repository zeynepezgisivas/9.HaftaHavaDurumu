import './SunnyBgImage.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CountrySelect from './CountrySelect';

const SunnyBgImage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='background-image text-white d-flex justify-content-center align-items-center '>
        <div className='text-center z-index2'>
          <h1 className='fs-1 fw-bold text-m'>Şehir seçerek hava durumunu öğrenebilirsiniz.</h1>
          <p className='fs-5 d-flex justify-content-start mb-4 text-lg'>Şehrini seç ve hava durumunu öğren.</p>
          <Button onClick={handleShow} variant='light' active className="d-flex align-items-center" style={{ backgroundColor: '#FFFF' }}>
          <span className="me-2">+</span> Şehir Ekle
          </Button>
          <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='font-bold'>Şehir Ekle</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <CountrySelect lblName = {"Ülke"}></CountrySelect>
              <div className="d-flex justify-content-end mt-3">
              <Button onClick={handleClose} variant='light' active className="d-flex align-items-center" style={{ backgroundColor: '#FFFF', marginTop: '397px' , marginRight: '10px', }}>
              <span className="me-2">x</span> Cancel
              </Button>
              <Button
                style={{ backgroundColor: '#16326C', color: 'white', marginTop: '397px' }}
                variant="primary"
                className="me-2"
              >
                Save
              </Button>
            </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
      
    </>
  );
};

export default SunnyBgImage;