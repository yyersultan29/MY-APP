import React, { useEffect, useState } from "react"

import styles from "./Game3072.module.css";

const initalMatrix = [
  ["", "", "", ""],
  ["6", "", "6", ""],
  ["", "", "3", ""],
  ["", "", "", ""],
]

export const Game3072 = () => {

  const [state, setState] = useState<string[][]>(initalMatrix);

  const moveLeft = () => {

    const arr = [...state];

    for (let i = 0; i < 4; i++) {
      let left = 0;
      for (let j = 1; j < 4; j++) {

        if (arr[i][left] !== "" && arr[i][left] === arr[i][j]) {
          arr[i][left] = (Number(arr[i][left]) + Number(arr[i][j])).toString();
          arr[i][j] = "";
          left++;
        }
        if (arr[i][left] !== arr[i][j]) {
          arr[i][left] = arr[i][j];
          arr[i][j] = "";
          left++;
        }

      }
    }

    setState(arr);
  }

  console.log(state);


  const moveRight = () => {

  }

  const moveUp = () => {

  }

  const moveDown = () => {

  }

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        moveUp();
        break;
      case "ArrowDown":
        moveDown();
        break;
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
      default: return;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [])


  return (
    <div>

      {state.map((inner, index) => (
        <div key={index} className={styles.container}>
          {inner.map((value, index) => (
            <div className={styles.block} key={`${index}`}>{value}</div>
          ))}
        </div>
      ))}
    </div>
  )
}