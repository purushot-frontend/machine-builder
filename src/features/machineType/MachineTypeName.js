import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editMachineNameType } from "./../../store/databaseSlice";

const MachineTypeName = (props) => {
  const { objectID, name } = props;

  const nameRef = useRef();
  const dispatch = useDispatch();

  const NameChangeHandler = () => {
    const name = nameRef.current.value;
    dispatch(editMachineNameType({ objectID, name }));
  };

  return (
    <div className="form-group">
      <label>Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Name"
        required
        defaultValue={name}
        onChange={NameChangeHandler}
        ref={nameRef}
      />
    </div>
  );
};

export default MachineTypeName;
