import React, { useState } from 'react'
import './Info.css'
import { BsInfoCircleFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Info() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
      <>
        <Button style={{ width: 50, height: 50, marginRight: 100 }} onClick={handleShow}>
          <BsInfoCircleFill />
        </Button>

        <Modal className="settings_main" show={show} onHide={handleClose}>
          {/* <Modal.Header className=""> */}
          <div className="settings__container">
            <div>
              <h3>About Pomodoro Technique</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                labore sit quas nam repellat perspiciatis autem, distinctio
                suscipit ex, quae in fuga?
              </p>
            </div>
            <div>
              <h3>Use Experience</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis aliquid cupiditate fugiat velit? Quam explicabo
                consequuntur, odio non qui recusandae vitae dolore nam odit eius
                maxime maiores voluptate quaerat provident?
              </p>
            </div>
            <Button
              style={{ marginTop: 15 }}
              type="primary"
              onClick={handleClose}
            >
              close
            </Button>
          </div>
        </Modal>
      </>
    );
}

export default Info
