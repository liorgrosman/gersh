
import './App.css';
import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Modal, ModalBody, Form, FormGroup, Label, Input ,Button } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

import Draggable from "react-draggable";





function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [url, setUrl] = React.useState("https://assets.talmudyerushalmi.com/manuscripts/venice/0303_FL77977460.jpg");

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(!modalIsOpen);
  }

  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: "absolute", top: "45px", right: "15px" }}
      onClick={setIsOpen}
    >
      x
    </button>
  );

  return (
    <div className='container'>

    <Form >
    <FormGroup className="mb-2 mr-sm-2 "/> 
        <FormGroup className="mb-2 mr-sm-2 ">
          <Label for="exampleEmail" className="h4">Url</Label>
          <Input type="text" name="url" id="myUrl"           value={url}
          onChange={e => setUrl(e.target.value)}/>
        </FormGroup>

        <Button color="primary" onClick={setIsOpen}>
        Display Image
      </Button>
      </Form>

      <Draggable>
        <Modal  toggle={setIsOpen} isOpen={modalIsOpen} className="border"  style={{maxWidth: '800px'}} modalTransition={{ timeout: 10 }} >

<ModalBody>
<TransformWrapper>
        {({ zoomIn, zoomOut, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={closeModal}>x</button>
            </div>
            <TransformComponent>
              <img src={url} alt="test" />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
</ModalBody>

        </Modal>
        </Draggable>

    </div>
  );
}


export default App;
