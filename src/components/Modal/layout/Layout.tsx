import { FC, useEffect, useRef, useState } from "react";

import { CSSTransition } from "react-transition-group";

import styles from "./Layout.module.css";
import animationStyles from "./animation.module.css";
import { LayoutProps } from "./Layout.props";
import { ANIMATION_TIME } from "./const";

const overlayAnimation = {
  enter: animationStyles.overlayEnter,
  enterActive: animationStyles.overlayEnterActive,
  exit: animationStyles.overlayExit,
  exitActive: animationStyles.overlayExitActive,
};

const contentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

export const Layout: FC<LayoutProps> = ({ opened, children, onClose }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return (
    <div className={styles.container}>

      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <div ref={overlayRef} className={styles.overlay} onClick={onClose} />
      </CSSTransition>

      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <div ref={contentRef} className={styles.content} >
          {children}
        </div>
      </CSSTransition>

    </div>
  )
}