import { useContext } from "react";
import { ViewContext } from "../../contexts/viewContext";

export const AddButton = () => {
  const { setCreateView } = useContext(ViewContext);

  const openCreateView = () => {
    setCreateView(true);
  };

  return (
    <button className="btn-add btn" onClick={openCreateView}>
      Add new user
    </button>
  );
};
