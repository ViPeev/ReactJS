import { useContext } from "react";
import { ViewContext } from "../../contexts/viewContext";
import EditUser from "./EditUser";
import AddUser from "./AddUser";
import DelUser from "./DelUser";
import Info from "./Info";

export const FormSwitch = () => {
  const {
    editView,
    setEditView,
    deleteView,
    setDeleteView,
    createView,
    setCreateView,
    infoView,
    setInfoView,
  } = useContext(ViewContext);

  const formCloseControl = {
    edit:setEditView,
    del:setDeleteView,
    create:setCreateView,
    info:setInfoView
  }

  const closeHandler = (type) => {
    formCloseControl[type](false);
  }

  return (
    <>
      {editView ? <EditUser closeForm={closeHandler}/> : null}
      {createView ? <AddUser closeForm={closeHandler}/> : null}
      {deleteView ? <DelUser closeForm={closeHandler}/> : null}
      {infoView ? <Info closeForm={closeHandler}/> : null}
    </>
  );
};
