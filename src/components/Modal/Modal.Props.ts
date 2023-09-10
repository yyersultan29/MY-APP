import React from "react";

export interface ModalProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  opened: boolean;
  onClose: () => void;
}
