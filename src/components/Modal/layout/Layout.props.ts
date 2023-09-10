import { ReactNode } from "react";

export interface LayoutProps {
  onClose: () => void;
  children: ReactNode;
  opened: boolean;
}
