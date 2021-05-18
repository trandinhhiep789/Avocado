import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";



function Modal_pro(modalIsOpen) {
  let dk = useSelector((state) => state.stateFilm.congTac);
  const [modalIsOpen_pro, setModalIsOpen_pro] = useState(false);
  return (
    <div>
      <Modal isOpen={setModalIsOpen_pro(modalIsOpen)} >
        <div className="imgModal">ssss</div>
        <div className="contentModal">
          <button onClick={setModalIsOpen_pro(false)}>Đóng</button>
        </div>
      </Modal>
    </div>
  );
}

export default Modal_pro;
