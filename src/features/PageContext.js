import React, { createContext, useContext, useEffect, useState } from "react";
const PageContext = createContext();

export const usePageContext = () => {
  return useContext(PageContext);
};
const PageProvider = ({ children }) => {
  const [currPage, setCurrPage] = useState("");

  // sets the current page navigation
  useEffect(() => {
    const path = [...window.location.pathname];
    // remove forward slash of the path (e.g. /technical)
    path.shift();
    setCurrPage(
      path.join("").charAt(0).toUpperCase() + path.splice(1).join("")
    );
  }, [window.location.pathname]);

  return (
    <PageContext.Provider value={{ currPage, setCurrPage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
