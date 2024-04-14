import React, {useState} from 'react'
import './Trailer.jsx'
import { useParams } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import { useTrailerQuery } from '../../../../hooks/useTrailer.js';
import YouTube from 'react-youtube';
import Modal from 'react-bootstrap/Modal';
import "./Trailer.style.css"

const Trailer = () => {
    const [show, setShow] = useState(false);

    const {id} = useParams();
    const {data, isLoading, isError, error} = useTrailerQuery(id)
    // if(isLoading) {return <h1>Loading ...</h1>}
    // if(isError) {return <Alert variant="danger">{error.message}</Alert>}
    console.log('ttt', data)

    const opts = {
        height: '100%',
        width: '100%',
      };

  return (
    <div>
      {/* <Button className='trailer-button'>Trailer</Button>
      <YouTube videoId="2g811Eo7K8U" opts={opts} /> */}


      <Button className='trailer-button' onClick={() => setShow(true)}>
      Trailer
      </Button>

    <Modal
        show={show}
        onHide={() => setShow(false)}
        centered={true}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton />
            <Modal.Body>
            <YouTube videoId="2g811Eo7K8U" opts={opts} /> 
            </Modal.Body>
    </Modal>

    </div>
  )
}

export default Trailer
