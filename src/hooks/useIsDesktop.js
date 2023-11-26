import { useState, useEffect } from "react";

const useIsDesktop = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return isDesktop;
};

export default useIsDesktop;
