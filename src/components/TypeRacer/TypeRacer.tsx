import { Fragment, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { words } from "./data"

import "./TypeRacer.css";
import { textMapper } from "./mapper";
import { Alert } from "./Alert";
import carSrc from "./blueCar.png";


export const TypeRacer = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  const [correct, setCorrect] = useState(0);

  const [lettersList, setLettersList] = useState(() => textMapper(words));

  const handleRestart = useCallback(() => {
    setCorrect(0);
    setLettersList(() => textMapper(words));
    setOpen(false);
    setCurrentIndex(-1);
  }, [])

  const handleClickKey = (e: KeyboardEvent) => {
    console.log(currentIndex);

    if (e.key === "Backspace") {

      setCurrentIndex(currentIndex => {
        setLettersList(prev => {
          let copy = [...prev];
          copy[currentIndex + 1] = { className: "", letter: copy[currentIndex + 1].letter }
          return copy;
        });
        return currentIndex - 1;
      });
      return;
    }

    if (e.key.length > 1) return;

    if (currentIndex + 1 >= lettersList.length) {
      setOpen(true);
      return;
    }

    setCurrentIndex(currentIndex => {
      setLettersList(prev => {

        let copy = [...prev];

        if (e.key === copy[currentIndex]?.letter) {
          copy[currentIndex] = {
            className: "correct",
            letter: copy[currentIndex].letter
          };
          setCorrect(prev => prev + 1);

        } else {
          copy[currentIndex] = {
            className: copy[currentIndex]?.letter === " " ?
              "wrong-space" :
              "wrong",
            letter: copy[currentIndex]?.letter
          };
        }

        return copy;
      });
      return currentIndex + 1;
    })

  }

  useEffect(() => {

    window.addEventListener("keyup", (e) => handleClickKey(e));

    return () => {
      window.removeEventListener("keyup", (e) => handleClickKey(e));
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