import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//The ScrollToTop is a component used to automaticallu scroll the pafe to the top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
