import { FC } from "react";

import styles from "../Simone.module.css";
import { Modal } from "../../Modal/Modal"

interface FailModalProps {
  opened: boolean;
  onClose: () => void;
}

export const FailModal: FC<FailModalProps> = ({ opened, onClose }) => {

  return (
    <Modal opened={opened} onClose={onClose} style={{ height: '300px' }} >
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
        padding: "10px"
      }}>
        <img
          width={300}
          height={200}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhS89iLxI3gGXRcSqgOYocdH0YedQunN9Zpyh4O2xGDkq_tcSItywJoPFLrKgdAKyP18&usqp=CAU"
          alt=""
        />

        <button className={styles.failModalBtn}>Try again</button>
      </div>
    </Modal>
  )

}