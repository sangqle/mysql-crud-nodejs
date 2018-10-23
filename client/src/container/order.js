import React from "react";

import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";

const ModalNewTask = ({ modal, onToggle }) => (
  <Modal isOpen={modal} toggle={onToggle}>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </ModalBody>
    <ModalFooter>
      <Button color="primary">Do Something</Button>{" "}
      <Button color="secondary">Cancel</Button>
    </ModalFooter>
  </Modal>
);

export default ModalNewTask;
