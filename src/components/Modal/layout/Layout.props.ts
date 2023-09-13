import { ReactNode } from "react";

export interface LayoutProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onClose: () => void;
  children: ReactNode;
  opened: boolean;
}
