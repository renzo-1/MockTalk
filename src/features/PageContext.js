import React, { createContext, useContext, useEffect, useState } from "react";
const PageContext = createContext();

export const usePageContext = () => {
  return useContext(PageContext);
};
const PageProvider = ({ children }) => {
  // get path (e.g. /fundamentals) and remove first char "/"
  const [currPage, setCurrPage] = useState("");

  useEffect(() => {
    const path = window.location.pathname.slice(1);
    if (window.location.pathname) {
      setCurrPage(path);
      console.log("path", path);
    }
  }, []);

  return (
    <PageContext.Provider value={{ currPage, setCurrPage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
