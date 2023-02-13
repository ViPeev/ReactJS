import { createContext, useState } from "react";

export const ViewContext = createContext(null);

export const ViewProvider = ({ children }) => {
  const [editView, setEditView] = useState(false);
  const [createView, setCreateView] = useState(false);
  const [deleteView, setDeleteView] = useState(false);
  const [infoView,setInfoView] = useState(false);

  return (
    <ViewContext.Provider
      value={{
        editView,
        setEditView,
        createView,
        setCreateView,
        deleteView,
        setDeleteView,
        infoView,
        setInfoView
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};
