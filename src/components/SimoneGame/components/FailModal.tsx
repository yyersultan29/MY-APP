import { FC } from "react";
import { Modal } from "../../Modal/Modal"

interface FailModalProps {
  opened: boolean;
  onClose: () => void;
}

export const FailModal: FC<FailModalProps> = ({ opened, onClose }) => {

  return (
    <Modal opened={opened} onClose={onClose}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}>
        <img width={300} height={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhS89iLxI3gGXRcSqgOYocdH0YedQunN9Zpyh4O2xGDkq_tcSItywJoPFLrKgdAKyP18&usqp=CAU" alt="" />

        <button>Try again</button>
      </div>
    </Modal>
  )

}