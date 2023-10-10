import { Fragment, useCallback, useEffect, useState } from "react";
import { words } from "./data"

import "./TypeRacer.css";
import { textMapper } from "./mapper";
import { Alert } from "./Alert";
import carSrc from "./blueCar.png";

let currentIndex = -1;
export const TypeRacer = () => {

  const [open, setOpen] = useState(false);

  const [correct, setCorrect] = useState(0);

  const [lettersList, setLettersList] = useState(() => textMapper(words));

  const handleRestart = useCallback(() => {
    setCorrect(0);
    setLettersList(() => textMapper(words));
    setOpen(false);
    currentIndex = -1;
  }, [])

  const handleClickKey = (e: KeyboardEvent) => {

    if (e.key.length > 1) return;

    if (currentIndex + 1 >= lettersList.length) {
      setOpen(true);
      return;
    }

    setLettersList(prev => {

      let copy = [...prev];
      console.log(currentIndex);

      if (e.key === copy[currentIndex].letter) {
        copy[currentIndex] = {
          className: "correct",
          letter: copy[currentIndex].letter
        };
        setCorrect(prev => ++prev);

      } else {
        copy[currentIndex] = {
          className: copy[currentIndex].letter === " " ?
            "wrong-space" :
            "wrong",
          letter: copy[currentIndex].letter
        };
      }

      return copy;
    });

    ++currentIndex

  }

  useEffect(() => {

    window.addEventListener("keyup", handleClickKey);

    return () => {
      window.removeEventListener("keyup", handleClickKey);
    }
  }, []);

  const pixelMoves = Math.floor(700 / lettersList.length);

  return (
    <Fragment>

      <div className="main">
        <h3>{correct} / {lettersList.length}</h3>

        <div>
          <img
            width={80}
            height={50}
            src={carSrc}
            alt="car"
            style={{
              transform: `translateX(${correct * pixelMoves}px)`,
              transition: "all 0.5s ease"
            }}
          />
          <div className="wall" />
        </div>

        <div className="container">
          {lettersList.map((item, index) => (
            <div
              key={index}
              className={`
              letter 
              ${item.className} 
              ${index === currentIndex + 1 ?
                  " active" :
                  ""}`
              }
            >
              {
                item.letter === " " ?
                  <span>&nbsp;</span> :
                  item.letter
              }
            </div>
          ))}
        </div>

      </div>

      <Alert
        open={open}
        onClose={() => setOpen(false)}
        handleRestart={handleRestart}
      />
    </Fragment>
  )
}