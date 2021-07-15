import React, { useState } from "react";
import "./Settings.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillSetting } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { save_time } from "../../store/action/action";

function Settings(props) {
  // bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // dispatch
  const dispatch = useDispatch();
  const onSave = () => {
    handleClose();
    dispatch(save_time(props.obj));
  };

  return (
    <>
      <Button style={{ width: 50, height: 50 }} onClick={handleShow}>
        <AiFillSetting />
      </Button>

      <Modal className="settings_main" show={show} onHide={handleClose}>
        <div className="settings__container">
          <h3>Settings</h3>
          <div>
            <h4>Pomodoro</h4>
            <input
              type="number"
              value={props.minute}
              onChange={(e) => props.setMinute(e.target.value)}
            />
          </div>
          <div>
            <h4>Short Break</h4>
            <input
              type="number"
              value={props.shortBreak}
              onChange={(e) => props.setShortBreak1(e.target.value)}
            />
          </div>
          <div>
            <h4>Long Break</h4>
            <input
              type="number"
              value={props.longBreak}
              onChange={(e) => props.setLongBreak1(e.target.value)}
            />
          </div>
          <div>
            <h4>Pomodoro Count</h4>
            <input
              type="number"
              value={props.count1}
              onChange={(e) => props.setCount1(e.target.value)}
            />
          </div>
          <div className="text">Auto Play without push notifications</div>
          <div>
            <input className="checked" type="checkbox" />
          </div>
          <Modal.Footer>
            <Button
              style={{ marginTop: 15, textAlign: "center" }}
              type="primary"
              onClick={onSave}
            >
              all ok
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default Settings;
