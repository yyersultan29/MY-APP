import { useEffect, useState } from "react";
import { PortalProps } from "./Portal.props";
import ReactDOM from "react-dom";

export const Portal = ({ children }: PortalProps) => {

  const [container] = useState<HTMLDivElement>(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    }
  }, [])

  return ReactDOM.createPortal(children, container)

}