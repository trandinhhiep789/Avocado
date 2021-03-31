import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const BackToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div
      className="d-flex scroll-to-top cursor-pointer text-center"
      onClick={scrollToTop}
    >
      <p>back to top</p>
      <i className="fas fa-long-arrow-alt-right mt-2 ml-2"></i>
    </div>
  );
};
export default BackToTop;
