import { useEffect, useState } from "react";

export const useMount = ({ opened }: { opened: boolean }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // if modal opened but mount false then
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, 30);
    }
  }, [opened]);

  return { mounted };
};
