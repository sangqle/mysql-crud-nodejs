import React from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalNewTask = ({ modal, onToggle, header }) => (
  <Modal isOpen={modal} toggle={onToggle}>
    <ModalHeader>{header}</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </ModalBody>
    <ModalFooter>
      <Button color="primary">Next</Button>{" "}
      <Button color="secondary">Cancel</Button>
    </ModalFooter>
  </Modal>
);

export default ModalNewTask;
