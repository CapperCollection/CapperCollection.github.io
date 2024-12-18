import React from "react";
import { debounce } from "lodash";

import { Content, CoverPage } from "./components";

function App() {
  React.useEffect(() => {
    const smoothScroll = () => {
      if (window.scrollY >= window.innerHeight) return;
      const scrollToTop = Boolean(window.scrollY < window.innerHeight / 2);
      window.scroll({
        top: scrollToTop ? 0 : window.innerHeight,
        behavior: "smooth",
      });
    };
    const handleScroll = debounce(smoothScroll, 200);

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <CoverPage />
      <Content />
    </>
  );
}

export default App;
