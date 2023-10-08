import { FC } from "react"

import "./TypeRacer.css";
import { Modal } from "../Modal/Modal"

interface AlertProps {
  open: boolean
  onClose: () => void
  handleRestart: () => void;
}

export const Alert: FC<AlertProps> = ({ open, onClose, handleRestart }) => {
  return (
    <Modal opened={open} onClose={onClose}>
      <div className="modal-container">
        <h2>End tour</h2>
        <h5>Start again</h5>
        <button className="btn" onClick={handleRestart}>Restart</button>
      </div>
    </Modal>
  )
}