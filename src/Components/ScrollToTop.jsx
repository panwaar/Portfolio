import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router keeps the window scroll position across navigations, so moving
 * from a scrolled-down page to a shorter one lands you past its content and
 * looks like nothing happened. Reset to the top whenever the route changes.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
