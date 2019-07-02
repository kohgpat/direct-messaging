import React, { useState, useMemo, useContext } from "react";

const DirectUIContext = React.createContext();

function DirectUIProvider(props) {
  const [ui, setUI] = useState({
    aboutUser: {
      show: true
    }
  });

  const value = useMemo(() => [ui, setUI], [ui]);

  return <DirectUIContext.Provider value={value} {...props} />;
}

function useDirectUI() {
  const context = useContext(DirectUIContext);

  if (!context) {
    throw new Error("useDirectUI should be used within a DirectUIContext");
  }

  const [ui, setUI] = context;

  const toggleAboutUser = () => {
    setUI({
      aboutUser: {
        show: !ui.aboutUser.show
      }
    });
  };

  return {
    ui,
    setUI,
    toggleAboutUser
  };
}

export { DirectUIProvider, useDirectUI };
